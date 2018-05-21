const userObjectTemplate = {
  id: expect.any(String),
  username: expect.any(String),
  createdAt: expect.any(String)
}
const userAPIObjectTemplate = {
  user_id: expect.any(String),
  nickname: expect.any(String),
  created_at: expect.any(String)
}

const tokenObjectTemplate = {
  token: expect.any(String),
  expiresIn: expect.any(Number)
}

module.exports = { userObjectTemplate, userAPIObjectTemplate, tokenObjectTemplate }
