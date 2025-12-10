export default function handler(req, res) {
  res.json({ BALL_SPEED: process.env.BALL_SPEED, SHOOT_DELAY: process.env.SHOOT_DELAY });
}