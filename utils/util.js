function convertToCastString(casts) {
  let castsjoin = ''
  for (let cast of casts) {
    castsjoin = castsjoin + cast.name + " / "
  }
  return castsjoin.substring(0, castsjoin.length - 2);
}

function convertToCastInfos(casts) {
  let castsArray = []
  for (let cast of casts) {
    var newCast = {
      img: cast.avatars ? cast.avatars.large : '',
      name: cast.name
    }
    castsArray.push(newCast)
  }
  return castsArray
}

export {
  convertToCastString,
  convertToCastInfos
}