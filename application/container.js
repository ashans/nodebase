const bookDetailsClient = require('./../externals/webclients/book_details_client');
const postgresAdaptor = require('./../externals/adaptors/pg_adaptor');


module.exports = {
    repositories: {},
    webclients: {
        BOOK_DETAILS_CLIENT: bookDetailsClient
    },
    adaptors: {
        dbAdaptor: postgresAdaptor
    }
}

console.info("Container initialized")