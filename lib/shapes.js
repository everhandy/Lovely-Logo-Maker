class Shape {
    constructor() {
        this.color = "";
    }
    
// Originally tried to leave this out since the prompt responses could pass this data through the template literals.
// However, setColor() was part of the shape.test.js (line 6, 12, and 18) so I left this in.
    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shape {
    // alternatively, I could user render(bgColor) and pass in this from the responses but see comment line 5 & 6
    render() {
        return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150,18 244,182 56,182" fill="${this.color}" />`;
    }
}

// exported each shape
module.exports = {
    Circle,
    Square,
    Triangle
};
