---
qid: ing_341cd45ff8__aws__local
question: 'Explain: Failure modes & mitigations — Document Intelligence Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 481
total_tokens: 711
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:22:49-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team to build an end‑to‑end Document Intelligence Pipeline that extracted structured data from invoices, contracts and receipts at 10 k docs/day for our retail analytics platform.

**Action**  
*Customer Obsession & Ownership*: I mapped every failure point—OCR misreads, schema drift, downstream API timeouts, and storage corruption.  
1. **OCR Layer (Amazon Textract + SageMaker custom model)** – added a confidence‑based re‑run loop; if the text score < 0.85, the doc is flagged for manual review.  
2. **Schema Validation (AWS Glue & AWS Schema Registry)** – before ingestion we run a JSON schema check; invalid payloads are routed to an SQS “dead‑letter” queue with metrics in CloudWatch.  
3. **Data Lake (Amazon S3 + Athena)** – versioned buckets and immutable Glacier backups protect against accidental overwrite or deletion.  
4. **Processing Orchestrator (AWS Step Functions)** – each step has built‑in retries, exponential back‑off, and a DLQ that triggers an SNS alert to the ops team.  
5. **Observability** – Lambda metrics, X-Ray traces, and a Grafana dashboard provide real‑time failure visibility.

*Dive Deep & Bias for Action*: I added a nightly “data health” job that runs a diff against a ground‑truth dataset; any drift > 2% triggers an automated rollback of the latest model.  

**Result**  
Within 3 months, we reduced OCR error rates from 12 % to < 1 %, dropped downstream API failures by 95 %, and cut manual review time from 4 hrs/day to 30 min/day—saving $18k/month in labor. The pipeline now scales horizontally with minimal cost ($0.0005 per doc) while guaranteeing ≥ 99.9 % availability.

**Bar‑raiser notes** – I demonstrated deep ownership, quantified impact, and a clear learning loop (automated rollback), which are the key signals for an Amazon interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
