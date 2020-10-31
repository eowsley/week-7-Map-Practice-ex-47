// Map method- function cleanNames. should accept an array of strings
// which may contain additional space characters at the beinning and end.
// The cleanNames function should use the array map method to 
// RETURN a new array, full of trimmed names



const cleanNames = (arr) => {
    return ['  Kate', 'Tod   ', '   Mimi   ', ' Sarah ', 'Kat'].map(function(x) {
        return x.trim();
    });
}
console.log(cleanNames())