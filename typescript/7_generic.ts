const arrayOfNumbers: Array<number> = [1,1,2,3,5]
const arrayOfStrings: Array<string> = ['Pashol','Nahuy']

function reserve<T>(array: T[] ): T[] {
    return array.reverse()
}


console.log(reserve(arrayOfNumbers) )
console.log(reserve(arrayOfStrings) )
