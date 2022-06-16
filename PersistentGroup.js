class PGroup {
  constructor(members) {
    this.members = members;
  }
has(value) {
    return this.members.includes(value);
  }
  
  add(value) {
    if (this.has(value)) 
    return this;
    else
    return new PGroup(this.members.concat([value]));
  }
  delete(value) {
    if (!this.has(value)) 
    return this;
    else
    return new PGroup(this.members.filter(m => m !== value));
  }
}
PGroup.empty = new PGroup([]);

//check
let p = PGroup.empty.add("p");
let pq = p.add("q");
let q = pq.delete("p");

console.log(q.has("p"));
// → true
console.log(pq.has("p"));
// → true
console.log(p.has("q"));
// → false