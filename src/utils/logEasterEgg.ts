export function logEasterEgg(): void {
  const roll = Math.floor(Math.random() * 20) + 1;


  if (roll === 1) {
    console.log(`%c🎲 You rolled a 1 – Critical Fail!
You tripped over a missing semicolon and summoned a bug demon.
Tip: Even heroes need to debug sometimes.
  `, 'color: red; font-weight: bold;')

  } else if (roll <= 9) {
    console.log(`%c🎲 You rolled a ${roll}
   A decent roll, but your linter just gave you side-eye.
🧝🏾‍♂️ Frida Svanberg – Frontend Developer (Level 7)
💻 React, TypeScript, Tailwind
📦 IPFS / Web3.Storage | github.com/FridaSvanberg
  `, 'color: orange;')

  } else if (roll <= 19) {
    console.log(`%c🎲 You rolled a ${roll}
   Strong roll! Your terminal is blessed by the dev gods.
🧙‍♀️ Frida’s enchanted stack: React, TS, Tailwind, Git
♿ Accessibility-focused | 🌍 Hosted on the decentralized web`, 'color: 00ffaa;')

  } else {
    console.log(`%c🎲 NATURAL 20! 🎉 Critical Success!
🧝🏾‍♂️ Frida the Frontend Bard casts ✨ pixel-perfect UI
🔮 Tools: React, TypeScript, Tailwind, IPFS
📜 github.com/FridaSvanberg | Hosted via Web3.Storage + IPNS
🥂 May your bugs be few and your caffeine full.`, 'color: limegreen; font-weight: bold;')
  }

}