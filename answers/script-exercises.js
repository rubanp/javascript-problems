import Scripts from "./scripts.js";

// =============================================================================
// Q1: Find the oldest and newest scripts that are alive and dead
// =============================================================================

const newestAlive = Scripts.filter((script) => script.living).reduce(
  (final, script) => (script.year > final.year ? script : final)
);

const oldestAlive = Scripts.filter((script) => script.living).reduce(
  (final, script) => (script.year < final.year ? script : final)
);

const newestDead = Scripts.filter((script) => !script.living).reduce(
  (final, script) => (script.year > final.year ? script : final)
);

const oldestDead = Scripts.filter((script) => !script.living).reduce(
  (final, script) => (script.year < final.year ? script : final)
);

console.log(newestAlive);
console.log(oldestAlive);
console.log(newestDead);
console.log(oldestDead);

// =============================================================================
// Q2: Find the average year of alive and dead scripts
// =============================================================================

const Alive = Scripts.filter((script) => script.living);
const averageAlive = Math.round(
  Alive.reduce((final, script) => final + script.year, Alive[0].year) /
    Alive.length
);

const Dead = Scripts.filter((script) => !script.living);
const averageDead = Math.round(
  Dead.reduce((final, script) => final + script.year, Dead[0].year) /
    Dead.length
);

console.log(averageAlive);
console.log(averageDead);

// =============================================================================
// Q3: Find the three languages with the most and least number of characters
// =============================================================================

const charactersPerScript = Scripts.map((script) => {
  let totalCharacters = 0;
  for (const characterRange of script.ranges) {
    totalCharacters += characterRange[1] - characterRange[0];
  }
  return {
    name: script.name,
    characters: totalCharacters,
  };
});

charactersPerScript.sort(({ characters: a }, { characters: b }) => a - b);

const leastCharacters = [];
const mostCharacters = [];

leastCharacters.push(
  charactersPerScript[0],
  charactersPerScript[1],
  charactersPerScript[2]
);
mostCharacters.push(
  charactersPerScript[charactersPerScript.length - 1],
  charactersPerScript[charactersPerScript.length - 2],
  charactersPerScript[charactersPerScript.length - 3]
);

console.log(leastCharacters, mostCharacters);

// =============================================================================
// Q4: Given a paragraph of text, tally the characters from each language
// =============================================================================

const paragraph = "Hello World 你好 世界 नमस्ते दुनिय ा ஹலோ உலகம்";

const codePoints = (string) => {
  let chars = [];
  let codes = [];
  for (let char of string) {
    chars.push(char);
  }
  for (let char of chars) {
    codes.push(char.codePointAt());
  }
  return codes;
};

const codes = codePoints(paragraph);

const whatScript = (charCode) => {
  for (let script of Scripts) {
    if (
      script.ranges.some(([from, to]) => {
        return charCode >= from && charCode < to;
      })
    ) {
      return script.name;
    }
  }
  return null;
};

let scriptsList = [];

for (let code of codes) {
  scriptsList.push(whatScript(code));
}

const scriptTally = scriptsList.reduce((tally, script) => {
  if (script === null) {
    tally["other"] = (tally["other"] || 0) + 1;
    return tally;
  } else {
    tally[script] = (tally[script] || 0) + 1;
    return tally;
  }
}, {});

console.log(scriptTally);
