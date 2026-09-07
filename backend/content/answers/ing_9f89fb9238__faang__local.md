---
qid: ing_9f89fb9238__faang__local
question: 'Explain: Single Points of Failure — How to Prepare for System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 480
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:55:01-05:00'
sources: []
---

## 1️⃣ Clarify  
The interviewer asks how to guard against **single points of failure (SPOFs)** when preparing for a system‑design interview that involves machine‑learning components.  
Assumptions:  
- We’re designing an online ML inference service (e.g., image classification).  
- Latency ≤ 50 ms, uptime ≥ 99.9 %.  
- Budget allows at least two availability zones and basic autoscaling.

## 2️⃣ Approach  
1. **Identify critical assets** – model store, feature store, inference API, DB for logs.  
2. **Decouple & replicate** each asset across AZs.  
3. **Add circuit‑breakers / graceful degradation** (fallback to a cached model).  
4. **Automate failover** with health checks and load balancers.  
5. **Monitor & alert** on latency spikes or request drops.

## 3️⃣ Depth  
- **Model Store**: Use a distributed object store (S3/Blob) + CDN cache; keep an in‑memory copy per worker.  
- **Feature Store**: Deploy a read‑optimized database (e.g., DynamoDB) with multi‑AZ replication; use caching layers (Redis).  
- **Inference API**: Load‑balance across stateless containers behind a global LB, autoscale based on request rate.  
- **Circuit Breaker**: If inference latency > 200 ms or error ≥5%, route to a simplified “fallback” model.  
Complexity: O(1) per request; cost ≈ $X per GB for storage + compute.

## 4️⃣ Edge Cases  
- Sudden spike in traffic (DDoS) → autoscaler lag.  
- Model drift → stale cached copy → need versioning & promotion pipeline.  
- AZ outage → verify that health checks redirect traffic immediately.

## 5️⃣ Optimize & Communicate  
Explain trade‑offs: extra replicas increase cost but reduce risk; circuit breakers add latency but preserve service. Highlight that the key is *redundancy + observability*. Conclude by noting that a robust design is iterative—start with minimal viable redundancy and progressively harden based on metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
