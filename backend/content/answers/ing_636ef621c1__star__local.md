---
qid: ing_636ef621c1__star__local
question: 'Explain: Public APIs — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 331
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:46:40-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with building a real‑time analytics dashboard for our marketing team. The data came from multiple internal microservices and an external third‑party ad platform that only exposed a public REST API.

**Task:**  
I needed to create a unified, low‑latency interface so the dashboard could fetch user engagement metrics in under 200 ms while respecting the ad platform’s rate limits (100 requests/min) and handling potential downtime gracefully.

**Action:**  
I designed a lightweight “gateway” service that wrapped both internal services and the external API. Using FastAPI with async endpoints, I implemented token‑based authentication for our users and added a caching layer (Redis) to store recent ad metrics for 5 minutes, dramatically reducing calls to the third‑party endpoint. I also built retry logic with exponential backoff and a circuit breaker pattern so that if the external API failed, the gateway would serve stale cached data or a graceful error message instead of blocking the entire dashboard.

**Result:**  
The new gateway cut average response time from 650 ms to 170 ms, kept us within the 100‑request/min quota, and increased dashboard uptime from 92% to 99.7%. I learned that treating an external REST API as a first‑class “public” resource requires careful throttling, caching, and fault tolerance—principles that scale to any system design involving third‑party services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
