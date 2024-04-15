const mongoose = require("mongoose");
require("dotenv").config();

function connect() {
  mongoose
    .connect(
      "mongodb+srv://lamtx3107:Hmb5sr60IUW6mTjL@ocopproductintroduce.i7p8gbs.mongodb.net/?retryWrites=true&w=majority&appName=OCOPProductIntroduce"
    )
    .then(() => console.log("Connected to DB!"))
    .catch((err) => console.log(err));

  //Pass: Hmb5sr60IUW6mTjL
}

module.exports = {
  connect,
};
