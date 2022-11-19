module.exports = {
  '**/*': 'prettier --write -u',
  '**/*.{css,scss,sass,less,vue}': 'stylelint',
  '**/*.{js,ts,vue,tsx}': ['eslint --fix', 'prettier --write'],
}
