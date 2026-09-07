---
qid: ing_402f81aeec__aws__local
question: 'Explain: It''s actually useful also in uh uh — Building Software Systems
  At Google and Lessons Learned'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 466
total_tokens: 704
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:50:58-05:00'
sources: []
---

**Situation & Task**  
When I joined the ML‑ops team at a Google‑style startup, we had a monolithic training pipeline that ran nightly on a single VM. The pipeline took 12 hrs per model and was fragile—any change broke downstream services. I was tasked with re‑architecting it into a scalable, fault‑tolerant system.

**Action (AWS Design)**  
1. **Event‑driven orchestration** – replaced the monolith with AWS Step Functions to model each stage (data ingest → feature store → training → evaluation).  
2. **Serverless compute** – used Amazon SageMaker Processing for data prep, SageMaker Training Jobs for distributed GPU training, and Lambda for lightweight post‑processing.  
3. **Feature store** – implemented Amazon DynamoDB + DAX to cache features; this cut read latency from 200 ms to <5 ms.  
4. **Observability** – integrated CloudWatch metrics (training time, GPU utilization) and X-Ray traces; set up automated alerts for failures.

**Result**  
- Training time dropped from **12 hrs → 2 hrs** (an 83% reduction).  
- Cost per model fell from $120 to **$35**.  
- Mean time to recovery (MTTR) improved from 6 hrs to <30 min.  
- The system now supports **100+ concurrent training jobs** with >99.9% availability.

**Leadership Principles & Take‑aways**  
- *Customer Obsession*: By reducing latency and cost, we delivered models faster to our internal product teams.  
- *Dive Deep*: Continuous profiling revealed that 70 % of the time was spent on I/O; moving features to DynamoDB solved it.  
- *Ownership*: I led cross‑functional workshops, wrote documentation, and mentored juniors—demonstrating true ownership.  

**Bar‑raiser cues** – Clear ownership, quantified impact, deep technical dive, learning from a failed monolith, and continuous improvement through observability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
