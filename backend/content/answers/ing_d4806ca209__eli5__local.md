---
qid: ing_d4806ca209__eli5__local
question: 'Explain: 2.4. Example — What is REST?: REST API Tutorial'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 298
total_tokens: 462
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:11:43-05:00'
sources: []
---

**What is REST? A quick, friendly guide**

Imagine you’re at a library that follows a simple rule: to get a book or put one back, you always use the same set of actions—ask for a copy, give it back, update its details, or delete it from the shelf. You never need to know how the books are stored inside; you just send a request and receive a response.

That’s REST (Representational State Transfer).  
* **API** = “Application Programming Interface” – a set of instructions telling programs how to talk to each other.  
* **RESTful API** follows four basic verbs:  
  * **GET** – ask for data (like borrowing a book).  
  * **POST** – add new data (adding a new book).  
  * **PUT/PATCH** – change existing data (editing the book’s description).  
  * **DELETE** – remove data (removing the book from the shelf).

Each request goes to a specific URL, just like a library card points you to a particular section. The server replies with information in plain text or JSON, letting your program know what happened.

So, REST is simply a clear, consistent way for software systems to exchange information over the web—just like librarians use the same rules to keep books organized and accessible.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
