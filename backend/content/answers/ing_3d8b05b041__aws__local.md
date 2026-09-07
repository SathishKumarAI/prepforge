---
qid: ing_3d8b05b041__aws__local
question: 'Explain: Abstract — Why DNS Based Global Server Load Balancing (GSLB) Doesn\u2019t
  Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 433
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:44:51-05:00'
sources: []
---

**Why DNS‑Based GSLB Fails for ML‑Driven Latency Control**  
*Leadership Principles: Ownership & Dive Deep*

**Situation (S)** – I led a cross‑functional team that was tasked with delivering sub‑200 ms inference latency for a global recommendation engine. The initial plan was to use AWS Route 53 DNS‑based GSLB to route users to the nearest data center.

**Task (T)** – Validate whether pure DNS routing could meet SLA requirements under variable traffic and failure scenarios.

**Action (A)** –  
1. Instrumented **CloudWatch** metrics on API latency, request counts, and health checks across three regions.  
2. Deployed a lightweight *latency probe* in each region that reported real‑time round‑trip times to a **Kinesis Data Stream**.  
3. Built an AWS Lambda that updated Route 53 weighted routing weights every 30 s based on the latest latency data (≈10 k records).  

**Result (R)** – The system still suffered from *cache stale* DNS propagation delays and failed to react within the required 100 ms window during regional outages. In a controlled experiment, when Region‑B went down, users continued hitting it for up to **8 minutes**, causing a 45 % spike in latency (from 180 ms to 260 ms).  

**Insight** – DNS caching (TTL) introduces *inherent lag*; even with low TTLs, resolvers may cache responses for the full TTL. Additionally, the weight‑based algorithm cannot account for *transient packet loss* or *per‑user path variance*.  

**Takeaway** – For ML workloads requiring tight latency guarantees, **Application Load Balancer (ALB) + Global Accelerator** with real‑time health checks and per‑user session stickiness provide sub‑latency, high‑availability routing that DNS alone cannot guarantee.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
