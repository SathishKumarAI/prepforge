---
qid: ing_4472c93800__aws__local
question: 'Explain: Step 7: Run on All Traces at Scale — Ai Evals Complete Guide Langwatch
  Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 518
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:01:00-05:00'
sources: []
---

**Step 7: Run on All Traces at Scale – AI Evals Complete Guide (LangWatch/LangFuse)**  

**Situation:** Our product, *LangWatch*, was a real‑time language model evaluation platform used by 12,000 developers worldwide. Early feedback showed latency spikes when running evals on every trace from the ingest pipeline, hurting SLA compliance and increasing costs.  

**Task:** Deliver a scalable, cost‑efficient architecture that executes all traces through LangFuse without compromising performance or accuracy.  

**Action:**  
1. **Decouple ingestion & evaluation** – Ingest traces into an S3 bucket (object storage) via Kinesis Data Firehose; use Athena to catalog metadata.  
2. **Batch eval jobs with AWS Batch + Fargate** – Partition traces into 5‑minute windows, submit parallel jobs that spin up GPU‑enabled containers running LangFuse.  
3. **Autoscale & Spot pricing** – Configure Auto Scaling Groups for the compute fleet; use Spot Instances to reduce cost by ~60 %.  
4. **Result aggregation** – Store evaluation outputs in DynamoDB (low latency) and publish metrics to CloudWatch dashboards.  
5. **Observability** – Instrument with OpenTelemetry, push traces to X-Ray for root‑cause analysis.  

**Result:**  
- Reduced end‑to‑end eval latency from 4 s to <1.2 s per trace.  
- Cut compute spend by 48 % while maintaining 99.9 % availability.  
- Enabled 200 % increase in daily evaluation throughput, supporting a 3× growth in user base without new data center investments.  

**Leadership Principles:** *Ownership* – I took full responsibility for the end‑to‑end pipeline; *Dive Deep* – I profiled every component to identify bottlenecks; *Bias for Action* – Implemented Spot scaling within two sprints; *Deliver Results* – Achieved measurable performance and cost targets.  

**Bar‑raiser cues:**  
- Clear ownership narrative.  
- Quantified impact (latency, cost, throughput).  
- Trade‑off analysis (GPU vs CPU, on‑demand vs Spot).  
- Learning loop: after deployment we iterated on batch size based on real‑time telemetry.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
