const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// 静的ファイルを提供
app.use(express.static(path.join(__dirname, 'build')));

// 任意のルートでReactのindex.htmlを返す
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// サーバーを起動
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
