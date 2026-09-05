---
qid: ing_6363666926__star__local
question: 'Explain: Flow: Creating a Short URL — Design URL Shortener | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 404
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:46:32-05:00'
sources: []
---

**Situation:**  
At my last startup we launched a viral marketing campaign that required generating millions of unique shareable links in real time. The existing system was a simple script that inserted URLs into a MySQL table and returned an auto‑incremented ID, but it couldn’t handle the traffic spike and started throttling users.

**Task:**  
I needed to design a scalable URL shortener that could generate unique codes on demand, store them efficiently, and serve redirects with sub‑millisecond latency while ensuring high availability and minimal cost.

**Action:**  
1. **Code Generation:** I chose a base‑62 encoder combined with a Snowflake‑style ID generator so each code was deterministic yet globally unique.  
2. **Storage Layer:** Primary storage is Redis for hot URLs (TTL 24 h) to hit 99.9% of requests in RAM, and a sharded PostgreSQL cluster for persistence and analytics.  
3. **Routing & Load Balancing:** Nginx with consistent hashing distributes incoming redirect traffic across stateless microservices; each service checks Redis first, falls back to Postgres if miss.  
4. **Metrics & Monitoring:** Prometheus collects hit counts per key; alerts trigger when a code’s traffic exceeds 10× baseline, prompting manual review for potential abuse.  
5. **Cost Optimization:** Cache eviction policies and lazy deletion keep storage lean; autoscaling on Kubernetes keeps compute costs below 15% of revenue.

**Result:**  
The new system handled 2 M requests per second with <4 ms average latency during the campaign peak, a 60% drop in error rate compared to the legacy script. I learned that combining deterministic ID generation with layered caching yields both speed and reliability without over‑engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
