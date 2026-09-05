---
qid: ing_dc99eddb4d__star__local
question: 'Explain: Components for Traffic Distribution — Design Load Balancer | System
  Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 400
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:49:07-05:00'
sources: []
---

**Situation:**  
At my previous company we launched a new video‑streaming feature that suddenly attracted 30 % more concurrent users than our existing platform could handle. The traffic spikes were uneven and caused latency to creep up to 1.2 s, hurting user retention.

**Task:**  
I was asked to design a load balancer component that would distribute incoming HTTP requests across our micro‑service cluster, keep latency below 800 ms under peak load, and allow graceful scaling of new instances without downtime.

**Action:**  
I built a Layer‑4 load balancer using NGINX Plus as the front‑end proxy. For routing I implemented weighted round‑robin combined with health checks that ping each service’s `/health` endpoint every 5 s. To handle sudden traffic surges, I added a dynamic weight adjustment algorithm: if a node’s response time exceeded 600 ms or its CPU >70 %, its weight was reduced by 20 % until metrics normalized. For scalability I exposed an API that automatically registers new instances via Consul and updates the NGINX config with zero‑downtime reloads (`nginx -s reload`). I also enabled sticky sessions using client IP hashing for stateful video analytics.

**Result:**  
After deployment, average latency dropped to 550 ms during peak periods, and error rate fell from 4.5 % to <0.2 %. The system handled a 50 % traffic increase without additional manual intervention, and the dynamic weighting reduced over‑provisioning by 15 % in our cost model. I learned how fine‑grained metrics and automated weight tuning can turn a simple proxy into an intelligent traffic distributor that balances performance with resource efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
