class Rectangle{
    constructor(length, width, color){
        this.length = length;
        this.width = width;
        this.color = color
    }

    area(){
        
        const area =this.length*this.width;
        return area;
    }

}

const rect = new Rectangle(2,4);
let area = rect.area();
console.log(area);