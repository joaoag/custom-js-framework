const it = (msg, fn) => describe('  ' + msg, fn)

const describe = (desc, fn) => {
  console.log(desc + ":")
  fn()
}

const passMessage = () => {
  console.log('%c*  Pass!  *', 'color: forestgreen; background: lightgreen')
  return true
}

const failMessage = () => {
  console.log('%c*  Fail!  *', 'color: red; background: pink')
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




