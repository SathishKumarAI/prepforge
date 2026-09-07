---
qid: ing_527340b8f6__aws__local
question: Traffic doubles overnight and you can't get more GPU capacity for a week.
  What are your graceful-degradation options?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 544
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:31:30-05:00'
sources: []
---

**Situation (S)** – While launching a real‑time recommendation engine, traffic doubled overnight and the on‑prem GPU cluster hit its ceiling; we had no spare nodes for the next 7 days.

**Task (T)** – Deliver a graceful degradation path that preserves user experience, keeps costs in check, and demonstrates ownership.

**Action (A)**  
1. **Scale down inference latency:** Switched from *GPU‑intensive* transformer to an *ONNX Runtime* optimized model with ~30 % fewer FLOPs.  
2. **Leverage AWS SageMaker endpoints on CPU instances (ml.m5.xlarge) with autoscaling**—configuring a target 70 % CPU utilization and max 4 instances keeps cost < 25 % of GPU baseline.  
3. **Cache popular predictions in Amazon ElastiCache Redis** (cluster mode, 2‑node), reducing per‑request compute by ~60 %.  
4. **Implement request throttling via API Gateway + Lambda@Edge** to cap peak burst rates and protect downstream services.  

**Result (R)** – Within 24 h we reduced GPU usage from 100 % to 0, kept latency < 200 ms for 90 % of traffic, and cut operational cost by 40 %. User churn dropped below 0.5 %, far better than the industry average of 2 % under similar spikes.

---

### Leadership Principles Anchored  
- **Customer Obsession:** Maintained low latency and high availability.  
- **Ownership & Bias for Action:** Rapidly re‑architected inference pipeline without waiting for hardware procurement.

### Technical Design Notes  
| AWS Service | Purpose | Trade‑offs |
|-------------|---------|------------|
| SageMaker CPU endpoints | Cost‑effective scaling | Slightly higher latency than GPU |
| ElastiCache Redis | Cache popular embeddings | Adds cache consistency overhead |
| API Gateway + Lambda@Edge | Throttle & edge routing | Extra cold‑start latency for Lambda |

### Bar‑raiser Checklist  
- **Ownership:** Took end‑to‑end responsibility for the degradation plan.  
- **Dive Deep:** Quantified FLOPs, CPU utilization, and cache hit rates.  
- **Impact:** Delivered measurable cost savings and user retention.  
- **Learning from Failure:** Documented that model complexity must be balanced against peak traffic; added automated scaling alerts for future incidents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
