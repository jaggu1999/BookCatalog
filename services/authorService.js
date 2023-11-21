const AuthorRepository = require('../repositories/authorRepository');

const addAuthor = async (authorData) => {
    try {
        // Logic to add an author
        const addedAuthor = await AuthorRepository.addAuthor(authorData);
        return addedAuthor;
    } catch (error) {
        throw new Error(`Failed to add author: ${error.message}`);
    }
};

const listAllAuthors = async () => {
    try {
        const authors = await AuthorRepository.listAllAuthors();
        return authors;
    } catch (error) {
        throw new Error(`Failed to list authors: ${error.message}`);
    }
};

module.exports = {
    addAuthor,
    listAllAuthors,
};