---
qid: ing_21e9f54d92__eli5__local
question: 'Explain: Methods and Status Codes — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 351
total_tokens: 512
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:30:15-05:00'
sources: []
---

Think of an HTTP request as a polite letter you send to a friendly post office (the server).  
The **method** is the type of letter:  

- **GET** – “Could you please give me this book?” (read only)  
- **POST** – “Please add this new postcard to my collection.” (create)  
- **PUT** – “Replace the old postcard with this one.” (update whole thing)  
- **PATCH** – “Just change a few words on this postcard.” (partial update)  
- **DELETE** – “Take this postcard away.”  

The post office replies with a **status code**, like a stamped return card telling you what happened:  

- **200 OK** – “All good, here’s your book.”  
- **201 Created** – “Your new postcard is now in the archive.”  
- **204 No Content** – “Deleted successfully; nothing to send back.”  
- **400 Bad Request** – “We couldn’t understand your letter (bad data).”  
- **401 Unauthorized** – “You need a key to open that drawer.”  
- **404 Not Found** – “There’s no such book in our catalog.”  
- **500 Internal Server Error** – “The post office has a glitch; try again later.”  

In system design, these methods and codes let you map client actions to server operations cleanly. Each method tells the server what you want to do; each status code tells the client whether it succeeded or why it failed—just like a friendly post office keeping everyone on the same page.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
