describe('Square', () => {
  it('returns the area of a square', () => {
    const square = new Square(10)
    const result = square.area()
    expect(result).toBe(100)
  })
    it('only accepts numbers as an argument', () => {
    x = function() { error_square = new Square('a') };
    expect(x).toThrow(Error)
  })
})

// Questions for tomorrow
// 1. Why is the function not called within the expect block, is it the 
// try block that delays its instantiation?
// 2. What function does the (Error) argument in .toThrow actually do?
// Seem to not really change the tests if I put in 'Tree' or Integer