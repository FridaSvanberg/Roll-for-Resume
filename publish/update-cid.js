import fs from 'fs';

export default async function updateReadmeWithCID() {
  const cid = fs.readFileSync('./publish/latest-cid.txt', 'utf-8').trim();
  const readmePath = './README.md';

  let readme = fs.readFileSync(readmePath, 'utf-8');

  // Replace old CID in README
  readme = readme.replace(
    /https:\/\/bafy[^.]+\.ipfs\.w3s\.link/g,
    `https://${cid}.ipfs.w3s.link`
  );

  fs.writeFileSync(readmePath, readme);

  console.log(`✅ README.md updated with latest CID: ${cid}`);
}
