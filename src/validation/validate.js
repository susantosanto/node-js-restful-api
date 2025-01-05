const validate = (schema, request) => {
    const result = schema.validate(request, {
        abortEarly: false,
        allowUnknown: false
    });
    if (result.error) {
        throw new ResponseError(400, result.error.message);
    }

    return result.value;
}

export {
    validate
}