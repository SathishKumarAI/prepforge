---
qid: ing_ee24d8daeb__eli5__local
question: 'Explain: PACELC Theorem — 11 System Design Concepts Explained, Simply'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 298
total_tokens: 461
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:52:16-05:00'
sources: []
---

**PACELC – the “Restaurant Menu” rule for databases**

Imagine you run a busy restaurant that can serve many tables at once (many users).  
When a customer orders, two decisions happen:

1. **How fast do we cook?**  
   - *Latency* = how quickly the dish arrives.  
   - *Consistency* = does every waiter see the same order book?  

2. **What if the kitchen is overloaded?**  
   - *Availability* = can we still serve food even if some ovens break?  
   - *Partition tolerance* = can we keep working when a power line goes down?

PACELC says: **At any time you’ll face a trade‑off between latency and consistency, and when the system is under load (a “partition”), you’ll also choose between availability and consistency.**  

So it’s like a menu that always forces you to pick one of two options: quick & maybe inconsistent, or slow but sure; and if traffic spikes, you must decide whether to keep serving at all costs or be strict about data correctness.  
This simple rule helps designers balance speed, reliability, and correctness in real‑world databases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
