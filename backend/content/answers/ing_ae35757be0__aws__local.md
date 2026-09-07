---
qid: ing_ae35757be0__aws__local
question: 'Explain: Improving Throughput — Latency vs Throughput vs Bandwidth | System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 492
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:59:32-05:00'
sources: []
---

**Situation** – In my last role I led the redesign of a real‑time recommendation engine that served 1 M requests/day. The SLA required <200 ms latency but we were throttling at ~2,000 RPS due to a single‑node inference service.

**Task** – Increase throughput to 10× while keeping latency <150 ms and bandwidth per request under 50 KB, all on a cost‑effective AWS stack.

**Action**  
1. **Architectural dive**: I decomposed the flow into *ingestion → pre‑processing → inference → post‑processing*.  
2. **Scalable services** –  
   • Use **Amazon Kinesis Data Streams** (partitioned shards) for ingestion, giving us horizontal scaling and auto‑sharding.  
   • Deploy **ECS Fargate** tasks behind an **Application Load Balancer**; each task runs a *TensorFlow Serving* container with 4 vCPU/8 GiB, enabling burst capacity.  
   • Persist model artifacts in **S3 + EFS** for fast read and versioning.  
   • Cache hot embeddings in **ElastiCache Redis**, reducing per‑request bandwidth by ~30 %.  
3. **Cost & availability trade‑offs** – Spot instances give 40 % savings; we set up CloudWatch alarms to scale out on CPU >70 % and down on <20 %, ensuring high availability with minimal idle cost.

**Result** – Throughput rose from 2,000 RPS to 25,000 RPS (12×), latency dropped to 120 ms, bandwidth per request stayed below 48 KB, and the monthly spend fell by 35 %.  

> **Leadership Principles:** *Customer Obsession* (delivering faster recommendations) & *Ownership* (owning end‑to‑end pipeline).  
> **Bar‑raiser cues:** clear ownership of metrics, deep dive into service trade‑offs, quantified impact, and iterative learning from the initial bottleneck.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
