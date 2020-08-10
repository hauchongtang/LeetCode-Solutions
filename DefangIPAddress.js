const defangIPaddr = (address) => {
  var i;
  var str = '';
  for (i = 0; i < address.length; i++) {
    if (address[i] !== ".") {
      str += address[i];
    } else {
      str += "[.]";
    }
  }
  return str;
}
