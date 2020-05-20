const idTransformer = require('./transformers/id_transformer');

const ok = (res, data, transformer) => {
    res.status(200)
        .json((transformer) ? transformer(data) : data);
};

const created = (res, data, transformer) => {
    res.status(201)
        .json((transformer) ? transformer(data) : idTransformer(data));
};

const noContent = (res) => {
    res.status(204)
        .json();
}

module.exports.ok = ok;
module.exports.created = created;
module.exports.noContent = noContent;