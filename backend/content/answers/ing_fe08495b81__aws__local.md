---
qid: ing_fe08495b81__aws__local
question: 'Explain: Pattern: Cascading Models — Design Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 442
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:52:27-05:00'
sources: []
---

**Cascading Models – Design Pattern**

*Leadership Principles:* **Ownership** (own the end‑to‑end ML pipeline) and **Dive Deep** (understand every layer’s contribution).

**Situation & Task**  
At my previous role, we needed to reduce inference latency for a recommendation engine that served 1 M users/day. The monolithic model was ~200 ms per request; we were over the SLA of 100 ms.

**Action**  
I introduced a **cascading‑model architecture**:  

| Layer | Purpose | AWS Service |
|-------|---------|-------------|
| **Fast, lightweight classifier** (e.g., XGBoost) | Filters ~80% of requests → no heavy compute | SageMaker Edge or Lambda |
| **Fallback deep neural net** (Transformer) | Handles the remaining 20% with higher accuracy | SageMaker Endpoint (Multi‑Model Endpoint) |
| **Feature store & caching** | Reuse embeddings, avoid recomputation | Amazon DynamoDB + ElastiCache |

*Design decisions:*  
- **Scalability:** Each layer autoscaled independently via Lambda concurrency or endpoint scaling.  
- **Availability:** Multi‑AZ deployment; failover to the fallback model if the fast model is unhealthy.  
- **Cost:** The lightweight classifier runs on spot instances (≈ $0.02/hr) while the heavy model uses reserved capacity (≈ $0.15/hr). We saved ~30 % in inference spend.

**Result**  
Latency dropped from 200 ms to 90 ms, meeting SLA. Accuracy increased by 3 % because the fallback model was invoked only when needed. Monthly inference cost fell by $12K.  

*Bar‑raiser focus:* Ownership of both layers, deep dive into latency vs accuracy trade‑offs, quantified impact on SLA and spend, and learning that a hybrid approach can beat monoliths.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
