

function makeString(): void{
    const string_len: number = 12
    const chars: string = "1234567890qwertyuiopåassdfghjklöäzxcvbnm"


    let str: string = ""
    for(let i: number = 0; i < string_len; i++){
        const index = Math.floor(Math.random() * 38);
        str += chars[index]
    }
    
    console.log(str)
    setTimeout(makeString, 5000)
}


makeString()

