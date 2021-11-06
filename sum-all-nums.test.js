const { expect } = require('@jest/globals')
const sumAll = require('./sum-all-nums')

test('returns the summary of all numbers between mim and max numbers of an array', () => {
    expect(sumAll([1, 4])).toBe(10)
    expect(sumAll([4, 1])).toBe(10)
    expect(sumAll([5, 10])).toBe(45)
    expect(sumAll([10, 5])).toBe(45)
})