---
qid: ing_bbf57ffd1d__aws__local
question: 'Explain: What is Caching? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 435
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:28:51-05:00'
sources: []
---

**Caching** – a tactical layer that stores frequently accessed data in fast‑tier memory (e.g., Redis) so downstream ML pipelines avoid repeated expensive I/O or recomputation.

| **Leadership Principle** | **Why it matters here** |
|---------------------------|--------------------------|
| *Customer Obsession* | End users experience sub‑second inference. |
| *Ownership* | I own the latency‑budget and cost‑control of every request. |

### **Situation / Task**
Our recommendation service served 10 M requests/day, each requiring a heavy feature‑engineering step that hit S3 + GPU pre‑processing (≈200 ms). SLA: <50 ms per inference.

### **Action**
1. **Define cache key** = user_id + model_version.  
2. **AWS services** – ElastiCache‑Redis for in‑memory store, CloudWatch metrics for hit/miss ratios, Lambda to invalidate on model roll‑out.  
3. **Design** – 5 GB Redis cluster (cluster mode enabled) with automatic sharding; TTL = 12 h.  
4. **Scalability & Availability** – Multi-AZ replication + read replicas for read‑heavy traffic; autoscaling based on CPU/latency thresholds.  
5. **Cost trade‑off** – 0.2× the baseline compute cost, saving $1k/month, while reducing latency by 70 % (from 200 ms to 50 ms).  

### **Result**
- Cache hit rate ↑ 92 %.  
- Inference latency dropped from 200 ms → 48 ms (average).  
- Cost reduced by 30 % for the inference layer.  

**Bar‑raiser check:** I owned the end‑to‑end impact, dived deep into metrics, quantified performance gains, and iterated after an initial miss‑rate spike by adding a pre‑warm strategy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
