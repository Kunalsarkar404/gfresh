const category = require("../../Models/category");
const createcategory = async (req, res) => {
    try {
        const checkname = await checkIfCategoryExists('name', req.body.category_name);
        if (checkname == true) {
            const checkurl = await checkIfCategoryExists('url',req.body.category_url);
            if (checkurl == true) {
                const {
                    category_name,
                    category_url,
                    editor,
                    meta_description,
                    meta_title,
                    meta_keywords,
                    parent_category,
                    status,
                } = req.body;
            }
        }
    } catch (error) {
        res.send({status: 'failed', error:error.errors});
    }
}

module.exports = createcategory;