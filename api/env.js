export default function handler(req, res) {
  res.json({ BALL_SPEED: process.env.BALL_SPEED });
}