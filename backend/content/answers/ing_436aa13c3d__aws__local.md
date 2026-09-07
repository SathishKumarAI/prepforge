---
qid: ing_436aa13c3d__aws__local
question: 'Explain: Caching Tier — Scalability | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 473
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:58:30-05:00'
sources: []
---

**Scenario (S)**  
I was tasked to add a *caching tier* for an ML inference service that served 2 M requests/day and had a latency SLA of <20 ms. The backend model took ~150 ms per inference.

**Task (T)**  
Design a scalable, highly available cache that reduces load on the GPU cluster by >70% while keeping cost ≤ $0.05/1k requests.

**Action (A)**  
I chose **Amazon ElastiCache for Redis** in a multi‑AZ cluster with read replicas.  
* **Data model:** Serialized inference results keyed by request fingerprint; TTL set to 12 h.  
* **Scaling strategy:** Auto‑scaling policy based on `CPUUtilization > 70%` (up to 8 nodes).  
* **Availability:** Cross‑region read replicas in a secondary AZ for failover; Redis Sentinel for automatic promotion.  
* **Cost trade‑offs:** Each node ~$0.15/hr; with 4 baseline nodes + 2 replicas = $1.2/hr ≈ $30/month, far below the GPU cluster cost (~$200/month).  
* **Monitoring & alerting:** CloudWatch metrics (latency, hit ratio) fed into an SNS alarm that triggers an automated Lambda to add/remove nodes.

**Result (R)** – *Customer Obsession / Deliver Results*  
Cache hit rate climbed from 0 % to **82 %**, cutting GPU usage by **74 %** and reducing inference latency to **12 ms** on average. Monthly cost dropped from $200 to $30, a **85 % savings** while meeting SLA.

**Bar‑raiser takeaways**  
* Ownership: I drove the full lifecycle—design, deployment, monitoring.  
* Dive Deep: I quantified hit ratios, latency, and cost, iterating until thresholds were met.  
* Learning from failure: Early tests revealed TTL misconfigurations that caused stale predictions; I added a cache‑bypass flag for edge cases and logged anomalies for future audits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
