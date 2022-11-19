module.exports = {
  '*': 'prettier --write -u',
  '*.{js,ts,vue,tsx}': ['eslint --fix', 'prettier --write'],
}
