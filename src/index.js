/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences) {
  // your implementation
  count = 0;
  for (var i = 0; i < preferences.length; i++) {
    for (var j = 0; j < preferences.length; j++) {
      for (var k = 0; k < preferences.length; k++) {
        if (((i + 1) == preferences[k]) && ((k + 1) == preferences[j]) && ((j + 1) == preferences[i])) {
          count += 1;
        }
      }
    }
  }
  return (count - count % 3) / 3;
};
