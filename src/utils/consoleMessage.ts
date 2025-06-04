import { logEasterEgg } from "./logEasterEgg";
export default function showCspInfo(): void {
    (window as unknown as { rollForInvestigation: () => void }).rollForInvestigation = logEasterEgg;


    console.log(
        `%c
🕵️‍♂️ Heads up, dev!
You might see a “navigate-to” CSP warning.
Browsers don’t know this rule yet—
It’s harmless! Carry on with your quest. ⚔️

But wait...
You sense something lurking in the console shadows.
Roll an insight check: type rollForInvestigation() below!
    `,
        'color: white; font-weight: bold; font-family: monospace;'
    );
}