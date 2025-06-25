// CSIT senventh sem - Bikash, Nibedika and Rabin
function main(n = 12, k = 3) {

    let arr = Array.from({ length: n }, (i, j) => j + 1)
    let newArry = []

    for (let i = 0; i < n; i++) {

        newArry.push(arr.slice(i, i + k))
        i = i + k1
    }


    return newArry
}


console.log(main(12, 3))