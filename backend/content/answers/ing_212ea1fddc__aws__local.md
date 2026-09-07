---
qid: ing_212ea1fddc__aws__local
question: What are the expectations in a System Design Interview?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 615
total_tokens: 845
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:42:18-05:00'
sources: []
---

**Answer (Amazon style)**  

*Leadership Principles:* **Ownership** + **Dive Deep**  
I always treat the System Design Interview like a production launch: I own every component and dive into the details that matter.

**S – Situation**  
We were asked to design an “on‑demand ML inference platform” for a retailer that serves 10 M users daily. The goal was low latency (<200 ms) while keeping costs under $2 M/yr.

**T – Task**  
My task: sketch the end‑to‑end architecture, justify AWS services, and estimate performance & cost.

**A – Action**  

| Component | AWS Service | Rationale |
|-----------|-------------|-----------|
| Data ingestion | Kinesis Data Streams + Lambda | Real‑time streaming with auto‑scaling. |
| Feature store | DynamoDB (global tables) | Low read latency (<10 ms), cross‑region replication for availability. |
| Model serving | SageMaker Endpoint (multi‑model endpoint, GPU‑based). Use *Inference Scheduler* to scale down during off‑peak. | Keeps inference cost predictable; can switch to CPU during low traffic. |
| Orchestration | Step Functions + EventBridge | Decouples pipeline stages and provides retry/visibility for failures. |
| Monitoring | CloudWatch + X-Ray | Trace end‑to‑end latency, capture SLA violations. |

**D – Dive Deep**  
- **Scalability:** Kinesis shards auto‑scale; Lambda concurrency limits are set to 1000 per shard to handle peak bursts (10× normal traffic).  
- **Availability:** Multi‑AZ deployment with DynamoDB global tables gives <1 ms cross‑region latency.  
- **Cost:** Estimated $1.8 M/yr: Kinesis ($200k), Lambda ($150k), SageMaker endpoint ($800k), DynamoDB ($250k), networking & monitoring ($100k).  

**R – Result**  
Simulated 24‑hour load with a 10× traffic spike; achieved 92 % of requests <180 ms and 99.9 % availability. Cost stayed within the $2 M budget, and we reduced model deployment time from days to minutes using SageMaker’s *One-Click Deploy*.

**Bar‑raiser cues:**  
- **Ownership:** I proposed a single‑pane dashboard for all metrics; it became the ops standard.  
- **Dive Deep:** I quantified shard sizing, Lambda concurrency, and endpoint scaling curves.  
- **Quantified Impact:** 92 % latency SLA vs industry average 80 %.  
- **Learning from Failure:** During a real outage, we traced back to insufficient Kinesis shard count; post‑mortem led to automated shard scaling rules now in place.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
