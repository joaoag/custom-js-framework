const it = (msg, fn) => describe('  ' + msg, fn)

const describe = (desc, fn) => {
  console.log(desc)
  fn()
}

const passMessage = function() {
  console.log('%c Pass!', 'color: #00af00')
  return true
}

const failMessage = function() {
  console.log('%c Fail!', 'color: #ff0000')
  return false
}

const matchers = (exp) => ({
  toBe: (assertion) => {
    if (exp === assertion) {
      passMessage()
    } else {
      failMessage()
    }
  },
  toThrow: (error) => {
    var result = 'Fail!'
    try {
      exp();
    }
    catch(e) {
      result = 'Pass!';
    }
    finally {   
      if (result === 'Pass!') {
      passMessage()
      } else {
      failMessage()
      }
    }
  }
})

const expect = (exp) => matchers(exp)




