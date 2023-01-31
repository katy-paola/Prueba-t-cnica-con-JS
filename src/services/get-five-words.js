const getFiveWords = phrase => {
  let spaces = 0;
  let index = 0;
  for (const word in phrase) {
    if(phrase[word] === " ") {
      spaces++;
    }
    if(spaces === 5) {
      index = word;
      break;
    }
  }
  return phrase.slice(0, index);
}

export default getFiveWords;
