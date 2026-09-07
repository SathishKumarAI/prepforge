---
qid: ing_3473c374d5__aws__local
question: 'Explain: Candidate — Distributed Counter System Design - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 443
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:23:22-05:00'
sources: []
---

**Situation & Task**  
I was asked to design a *distributed counter* for an ad‑tech platform that must support **10 M increments per second**, keep counts accurate within ±1, and expose real‑time metrics to dashboards with <200 ms latency.

**Action – Technical Design**  
1. **Write‑through architecture**: Each ingestion node writes to a *local in‑memory ring buffer* (Redis‑compatible) and asynchronously streams batches to **Amazon Kinesis Data Streams**.  
2. **Aggregator layer**: A fleet of **EC2 Spot instances** running **Kinesis Data Analytics** performs tumbling window aggregation (1 s windows). Aggregated results are pushed to a **DynamoDB Global Table** with *Strongly Consistent* reads for dashboards.  
3. **Fault tolerance & availability**: Kinesis provides 99.999% durability; DynamoDB global tables replicate across AZs, ensuring zero single‑point failure.  
4. **Cost control**: Spot instances + autoscaling keep compute cost <$500/day versus $1.5k on reserved EC2.

**Result**  
- Latency <150 ms for 95th percentile queries.  
- Accuracy within ±0.3% (verified via simulated 10 M/s load).  
- Operational cost reduced by **60%** compared to a monolithic approach.

**Reflection – Amazon Lens**  
*Ownership*: I scoped the solution, chose services, and defined SLAs.  
*Dive Deep*: I benchmarked Redis ring buffers vs. Kinesis throughput; iterated on window size for accuracy.  
*Learn from Failure*: Early prototype hit 400 ms latency due to unbounded buffer growth—adding back‑pressure via Kinesis sharding solved it.

**Leadership Principles Highlighted**  
- **Ownership** – led end‑to‑end design, testing, and cost optimization.  
- **Dive Deep** – performed micro‑benchmarks, tuned windowing, and analyzed trade‑offs between latency, accuracy, and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
