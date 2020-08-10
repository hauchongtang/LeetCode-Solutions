// 8x8 Chessboard
const queensAttacktheKing = (queens, king) => {
  // Check for 8 corners of King
  var a = JSON.stringify(king)
  var b = JSON.stringify(queens)
  var c = a.indexOf(b)
  var checkBool = []
  if (c != -1) {
    checkBool.push(true)
  } else {
    checkBool.push(false)
  }
}
