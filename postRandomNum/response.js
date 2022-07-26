function customResponse(request, state, logger) {
  // System process
  const path = require("path");
  const generate_transactionID = require(path.join(
    process.cwd(),

    "postRandomNum",

    "generate_transactionID.js"
  ));

  // Parse type from POST body
  const body = JSON.parse(request.body);
  // Define length IF present in the POST body or else assign 10
  const type = body.type.toLowerCase();
  const userName = body.name;
  const id_length = body.length && body.length > 0 ? body.length : 10;

  // Use generate_transactionID module to generate a unique ID
  const transaction_id = generate_transactionID(type, id_length);

  return {
    statusCode: 200,

    headers: {
      "HTTP-Response-Code-Text": "OK",
      "Content-Type": "application/json",
      "x-response-code": "123456",
    },

    body: {
      transaction_id: transaction_id,
      userName: userName,
      created: true,
      created_on: new Date(),
      type: type,
      body: body,
    },
  };
}
