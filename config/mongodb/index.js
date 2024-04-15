const mongoose = require("mongoose");
require("dotenv").config();

function connect() {
  mongoose.connect('mongodb+srv://vuvietduy1010:V1ZcpuT82jiktGib@blog.pq3x3z6.mongodb.net/?retryWrites=true&w=majority&appName=blog')
    .then(() => console.log('Connected!'))
    .catch((err) => console.log(err));

}

module.exports = {
  connect,
};
