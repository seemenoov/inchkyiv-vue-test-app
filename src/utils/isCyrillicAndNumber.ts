const isCyrillicAndNumber = (word: string): boolean => {
  const str = word.replace(/\s+/g, "").trim();
  const regex = /^[0-9А-Яа-яЁё.,!?/\\-і]+$/;
  return regex.test(str);
};

export default isCyrillicAndNumber;
