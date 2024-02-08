function group(arr) {

    let resultArr = []
    let checkArr = []

    for (var num of arr) {
        if (checkArr.includes(num) === false) {
            resultArr.push(arr.filter((otherNum) => num === otherNum))
            checkArr.push(num)
        }
    }
    return resultArr

}