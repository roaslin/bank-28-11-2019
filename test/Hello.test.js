import Hello from "../src/Hello"

describe('Hello Should', () => {
  it('say hello', () => {
    const hello = new Hello()
    expect(hello.greet()).toBe("Hello World!")
  })
})
