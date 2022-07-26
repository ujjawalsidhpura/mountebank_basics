const generate_transactionID = (type, id_length) => {

  switch (type) {

    case "number": {
      return parseInt(Math.random().toFixed(id_length).replace("0.", ""));
    }

    case "string": {
      let ten_letters_random_string = "";
      let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      for (let i = 0; i < id_length; i++) {
        ten_letters_random_string += letters.charAt(
          Math.floor(Math.random() * letters.length)
        );
      }

      return ten_letters_random_string;
    }

    case "alphanumeric": {
      let ten_letters_random_alpahnumeric_string = "";
      let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      for (let i = 0; i < id_length; i++) {
        ten_letters_random_alpahnumeric_string += letters.charAt(
          Math.floor(Math.random() * letters.length)
        );
      }

      return ten_letters_random_alpahnumeric_string;
    }
    
  }
};

module.exports = generate_transactionID;
