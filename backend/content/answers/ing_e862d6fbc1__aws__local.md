---
qid: ing_e862d6fbc1__aws__local
question: 'Explain: Scaling & ops — Content Moderation Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 393
total_tokens: 622
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:03:35-05:00'
sources: []
---

**Situation** – In a previous role I was tasked with building a real‑time content moderation pipeline for a global video platform that had to process ~5 M uploads/day while keeping the user experience frictionless (≤2 s latency per upload).  

**Task** – Deliver an end‑to‑end system that scales horizontally, guarantees 99.9 % availability, and keeps operational costs under $0.50 per moderation job.  

**Action** –  
- **Architecture**: Ingest videos into S3 → trigger a Lambda to generate thumbnails; push jobs to an SQS queue.  
- **Moderation Engine**: Run parallel inference on SageMaker endpoints (custom CNN + OpenAI‑style text classifier). Scale via auto‑scaling groups tied to CloudWatch metrics.  
- **Post‑processing**: Store results in DynamoDB with a TTL of 30 days; publish decisions to SNS for downstream services.  
- **Observability**: Use CloudWatch Logs & X-Ray for latency tracing, and Athena queries on S3 logs for audit.  
- **Cost Control**: Spot Instances for SageMaker training + Lambda concurrency limits; reserved capacity for high‑throughput periods.  

**Result** – Achieved 99.95 % throughput with <1.8 s average latency and $0.42 per moderation job, reducing the previous manual review backlog by 70%.  

> **Leadership Principles**: *Customer Obsession* (ensuring fast, reliable moderation) & *Ownership* (owning cost, performance, and resilience).  
> **Bar‑raiser focus**: deep dive into scaling trade‑offs, quantified ROI, and lessons from a prior failure where synchronous inference caused 15 % SLA breach.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
