
import glitchChars from "./glitchCharacters.ts";


function randomGlitchChar() {
    const index = Math.floor(Math.random() * glitchChars.length);
    return glitchChars[index];

}

export default randomGlitchChar;
