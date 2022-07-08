const {nanoid} = require('nanoid')

const CreateUniqueId = () => {
    const id = nanoid(16);
    return id;
};

module.exports = { CreateUniqueId };