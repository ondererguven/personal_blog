export default function handler(req, res) {
  const fragment = req.url.split("#")[1];
  const urlParams = new URLSearchParams(fragment);

  for (const [key, value] of urlParams) {
    res.url.searchParams.set(key, value);
  }


  res.redirect(307, 'backlogslasher://oauth2redirect');






  // res.status(200).json({ name: 'John Doe' })
}
