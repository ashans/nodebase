function ABC(name) {
    this.name = name;
}

ABC.prototype.setName = (name) => {
    this.name = name;
}

ABC.prototype.getName = function() {
    return this.name;
}

var abc1 = new ABC("name1");
// abc1.setName("abc1");
console.log(abc1.getName());