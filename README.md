# Express.js Basics 🚀

## Understanding `const app = express();`  

### 📱 Super Simple Analogy  
Think of this like a **mobile phone**:  
- `express()` = **Buying a phone** 📱  
- `const app = express();` = **Turning the phone ON** 🔛  
- `app.get(...)` = **Receiving calls (Handling requests)** 📞  

### ❓ Why Do We Need `app`?  
✅ It lets us **create routes, handle requests, and start the server**.  
✅ Without it, our Express app **does nothing**.  

---

### Example:
```js
const express = require('express');
const app = express(); // ✅ Creates the server

app.get('/', (req, res) => {
  res.send('Hello, this is my website!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
