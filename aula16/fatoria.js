// 5! = 5x4x3x2x1 = 120

/*function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c-- ){
        fat *= c
    }
    return fat
}
console.log(fatorial(5))*/

//recursiva chama a funça~odentro dela mesma
function fatorial(n){
    if(n== 1){
        return 1
    }else{
        return n * fatorial(n-1)
    }
}
console.log(fatorial(5))

//5! = 5 x 4!
//n! = n x (n-1)
//1! = 1 