const sut = require('../src/index') // sut - system under test
const supertest = require('supertest')


describe('Verifies all the endpoints', () => {
    it('should return hello darkness', async () => {
        
        //Arrange
        const request = supertest(sut)
        const expectedResult = 'Hello Darkness!'

        //Act
        const result = await request.get('/')
        const actualResult = result.text

        //Assert
        expect(actualResult).toBe(expectedResult)
    })
})