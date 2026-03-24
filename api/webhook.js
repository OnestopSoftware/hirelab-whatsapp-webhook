export default function handler(req, res) {
  if (req.method === 'GET') {
    const mode = req.query['hub.mode'];
    const token = req.query['hub.verify_token'];
    const challenge = req.query['hub.challenge'];
    if (mode === 'subscribe' && token === process.env.VERIFY_TOKEN) {
      res.status(200).send(challenge);
    } else { res.status(403).send('Forbidden'); }
  } else if (req.method === 'POST') {
    console.log('WA message:', JSON.stringify(req.body));
    res.status(200).send('OK');
  }
}