function fibs(num) {
    if(num === 1) {
        return [0];
    }
    if(num === 2) {
        return [0,1];
    }
    let fibArray = [0, 1];

    for(i = 2; i < num; i++) {
        fibArray.push(fibArray[i - 1] + fibArray[i - 2]);

    }
    return fibArray;
}

console.log(fibs(5));



function fibsRec(num) {
    if(num === 1) {
        return 0;
    }
    if(num === 2) {
        return 1;
    }
    

    return (fibsRec(num - 1) + fibsRec(num - 2));
}

let array = []
let num = 4
for( i = 0; i < num; i++ ) {
    array.push(fibsRec(i + 1))
}
console.log(array);



