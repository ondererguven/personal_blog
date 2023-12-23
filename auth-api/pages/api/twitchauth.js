export default function handler(req, res) {
    print(req)
    res.redirect(307, 'backlogslasher://oauth2redirect')
}