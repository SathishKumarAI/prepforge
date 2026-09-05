---
qid: ing_8d90bb1b99__eli5__local
question: 'Explain: The CAP Theorem in DBMS — The CAP Theorem in DBMS - GeeksforGeeks'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 219
total_tokens: 390
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:20:54-05:00'
sources: []
---

Imagine a library that has three prized books: **Consistency** (every reader sees the same page), **Availability** (the book is always on a shelf for anyone to read), and **Partition tolerance** (the library keeps working even if part of it is cut off by a storm).  
The CAP Theorem says a database can only give you two of these three at once.  

Think of a pizza‑delivery service:  
*Consistency* = every order shows the same price and menu.  
*Availability* = customers can always place an order, even if the kitchen is busy.  
*Partition tolerance* = the system keeps working if one delivery truck breaks down (a network split).  

If the kitchen goes offline (network partition), you must choose: keep the menu accurate but maybe wait for a response (Consistency + Partition), or let customers order quickly but risk seeing wrong prices (Availability + Partition). You can’t have all three perfectly at the same time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
