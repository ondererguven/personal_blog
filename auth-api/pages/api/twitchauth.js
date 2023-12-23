export default function handler(req, res) {
    console.log(req)
    res.redirect(307, 'backlogslasher://')
}