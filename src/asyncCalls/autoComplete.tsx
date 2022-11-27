const autoComplete = async (value: string): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    const matchingWords = words
      .filter((word) => word.includes(value) && word !== value)
      .sort((wordA, wordB) => wordA.length - wordB.length).slice(0,15);
    resolve(matchingWords);
  });
};

export default autoComplete;

const words = [
  "ring",
  "writer",
  "absorption",
  "fast",
  "mention",
  "agenda",
  "king",
  "approach",
  "coalition",
  "progress",
  "even",
  "brand",
  "notorious",
  "request",
  "push",
  "waist",
  "bathtub",
  "dealer",
  "heavy",
  "freckle",
  "recovery",
  "supply",
  "beginning",
  "water",
  "exceed",
  "red",
  "needle",
  "employ",
  "shape",
  "neglect",
  "color",
  "genuine",
  "nuclear",
  "salt",
  "detail",
  "honor",
  "bow",
  "equip",
  "meaning",
  "wood",
  "software",
  "theory",
  "delete",
  "revise",
  "creed",
  "hypothesize",
  "bread",
  "bush",
  "facility",
  "act",
];
