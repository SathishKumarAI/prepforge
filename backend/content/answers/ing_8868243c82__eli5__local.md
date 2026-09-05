---
qid: ing_8868243c82__eli5__local
question: 'Explain: Traffic Funnel and Read QPS — Airbnb System Design - by Neo Kim
  and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 247
total_tokens: 413
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:12:35-05:00'
sources: []
---

Imagine a busy highway that carries cars (user requests) to a big theme park (Airbnb’s search service).  
**Traffic Funnel** is the way we shape that flow: first, all cars start on the main road; then they’re split into smaller lanes as they get closer to the park—some go straight to the entrance gate, others divert to parking lots or security checks. In the system, this means requests pass through layers (load balancer → API gateway → microservice) that gradually filter and enrich data before reaching the core search engine.

**Read QPS (Queries Per Second)** is like counting how many cars can legally drive past a checkpoint each second. It tells us how fast our service can answer “search” questions without slowing down. By measuring Read QPS, we know whether our lanes (caches, databases) are wide enough or if we need more roads (sharding, scaling).  

So the traffic funnel shapes user requests into manageable streams, and Read QPS measures how many of those streams the system can handle per second.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
