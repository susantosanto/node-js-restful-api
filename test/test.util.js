import {prismaClient} from '../src/application/database.js';
import bcrypt from 'bcrypt';


export const removeTestUser = async () => {
    await prismaClient.user.deleteMany({
        where: {
            username: 'test'
        }
    });
}

export const createTestUser = async () => {
    await prismaClient.user.create({
        data: {
            username: 'test',
            name: 'test',
            email: 'test@test.com',
            password: await bcrypt.hash('rahasia', 10),
        }
    })
}