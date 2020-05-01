console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function() {
    return this.split('').reverse().join('')
}

console.log('Stranger Things'.reverse())

Array.prototype.first = function(){
    return this[0]
}

console.log([1, 2, 3, 4].first())
console.log(['a', 'b', 'c', 'd'].first())

String.prototype.toString = function() {
    return 'Lascou tudo'
}

console.log('Stranger Things'.reverse())