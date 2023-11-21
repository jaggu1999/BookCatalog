// Function to add Author
const addAuthor = async (db, authorData) => {
    const authorCollection = db.collection('authors');
    try {
        const result = await authorCollection.insertOne(authorData);
        return result.ops[0];
    } catch (error) {
        throw new Error('Error creating author');
    }
};

// Function to retrieve all Authors
const listAllAuthors = async (db) => {
    const authorCollection = db.collection('authors');
    try {
        const authors = await authorCollection.find({}).toArray();
        return authors;
    } catch (error) {
        throw new Error('Error fetching authors');
    }
};

module.exports = {
    addAuthor,
    listAllAuthors,
};
