---
qid: ing_738b235d82__faang__local
question: 'Explain: Rate Limits and Quotas — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 415
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:12:49-05:00'
sources: []
---

**Clarify**  
You’re asking how rate limits/quotas relate to an **API** in a ML‑heavy system: *What is an API?* and *Why do we need limits?* I’ll assume the API exposes model inference, training jobs, or data ingestion.

**Approach**  
1. Define “API” as a contract (HTTP/REST, gRPC, etc.) that clients call to perform operations.  
2. Explain rate limits/quotas as enforcement mechanisms on that contract: max calls per second/minute/hour and per‑user or global caps.  
3. Show why they matter for ML workloads—compute cost, resource isolation, fairness.

**Depth**  
- **API**: stateless endpoints with versioning; authentication (OAuth/JWT) to map requests to tenants.  
- **Rate limit**: sliding window or token bucket; enforced at load balancer or API gateway.  
- **Quota**: daily/weekly budget tied to a billing plan; tracks usage via counters in Redis or a database.  
- ML inference is GPU‑heavy; throttling protects clusters from sudden spikes, ensures predictable latency.  
- Example: 1000 requests/sec per user × 10 users = 10k req/s → schedule on 5 GPUs with 2 ms per inference.

**Edge Cases**  
- Burst traffic during model rollout → use burst buckets or leaky bucket.  
- Distributed clients behind NAT share IPs → enforce per‑API key instead of IP.  
- Clock skew between services can miscount windows; use monotonic timers.

**Optimize & Communicate**  
Start with a simple token bucket, then add hierarchical limits (global > tenant > user). Explain trade‑offs: stricter limits → lower resource contention but higher latency for legitimate bursts. End by stressing monitoring dashboards (Grafana) to adjust thresholds in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
