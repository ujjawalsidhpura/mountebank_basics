function customResponse(request, state, logger) {
  
  const delay = request.query.delay;

  const response = new Promise((resolve, reject) => {

    setTimeout(() => {
      resolve({
        statusCode: 200,

        headers: {
          "HTTP-Response-Code-Text": "OK",
          "Content-Type": "application/json",
          "x-response-code": "444",
        },

        body: {
          message: "Response with delay",
          delayed: `Message delayed by ${delay} `,
        },
      });
    }, delay);
  });

  return response
    .then((result) => {
      return result;
    })
    .catch((err) => logger.log(err));
}
