---
qid: ing_dbecba4d4b__star__local
question: 'Explain: Centralized Rules — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 365
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:47:51-05:00'
sources: []
---

**Situation:**  
At my previous startup we built a recommendation engine that served millions of users on a daily basis. The data scientists had developed several rule‑based models (e.g., “If a user watches a sci‑fi movie in the last 7 days, boost similar titles by 30%”), but these rules were scattered across different microservices and each service made its own inference, leading to inconsistent recommendations and a 12% drop in click‑through rate.

**Task:**  
I was tasked with unifying the rule evaluation into a single, scalable component that could be queried by all services while keeping latency below 50 ms for real‑time user requests.

**Action:**  
I designed a centralized “Rule Engine” using Redis Streams for event ingestion and a lightweight Node.js service as the client. The engine stored rules in a JSON schema in PostgreSQL and compiled them into JavaScript functions on load. Incoming user events were pushed to Redis, triggering the engine to evaluate applicable rules and publish results back to a Kafka topic. Each downstream microservice subscribed to this topic for real‑time recommendation updates. To keep latency low, I used an LRU cache per service and asynchronous batching of rule evaluations.

**Result:**  
The unified system reduced recommendation inconsistencies by 95%, lifted click‑through rate from 3.1% to 4.8% (a 55% lift), and cut the overall inference cost by 30% due to shared compute. I learned that a well‑architected client‑server rule engine can dramatically improve both performance and maintainability in ML product pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
