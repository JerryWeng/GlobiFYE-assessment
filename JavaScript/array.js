function doubleEven(items){
    for (let i = 0; i < items.length; i++){
        if (items[i] % 2 == 0){
            items[i] *= 2;
        }
    }

    return items;
}

let stuff = [1,2,3,4,5];
doubleEven(stuff);