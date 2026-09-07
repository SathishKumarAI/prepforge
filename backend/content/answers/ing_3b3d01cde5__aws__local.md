---
qid: ing_3b3d01cde5__aws__local
question: 'Explain: Reducing Latency — Latency vs Throughput vs Bandwidth | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 571
total_tokens: 809
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:40:20-05:00'
sources: []
---

**Situation / Task**  
At my last role I led a feature that exposed real‑time fraud scores to the checkout flow. The API had to return a score in < 50 ms while processing millions of events per day, yet we were limited by our GPU‑based inference cluster’s throughput.

**Action**  
I performed a **latency–throughput–bandwidth audit**:

1. **Measure**: Instrumented each pipeline stage with CloudWatch metrics (CPU, GPU, network).  
2. **Model the trade‑off**: Throughput = *batch size × inference rate*; latency = *model run time + queue wait*.  
3. **Redesign**:  
   - Switched to **SageMaker Real‑Time Endpoint** with autoscaling on CPU utilization (instead of fixed GPU nodes).  
   - Introduced a **Redis cache** (Amazon ElastiCache) for the 10 % most frequent scores, cutting network bandwidth by 70 %.  
   - Deployed a **Lambda@Edge** layer to pre‑compute low‑variance features at edge locations, reducing round‑trip latency.

4. **Validate**: Ran A/B tests; median latency dropped from **68 ms to 32 ms** (50 % reduction) while maintaining throughput of 150k requests/second and keeping cost under $3k/month versus the prior $7k GPU cluster.

**Result**  
The change increased checkout conversion by **2.4 %**, translating to an additional $1.8M in annual revenue, and earned a “Customer Obsession” commendation from product management.

---

### AWS Services & Trade‑offs  

| Service | Role | Scalability | Availability | Cost |
|---------|------|-------------|--------------|------|
| SageMaker Real‑Time Endpoint | Inference | Autoscaling by CPU/Memory | Multi‑AZ, managed | Pay‑per‑second |
| ElastiCache (Redis) | Cache | Sharded clusters | Multi‑AZ | Lower than GPU |
| Lambda@Edge | Edge pre‑calc | Serverless, global | Global | Minimal |

**Dive Deep** – I interrogated every metric and iteratively tuned batch size. **Ownership** – I championed the redesign across infra, security, and ops teams. **Bias for Action** – Prototyped within 48 hrs to prove feasibility.  

*Bar‑raiser focus*: clear ownership, deep metric analysis, quantified ROI, and reflection on why the prior GPU approach failed (over‑provisioning, underutilized bandwidth).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
