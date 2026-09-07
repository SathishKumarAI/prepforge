---
qid: ing_44e6f5c546__aws__local
question: 'Explain: Data & context strategy — Document Intelligence Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 595
total_tokens: 824
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:01:50-05:00'
sources: []
---

**Situation**  
At my previous role I led a cross‑functional team to build an enterprise **Document Intelligence Pipeline** that extracted structured data from 1 M+ PDFs per month for a financial services client. The existing manual review cost $3 M annually and had a 15 % error rate.

**Task**  
I was tasked with designing a fully automated, highly available pipeline that reduced processing time by 80 %, cut costs by 50 %, and maintained <1 % extraction errors—while keeping the solution compliant with GDPR and SOX.

**Action**  
*Ownership & Bias for Action*: I scoped requirements, wrote the PRD, and formed a small squad.  
*Dive Deep & Invent & Simplify*:  
- **Ingest**: S3 EventBridge triggers Lambda to copy PDFs into an “in‑progress” bucket.  
- **Pre‑process**: A containerized *Textract* worker (ECS Fargate) runs OCR and PDF segmentation, storing raw text in DynamoDB for auditability.  
- **Extraction**: SageMaker Ground Truth labels a custom NER model; inference is served via SageMaker Endpoint with autoscaling.  
- **Post‑process & Validation**: Lambda aggregates predictions, cross‑checks against business rules (e.g., account number patterns), and writes clean JSON to an “output” bucket.  
- **Monitoring**: CloudWatch metrics + X-Ray trace for latency; SNS alerts on >5 % error spikes.

*Scalability*: Fargate tasks auto‑scale with SQS, ensuring 99.9 % throughput during peak bursts.  
*Availability*: All services run in two AZs; data is replicated via S3 Cross‑Region Replication for disaster recovery.  
*Cost*: By using serverless components (Lambda, EventBridge) and spot instances for training, we reduced infra spend from $1.2 M to $600K annually.

**Result**  
- **Processing time** dropped from 4 hrs to 30 min per batch (80 % faster).  
- **Cost** fell by 50 %.  
- **Accuracy** improved to 0.99 F1‑score, cutting manual review effort by 90 %.  
The client saved $2.5 M annually and could reallocate analysts to higher‑value tasks.

*Bar‑raiser notes*: Demonstrated end‑to‑end ownership, deep technical dive (model training, scaling), quantifiable impact, and a post‑mortem that led us to add a retry policy for failed OCR jobs—learning that “fail fast, fix faster.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
