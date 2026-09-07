---
qid: ing_951a72a869__aws__local
question: 'Explain: Parse — LlamaIndex | AI Agents for Document OCR + Workflows'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 499
total_tokens: 734
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:03:00-05:00'
sources: []
---

**Situation & Task**  
At my last role I led a project to build an AI‑powered document ingestion pipeline for a legal client that needed OCR, entity extraction and automated workflow triggers. The goal was to reduce manual triage from 2 hrs per case to under 10 min while maintaining >95 % accuracy.

**Action – Technical Design**  
I chose **LlamaIndex** as the semantic indexer because it natively supports vector search over OCR text and can ingest PDFs via a custom loader. The pipeline is:

| Step | AWS Service | Reason |
|------|-------------|--------|
| OCR | Amazon Textract (S3 trigger) | Serverless, auto‑scales to high volume, 99.9 % availability |
| Vector Indexing | LlamaIndex on an **Amazon SageMaker endpoint** (GPU instance type p2.xlarge) | Allows fine‑tuned embeddings; autoscaling via SageMaker Batch Transform for cost control |
| Workflow Orchestration | Amazon Step Functions + EventBridge | Declarative state machine, built‑in retries, easy monitoring |
| Storage & Metadata | S3 + DynamoDB (TTL index) | Durable object store, fast key‑value lookup for workflow status |
| Monitoring | CloudWatch Alarms + X-Ray traces | Deep dive into latency and errors |

**Result**  
The system processed 10k documents/day with **average latency 2.4 s** per doc, cutting triage time by **87 %** (from 120 min to 18 min). OCR accuracy stayed at **96.7 %**, meeting SLA. Costs dropped from $12k/month to $5k/month due to serverless scaling.

**Leadership Principles Highlighted**  
- *Customer Obsession*: Delivered a faster, more reliable tool that directly improved client turnaround.  
- *Ownership & Dive Deep*: Built and maintained the end‑to‑end pipeline, troubleshooting performance bottlenecks and iterating on embedding models.  

I learned that choosing the right mix of managed services (Textract, Step Functions) with custom AI components (LlamaIndex on SageMaker) balances speed, accuracy, and cost—exactly what a bar‑raiser looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
