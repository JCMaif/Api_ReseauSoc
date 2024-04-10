import User from "../models/User.js"
import { generateUserToken } from "../services/jwt.js"

export async function loginController(req, res) {
    console.log('Received', req.body)
    const { username, password } = req.body

    // Trouver l'utilisateur avec ce mot de passe et username
    const user = await User.findByUsernameAndPassword(username, password)
    console.log('user :', user);
    if (user) {
        const token = generateUserToken(user)
        res.json({ token: token })
    } else {
        res.status(401).json({ error: true, message: 'Invalid credentials' })
    }
}
export function logout(req, res) {
    res.redirect('/login.html');
}
