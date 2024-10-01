import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { id } = req.query;

  // 构建 JSON 文件的路径
  const booksPath = path.join(process.cwd(), 'books.json');

  // 读取 JSON 文件
  fs.readFile(booksPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Failed to read books.json' });
    }

    // 解析 JSON 数据
    const books = JSON.parse(data);

    // 查找匹配的 ID
    const book = books.find(b => b.id === parseInt(id, 10));

    if (book) {
      res.status(200).json(book);
    } else {
      res.status(404).json({ message: 'Book not found' });
    }
  });
}