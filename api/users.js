const data = require("../db.json");

export default function handler(req, res) {
    const { email } = req.query;

    let users = data.users;

    if (email) {
        users = users.filter(
            (user) => user.email === email
        );
    }

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");

    res.status(200).json(users);
}