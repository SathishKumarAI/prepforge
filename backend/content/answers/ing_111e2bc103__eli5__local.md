---
qid: ing_111e2bc103__eli5__local
question: 'Explain: Design decisions and Technology choices — System Design of food
  delivery app (Zomato/Swiggy)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 266
total_tokens: 437
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:02:51-05:00'
sources: []
---

Imagine building a giant, bustling kitchen that must serve dozens of hungry customers at once—each order arrives like a phone call, and the chef has to decide which dish goes where, how long it will take, and whether the ingredients are ready.

**Design decisions** are the recipes you pick:  
- **Micro‑services vs. monolith** – Is the kitchen one big oven (monolith) or many small stations that can work independently (micro‑services)?  
- **Database choice** – Do we keep a single pantry for all items (SQL) or separate spice racks for different cuisines (NoSQL)?  
- **Scalability plan** – How do we add more cooks when rush hour hits?  

**Technology choices** are the tools you give each station:  
- **Programming language** – Python for quick scripting, Go for fast networking.  
- **Message broker** – RabbitMQ or Kafka to queue orders between stations.  
- **Caching layer** – Redis to hold popular menu items so chefs don’t keep fetching them from storage.

The goal is the same as a well‑organized kitchen: keep every order moving smoothly, reduce wait times, and handle sudden spikes without burning out any station.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
