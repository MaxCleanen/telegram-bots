const getRandomArbitrary = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is i
nclusive
}

const getRandomNumber = ()=>{
    return getRandomArbitrary(0, 15);
}

export const getRandomNumbers = (count)=>{
    const arr = [];
    let i = count;
    while(i > 0) {
            arr.push(getRandomNumber());
            i--;
        }   
    return arr;
}