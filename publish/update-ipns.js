import * as Name from 'w3name';
import fs from 'fs/promises';
import dotenv from 'dotenv';

const keyBytes = await fs.readFile('./publish/ipns-key');
const name = await Name.from(keyBytes);

dotenv.config();
const cid = process.env.LATEST_CID;
const value = `/ipfs/${cid}`;

const revision = await Name.v0(name, value);
await Name.publish(revision, name.key);

console.log(`✅ Published:
🔗 https://ipfs.io/ipns/${name.toString()}`);
