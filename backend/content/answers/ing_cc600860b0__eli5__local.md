---
qid: ing_cc600860b0__eli5__local
question: 'Explain: Read Path — System Design Interview Cheat Sheet - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 298
total_tokens: 459
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:58:56-05:00'
sources: []
---

**Read path (the route a request takes to fetch data)**  
Imagine you’re ordering pizza at a busy restaurant. The *read path* is the series of steps your order goes through from the moment you call the kitchen until you get your slice.

1. **Client → Load Balancer** – Your phone calls a front‑door “load balancer” that decides which waiter (server) will handle your request.  
2. **Waiter → Cache** – The waiter first asks the *cache* (a quick‑reply fridge). If the pizza is already prepared, it’s handed to you immediately.  
3. **Cache miss → Database** – If the fridge is empty, the waiter goes to the *database* (the kitchen’s pantry) where all ingredients and recipes live.  
4. **Database → Cache** – After making the pizza, the waiter stores a copy in the fridge for next time.  
5. **Response** – The waiter brings the finished pizza back to you.

Key terms:  
- **Cache**: A fast, temporary storage that keeps recently used data.  
- **Database**: The authoritative, durable store of all data.  

In a system‑design interview, mapping this flow shows how you’ll keep read latency low while ensuring consistency and scalability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
