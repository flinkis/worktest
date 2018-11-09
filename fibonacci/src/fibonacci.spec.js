const { expect } = require("chai");
const { encode, decode } = require('../src/fibonacci');

describe('fibonacci', () => {
	it('should encode fibonacci', () => {
		expect(encode(1)).equals('11');
		expect(encode(2)).equals('011');
		expect(encode(3)).equals('0011');
		expect(encode(4)).equals('1011');
		expect(encode(5)).equals('00011');
		expect(encode(6)).equals('10011');
		expect(encode(7)).equals('01011');
		expect(encode(8)).equals('000011');
		expect(encode(9)).equals('100011');
		expect(encode(10)).equals('010011');
	});

	it('should decode fibonacci', () => {
		expect(decode('11')).equals(1);
		expect(decode('011')).equals(2);
		expect(decode('0011')).equals(3);
		expect(decode('1011')).equals(4);
		expect(decode('00011')).equals(5);
		expect(decode('10011')).equals(6);
		expect(decode('01011')).equals(7);
		expect(decode('000011')).equals(8);
		expect(decode('100011')).equals(9);
		expect(decode('010011')).equals(10);
	});
});
