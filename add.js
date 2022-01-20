exports.handler = async (event) => {
    const {num1, num2} = JSON.parse(event.body);

    return {
        statusCode: 200,
        body: JSON.stringify({
            num1,
            num2,
            sum: num1 + num2
        })
    }
}