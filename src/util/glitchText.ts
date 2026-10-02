import randomGlitchChar from "./randomGlitch.ts";


function glitchText(settledUpTo: number): string {
    const text = "Injection Successful";
    return text
    .split('')
        .map(((char, index) => {
            if(index < settledUpTo) {
                return char;
            }
            const shouldGlitch = Math.random() < 0.4;
            return shouldGlitch ? randomGlitchChar() : char;
        }))
        .join('');
}

export default glitchText;
