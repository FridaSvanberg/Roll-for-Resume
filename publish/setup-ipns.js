import * as Name from 'w3name';
import fs from 'fs/promises';

const name = await Name.create();

// Save your IPNS name and key bytes
await fs.writeFile('./publish/ipns-key', name.key.bytes);

console.log('🗝️ Key saved!');
console.log('🔗 Your IPNS name is:', name.toString());
