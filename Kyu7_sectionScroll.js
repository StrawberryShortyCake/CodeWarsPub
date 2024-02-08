function getSectionIdFromScroll(scrollY, sizes) {

    let newArr = sizes.map((size, index, sizes) => {
        while (index > 0) {
            size = size + sizes[index - 1];
            index--
        }
        return size
    })

    for (i = 0; i < newArr.length; i++) {
        if (scrollY < newArr[i]) {
            return i
        }
    }

    return -1

}