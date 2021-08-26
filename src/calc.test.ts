class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }
}

describe('Calculator', () => {
  describe('add', () => {
    let calc: Calculator;
    beforeEach(() => {
      // arrange
      calc = new Calculator();
    });
    it('should add 1 and 1 and return 2', () => {
      // act
      const result = calc.add(1, 1);
      // assert
      expect(result).toBe(2);
    });

    it('should add 2 and 1 and return 3', () => {
      const result = calc.add(2, 1);
      expect(result).toBe(3);
    });
  });
});

describe('double', () => {
  it('spy should be called', () => {
    const spy = jest.fn();
    spy(4);
    expect(spy).toHaveBeenCalled();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(4);
  });
});
