import User from '../models/User.js'

export async function getUserById(req, res, next) {
  const userId = req.params.id
  const user = await User.findById(userId).catch(error => {
    next(error)
  })
  if (user) {
    res.json(user)
  }
}

export function getCurrentUser(req, res) {
  const user = req.user
  if (user) {
    res.json({ id: user.id, name: user.name })
  }
}

export async function createUser(req, res,next) {
  const { name, username, password, confirmation } = req.body;

  // tester les saisies utilisateur
  if (!name || !username || !password || password != confirmation) {
    return res.send("Erreur dans la saisie du formulaire");
  }

  // tester si username n'est pas déjà pris
  const isExistingUser = await User.findByUsername(username);
  if (isExistingUser) {
    return res.send("Ce pseudo est déja utilisé.");
  }
  const newUser = new User(name, username, password).save()
    .then(() => {
      res.redirect((200), '/login')
    })
   .catch(error => {
    console.error(error)
   })
}
