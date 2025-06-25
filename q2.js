// CSIT senventh sem - Bikash, Nibedika and Rabin
function main(value) {

    let values = value.split(" ");
    const map = "zyxwvutsrqponmlkjihgfedcba";
    const map2 = "abcdefghijklmnopqrstuvwxyz";
    const aReg = /^[A-Z]$/;
    const avow = /^[(a+e+i+o+u)+(A+E+I+O+U)]$/;
    let sum = 0;

    let ciphervalue = "";
    for (let v of values) {
        for (let char of v) {

            if (char.match(aReg) && char.match(avow)) {
                let val = (map.indexOf(char.toLowerCase()) + 1) ** 2 + 10
                sum = sum + val
                ciphervalue = ciphervalue + val + " "
                console.log("Upper+V" + ciphervalue)
            }
            else if (char.match(aReg)) {
                let val = map.indexOf(char.toLowerCase()) + 1 + 10
                sum = sum + val
                ciphervalue = ciphervalue + val + " ";
                console.log("Upper" + ciphervalue)
            }
            else if (char.match(avow)) {
                let val = (map.indexOf(char.toLowerCase()) + 1) ** 2
                sum = sum + val
                ciphervalue = ciphervalue + val + " ";
                console.log("Upper+V" + ciphervalue)
            }
            else {
                let val = map.indexOf(char.toLowerCase()) + 1;
                sum = sum + val
                ciphervalue = ciphervalue + val + " ";
            }
        }

        ciphervalue = ciphervalue + "|"
    }


    let newCipher = ciphervalue.slice(0, -2)

    const key = sum % 26;
    newCipher = newCipher + "-KEY:" + map2[key].toUpperCase()

    return newCipher;
}

