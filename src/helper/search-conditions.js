export const searchConditions = (username, request) => {
    const conditions = {
        username: username,
    }

    if (request.name) {
        conditions.OR = [
            {first_name: {contains: request.name}},
            {last_name: {contains: request.name}}
        ];
    }

    if (request.email) {
        conditions.email = {email: {contains: request.email}}
    }

    if (request.phone) {
        conditions.phone = {phone: {contains: request.phone}}
    }

    return conditions;
}
