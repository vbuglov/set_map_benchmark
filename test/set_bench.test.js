import {describe, expect, test} from 'vitest'

const times = 2000000;

describe(`add ununiq ${times} times`, () => {
  test("object", () => {
    console.time('test');

    const obj = {}

    for (let i = 0; i < times; i++) {
      obj[`a${i}`] = null
    }

    console.timeEnd('test');
    expect(true).toBe(true)
  })


  test("set", () => {
    console.time('test');

    const obj = new Set()

    for (let i = 0; i < times; i++) {
      obj.add(`a${i}`)
    }

    console.timeEnd('test');
    expect(true).toBe(true)
  })
})


describe("add uniq 999999 times", () => {
  test("object", () => {
    console.time('test');

    const obj = {}

    for (let i = 0; i < 999999; i++) {
      obj[`a`] = true
    }

    console.timeEnd('test');
    expect(true).toBe(true)
  })


  test("set", () => {
    console.time('test');

    const obj = new Set()

    for (let i = 0; i < 999999; i++) {
      obj.add(`a`)
    }

    console.timeEnd('test');
    expect(true).toBe(true)
  })
})