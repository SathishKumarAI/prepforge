---
qid: ing_527a9b14d9__eli5__local
question: 'Explain: What an API Contract Defines — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 235
total_tokens: 399
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:47:55-05:00'
sources: []
---

Think of an API (Application Programming Interface) like a restaurant menu.  
The **API contract** is the written agreement that tells you exactly how to place an order and what you’ll receive back.

* **What is an API?** – A set of rules that lets one software program talk to another, just as diners use a menu to tell the kitchen what they want.  
* **What does the contract define?** – The “menu” lists every dish (end‑points), the ingredients you must provide (parameters), and how each dish will look (the response format). It also says whether the order is free, costs money, or has limits (rate limits).  

Just as a waiter can’t serve food that isn’t on the menu, a program can only call functions that the API contract lists. If either side changes the menu without updating the contract, diners (programs) will be confused and orders fail. The contract keeps both sides in sync so every request gets the expected answer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
