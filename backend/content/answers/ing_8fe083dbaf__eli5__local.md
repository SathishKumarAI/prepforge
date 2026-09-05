---
qid: ing_8fe083dbaf__eli5__local
question: 'Explain: Recommended by LinkedIn — System Design of food delivery app (Zomato/Swiggy)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 305
total_tokens: 475
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:24:57-05:00'
sources: []
---

Imagine a busy kitchen that must serve many orders at once, but each order travels through a different path to the customer.  
**Customers** are like diners who place their plates (orders) on a table (the app).  
The **restaurant** is the chef’s station; it keeps a list of all dishes (menu items) and how long they’ll take to cook (pre‑picking inventory).  
A **delivery driver** is a waiter who walks through the kitchen, picks up the plate, and carries it to the diner.  

In the app, these roles become services:  
- *Order service* receives plates from diners, checks if the restaurant can cook them, and hands them off to the *dispatch service*.  
- *Restaurant service* stores menus and stock, updates availability in real time.  
- *Dispatch service* finds the nearest driver (like a waiter) and routes him through traffic (network routing).  

The kitchen’s recipe book is a database; the waiters use GPS‑style routing to avoid traffic jams. All parts talk over simple “messages” so if one breaks, the others keep working—just as a real kitchen can still function even if one station stalls. This layered, message‑based design keeps the food moving fast and reliable, just like Zomato or Swiggy do in the real world.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
