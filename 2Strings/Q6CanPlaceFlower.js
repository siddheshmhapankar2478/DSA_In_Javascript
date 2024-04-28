var canPlaceFlowers = function (flowerbed, n) {
  if (flowerbed[0] === 0 && n === 1 && flowerbed.length === 1) {
    return true;
  }
  if (flowerbed[0] === 0 && n > 0) {
    const right = flowerbed[1];
    if (right === 0) {
      flowerbed[0] = 1;
      n--;
    }
  }
  if (flowerbed.length >= 2 && flowerbed[flowerbed.length - 1] === 0 && n > 0) {
    const left = flowerbed[flowerbed.length - 2];
    if (left === 0) {
      flowerbed[flowerbed.length - 1] = 1;
      n--;
    }
  }

  for (let i = 1; i < flowerbed.length - 1; i++) {
    if (flowerbed[i] === 0 && n > 0) {
      const left = flowerbed[i - 1];
      const right = flowerbed[i + 1];
      if (left === 0 && right === 0) {
        flowerbed[i] = 1;
        n--;
      }
    }
  }

  return n === 0;
};

var canPlaceFlowers1 = function (flowerbed, n) {
  flowerbed = [0, ...flowerbed, 0];
  for (let i = 1; i < flowerbed.length - 1; i++) {
    if (flowerbed[i] === 0 && n > 0) {
      const left = flowerbed[i - 1];
      const right = flowerbed[i + 1];
      if (left === 0 && right === 0) {
        flowerbed[i] = 1;
        n--;
      }
    }
  }

  return n === 0;
};

canPlaceFlowers([0, 0, 0, 0, 1], 2);
canPlaceFlowers1([0, 0, 0, 0, 1], 2);
