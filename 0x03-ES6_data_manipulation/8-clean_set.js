function cleanSet(set, startString) {
  const filteredValues = [...set].filter((value) => value.startsWith(startString));
  return filteredValues.join(startString).slice(startString.length);
}

export default cleanSet;
