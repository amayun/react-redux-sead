export const TEST = 'TEST'
export function test(value) {
  return {
    type:    TEST,
    payload: value
  }
}

export function asyncTest() {
  return (dispatch, getState) => {
    setTimeout(()=> {
      dispatch(test(getState().first + 10))
    }, 2000)
  }
}
