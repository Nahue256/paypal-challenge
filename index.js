const sentences = [
    "The quick brown fox jumps over the lazy dog",
    "Hello world",
    "Pack my box with five dozen liquor jugs"
  ];

function isPangram(string){
    const dictionary = 'abcdefghijkmnlopqrstuvxyz '
    let isPangram = true;
    for(let i = 0 ; i<string.length ; i++){
        for(let j = 0 ; j<dictionary.length ; j++){
            console.log(string[i])
            if(string[i] === dictionary[j]) next;
        }
        isPangram = false
    }
    return isPangram
}

function calculatePangrams(arr){
    let response = []
    for(let i=0 ; i<arr.length ; i++){
        console.log(arr[i])
        if(isPangram(arr[i])) response.push({sentence : arr[i], isPangram: true})
        else response.push({sentence : arr[i], isPangram: false})
    }
    return response;
}