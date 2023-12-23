export default function handler(req, res) {
    res.redirect(307, 'backlogslasher://oauth2redirect');
}