// CSIT senventh sem - Bikash, Nibedika and Rabin
function main(value) {
    let isAM = true;
    let [hr, min] = value.split(":");

    let hour = parseInt(hr)

    if (hour === 0) {
        hour = 12;
        isAM = true;
        return `${hour}:${min}${isAM ? "AM" : "PM"}`


    }
    else if (hour === 12) {
        isAM = false;
        return `${hour}:${min}${isAM ? "AM" : "PM"}`

    }
    else (hour > 12)
    {
        hour = hr % 12;
        isAM = false;
        return `${hour}:${min}${isAM ? "AM" : "PM"}`

    }

}

console.log(main("11:00"))
