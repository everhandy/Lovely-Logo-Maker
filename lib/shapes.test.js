const { Circle, Square, Triangle } = require('./shapes');

describe("Shape Test", () => {
    test("Circle with red background", () => {
        const shape = new Circle();
        shape.setColor("red");
        expect(shape.render()).toEqual('<circle cx="150" cy="115" r="80" fill="red" />');
    });

    test("Square with yellow background", () => {
        const shape = new Square();
        shape.setColor("yellow");
        expect(shape.render()).toEqual('<rect x="73" y="40" width="160" height="160" fill="yellow" />');
    });

    test("Triangle with blue background", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150,18 244,182 56,182" fill="blue" />');
    });
});