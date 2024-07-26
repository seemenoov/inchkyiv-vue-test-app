const isCyrillic = (word: string): boolean => {
  const str = word.replace(/\s+/g, "").trim();
  return /^[\u0400-\u052F\u2DE0-\u2DFF\uA640-\uA69F]+$/.test(str);
};

export default isCyrillic;
