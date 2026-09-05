---
qid: ing_065c8b7003__eli5__local
question: 'Explain: Performance Under Load — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 216
total_tokens: 375
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:45:34-05:00'
sources: []
---

Think of a machine‑learning service as a bustling coffee shop that serves data “orders.”  
**Performance under load** is how quickly the shop can finish each order when many customers arrive at once. If only one barista works, the line grows; if you add more baristas (more compute nodes) and split tasks—one brewing espresso, another grinding beans—the shop keeps up with a surge of orders.  

In system design, **scalability** is that ability to hire more baristas or open new coffee shops without redesigning the recipe. You separate concerns: a front‑end router directs requests to worker servers, each server runs a lightweight model copy, and a database holds results. When traffic spikes, you spin up additional workers automatically (horizontal scaling). The system still returns predictions fast because it never waits for a single bottleneck—just like the coffee shop keeps serving customers smoothly even during rush hour.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
