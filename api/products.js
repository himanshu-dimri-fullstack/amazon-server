const data = require("../db.json");

export default function handler(req, res) {
    const { subcategoryId, slug } = req.query;

    let products = data.products;

    if (subcategoryId) {
        products = products.filter(
            (item) => item.subcategoryId == subcategoryId
        );
    }

    if (slug) {
        products = products.filter(
            (item) => item.slug === slug
        );
    }

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");

    res.status(200).json(products);
}