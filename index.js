// Your code here
// class Polygon {
//     constructor(sides){
//         this.sides = sides;
//     }

//     get countSides(){
//         return this.sides.length;
//     }

//     get perimeter(){
//         return this.sides.reduce((acc, side) => acc+side,0);
//     }
// }

// // class Triangle extends Polygon {
// //    constructor(sides){
// //     super(sides);
// //    }

// //    get isValid(){
// //     if(this.countSides !== 3){
// //         return false;
// //     }
// //     const [a, b, c] = this.sides;
// //     return a + b > c && a + c > b && b + c > a;
// //    }

// // }

// class Square extends Polygon {
//     constructor(sideLength) {
//       super([sideLength, sideLength, sideLength, sideLength]);
//     }
  
//     get area() {
//       return this.sides[0] ** 2;
//     }
  
//     get isValid() {
//       const [a, b, c, d] = this.sides;
//       return a === b && b === c && c === d;
//     }
//   }
class Polygon {
    constructor(sides) {
      this.sides = sides;
    }
  
    get countSides() {
      return this.sides.length;
    }
  
    get perimeter() {
      return this.sides.reduce((acc, side) => acc + side, 0);
    }
  }
  
  class Triangle extends Polygon {
    constructor(sides) {
      super(sides);
    }
  
    get isValid() {
      if (this.countSides !== 3) {
        return false;
      }
  
      const [a, b, c] = this.sides;
      return a + b > c && b + c > a && c + a > b;
    }
  }
  
  class Square extends Polygon {
    constructor(sideLength) {
      super(sideLength);
      
    }
  
    get area() {
      return this.sides[0] ** 2;
    }
  
    get isValid() {
      if (this.countSides !== 4) {
        return false;
      }
  
      const [a, b, c, d] = this.sides;
      return a === b && b === c && c === d;
    }
  }
  const triangle = new Triangle([3, 4, 5]);
console.log(triangle.isValid); // Output: true

const square = new Square(5);
console.log(square.perimeter); // Output: 20
console.log(square.area); // Output: 25
console.log(square.isValid); // Output: true
  