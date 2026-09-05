---
qid: ing_8868243c82__star__local
question: 'Explain: Traffic Funnel and Read QPS — Airbnb System Design - by Neo Kim
  and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 385
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:05:28-05:00'
sources: []
---

**Situation:**  
During my internship at a startup building a marketplace for short‑term rentals, we faced a spike in traffic when the launch promo went live—our read latency on property listings shot up from 40 ms to over 300 ms, and our QPS (queries per second) hit 12K while we were only provisioned for 8K.

**Task:**  
I was asked to diagnose why our read throughput dropped and to redesign the traffic funnel so that the system could sustain at least 15K QPS without breaking SLAs on latency or cost.

**Action:**  
First, I mapped the traffic funnel: user requests → API gateway → cache layer (Redis) → database. Using Prometheus metrics, I identified that cache miss rate jumped from 3% to 18% during the promo. I introduced a multi‑level caching strategy: an in‑memory LRU cache per microservice for hot listings, and a CDN‑edge cache for static assets. Then I adjusted read replicas—added two more Postgres shards, rebalanced read traffic with a round‑robin load balancer, and applied query pooling (pgbouncer) to keep connection churn low. Finally, I implemented request throttling at the gateway to cap QPS per user session during flash peaks.

**Result:**  
Read latency dropped back below 50 ms; our read QPS capacity increased from 8K to 18K while keeping operational cost under budget. The system now handles promotional traffic spikes smoothly, and we learned that a fine‑grained cache hierarchy combined with dynamic replica scaling is key to managing high QPS in a marketplace environment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
