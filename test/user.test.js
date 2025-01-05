import supertest from 'supertest';
import { web } from '../src/application/web.js';
import { removeTestUser, createTestUser } from './test.util.js';


describe('POST rapi/users/register', () => {

    afterEach(async () => {
        await removeTestUser();
    });

    it('should can register new user', async () => {
        const result = await supertest(web)
        .post('/api/users/register')
            .send({
                username: 'test',
                name: 'test',
                email: 'test@test.com',
                password: 'rahasia',
            });

        expect(result.status).toBe(201);
        expect(result.body.data.username).toBe('test');
        expect(result.body.data.name).toBe('test');
        expect(result.body.data.email).toBe('test@test.com');
        expect(result.body.data.password).toBeUndefined();
        }
    )
})
