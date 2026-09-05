---
qid: ing_b82441da87__eli5__local
question: 'Explain: Scalability — 11 System Design Concepts Explained, Simply'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 284
total_tokens: 444
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:29:18-05:00'
sources: []
---

Think of an online store that starts with one tiny shop floor. **Scalability** is like being able to add more floors without changing the building’s foundation. In system design it means a software can grow—more users, more data, more traffic—while staying fast and reliable.

1. **Horizontal vs. Vertical Scaling** – adding new “floors” (servers) instead of making one floor bigger.  
2. **Statelessness** – each server is like a cashier who only needs the current customer’s info; no memory of past shoppers, so you can swap them in and out freely.  
3. **Load Balancing** – a traffic director that directs customers to the least crowded cashier.  
4. **Caching** – a quick‑reference shelf for popular items, reducing wait times.  
5. **Partitioning (Sharding)** – splitting inventory into sections so each cashier only handles a subset of products.  
6. **Replication** – having duplicate shelves in different rooms so if one fails the others still serve customers.  
7. **Asynchronous Processing** – letting heavy tasks run in the background while shoppers get their orders immediately.  

Together, these ideas let a system keep up as its “shop” expands, just like adding more floors keeps your store open for everyone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
