import * as Name from 'w3name';
import fs from 'fs/promises';
import { execSync } from 'child_process';
import ora from 'ora';
import chalk from 'chalk';

async function main() {
  const spinner = ora('Starting deployment...').start();

  try {
    // 🧱 Build
    spinner.text = 'Building project...';
    execSync('npm run build', { stdio: 'ignore' });

    // 📤 Upload to Web3.Storage
    spinner.text = 'Uploading to Web3 Storage...';
    const result = execSync('w3up upload ./dist', { encoding: 'utf-8' });
    const cidMatch = result.match(/bafy[^\s]+/);
    if (!cidMatch) throw new Error('❌ CID not found!');
    const cid = cidMatch[0];

    // 💾 Save latest CID
    await fs.writeFile('./publish/latest-cid.txt', cid);

    // 🔑 Load IPNS key
    spinner.text = 'Loading IPNS key...';
    const keyBytes = await fs.readFile('./publish/ipns-key');
    const name = await Name.from(keyBytes);

    // 🔁 Update IPNS
    spinner.text = 'Publishing new IPNS revision...';
    const revision = await Name.v0(name, `/ipfs/${cid}`);
    await Name.publish(revision, name.key);

    // 📝 Update README with new CID
    spinner.text = 'Updating README with new CID...';
    const updateReadme = await import('./update-cid.js');
    await updateReadme.default();

    // 🐙 Git commit and push
    spinner.text = 'Committing & pushing to GitHub...';
    execSync('git add .', { stdio: 'ignore' });
    execSync(`git commit -m "Deploy: update IPNS to ${cid}"`, {
      stdio: 'ignore',
    });
    execSync('git push', { stdio: 'ignore' });

    // ✅ Done
    spinner.succeed(
      `🚀 Deployed! View: ${chalk.cyan(
        `https://w3s.link/ipns/${name.toString()}`
      )}`
    );
  } catch (err) {
    spinner.fail(chalk.red('Deployment failed'));
    console.error(err.message || err);
  }
}

main();
