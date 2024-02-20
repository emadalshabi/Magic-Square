let arr = [
    8, 1, 6,
    3, 5, 7,
    4, 9, 2
]

let dia1 = arr[0] +  arr[4] +  arr[8]
let dia2 = arr[2] +  arr[4] +  arr[6]
if (dia1===dia2){
    console.log(true)
}else{
    console.log(false)

}