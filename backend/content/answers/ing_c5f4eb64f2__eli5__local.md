---
qid: ing_c5f4eb64f2__eli5__local
question: 'Explain: Stage 3: Add Caching (100K-500K users) — Scalability | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 249
total_tokens: 420
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:49:46-05:00'
sources: []
---

Imagine your machine‑learning model is a chef in a busy kitchen that must serve 100 000–500 000 hungry customers every day.  
In Stage 3 you add a “fridge” (the cache) right next to the stove. The fridge stores the most‑ordered dishes (model predictions, feature vectors, or pre‑computed embeddings). When a new customer orders, the chef first checks the fridge: if the dish is already there, it can be handed out instantly—no need to re‑cook from scratch. If not, the chef prepares it and then puts a copy in the fridge for future use.

**Key terms explained**

- **Cache** – a fast, temporary storage that keeps frequently used data close at hand so repeated requests are answered quickly.  
- **Scalability** – the ability of the system to keep good performance as user numbers grow.

By adding this caching layer you reduce the load on your ML model (the stove), cut response time for users, and allow the whole service to scale up smoothly without constantly re‑computing the same results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
