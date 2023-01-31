const getFiveWords = phrase => {
  return phrase.split(" ").slice(0, 5).join(" ")
}

export default getFiveWords;
