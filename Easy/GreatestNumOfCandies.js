const kidsWithCandies = (candies, extraCandies) => {
    var i;
    var boolArray;
    var max = Math.max(...candies);
    for (i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= max) {
            boolArray.push(true)
        } else {
            boolArray.push(false)
        }
    }
    return boolArray;
}
