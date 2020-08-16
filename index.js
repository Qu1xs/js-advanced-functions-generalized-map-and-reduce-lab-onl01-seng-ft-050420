function map(ary, cb){
    return ary.map(i => cb(i))
}

function reduce(ary, cb, acu){
    if (!!acu) {
        return ary.reduce(cb, acu);
      } else {
        return ary.reduce(cb);
      }
}