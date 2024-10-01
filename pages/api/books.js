


// import fs from 'fs';
// import path from 'path';

// export default (req, res) => {
//   if (req.method === 'GET') {
//     const filePath = path.join(process.cwd(), 'books.json');
//     fs.readFile(filePath, 'utf8', (err, data) => {
//       if (err) {
//         console.error(err);
//         return res.status(500).send('Error reading books');
//       }
//       res.setHeader('Content-Type', 'application/json');
//       res.status(200).send(data);
//     });
//   } else {
//     // Handle other methods or errors here
//     res.setHeader('Allow', ['GET']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// };


import fs from 'fs';
import path from 'path';

// 将箭头函数赋值给一个变量
const handler = (req, res) => {
  if (req.method === 'GET') {
    const filePath = path.join(process.cwd(), 'books.json');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error reading books');
      }
      res.setHeader('Content-Type', 'application/json');
      res.status(200).send(data);
    });
  } else {
    // Handle other methods or errors here
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;

