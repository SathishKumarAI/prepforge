---
qid: ing_7ad01ca83e__eli5__local
question: 'Explain: Successful responses — HTTP response status codes - HTTP | MDN'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 297
total_tokens: 459
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:51:27-05:00'
sources: []
---

Think of the web as a busy post office.  
When you send a letter (an **HTTP request**), the clerk at the counter checks it and sends you back a note that tells you what happened.

* **2xx – “All good”**: The clerk says *“Your package was found, delivered, or processed successfully.”*  
  - *200 OK*: the whole letter is received fine.  
  - *201 Created*: a new envelope was made for you.  

* **3xx – “Redirect”**: The clerk tells you to go somewhere else.  
  - *301 Moved Permanently*: the address has changed, so use this new one next time.  

* **4xx – “Client error”**: Something’s wrong with your letter or how you wrote it.  
  - *400 Bad Request*: the paper is torn; we can’t read it.  
  - *404 Not Found*: no such envelope exists at that address.  

* **5xx – “Server error”**: The clerk’s desk is broken.  
  - *500 Internal Server Error*: the post office has a jam and can’t finish your request.

So, each status code is a short note from the server telling you whether your web “letter” was handled successfully or where the problem lies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
