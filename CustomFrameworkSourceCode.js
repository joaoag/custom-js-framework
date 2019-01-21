const it = (msg, fn) => describe('  ' + msg, fn)

const describe = (desc, fn) => {
  console.log(desc)
  fn()
}

const matchers = (exp) => ({
  toBe: (assertion) => {
    if (exp === assertion) {
      console.log('Pass!')
      return true
    } else {
      console.log('Fail')
      return false
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
      console.log(result);
    }
  }
})

const expect = (exp) => matchers(exp)




