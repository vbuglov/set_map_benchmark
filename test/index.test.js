import {describe, expect, test} from 'vitest'

describe("object with object keys", () => {
  test("", () => {
    console.time('test');

    const obj1 = {
      mom: "q"
    }

    const obj2 = {
      boom: "d",
    }

    const obj3 = {
      foo: "bar"
    }

    obj3[obj1] = "lol"
    obj3[obj2] = "kramola"

    for (const key in obj3) {
      console.log(key)
    }

    console.log(obj3)

    console.timeEnd('test');
    expect(true).toBe(true)
  })
})