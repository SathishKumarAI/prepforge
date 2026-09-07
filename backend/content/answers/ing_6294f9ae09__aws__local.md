---
qid: ing_6294f9ae09__aws__local
question: 'Explain: Scaling & ops — Document Intelligence Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 372
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:08:21-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team at a fintech startup that needed to ingest ~200 k PDF statements per day, extract structured data, and feed it into downstream analytics. The goal was to reduce manual review time by 90% while keeping latency <5 s per document.

**Action**  
*Owned* the architecture: built a serverless pipeline with **Amazon S3**, **SQS**, **Lambda**, **Textract** (Document AI), and **Step Functions** for orchestration.  
Implemented *deduplication* via an SHA‑256 hash stored in **DynamoDB** to avoid reprocessing. Added *retry logic* and dead‑letter queues for failures.  
Used **Amazon SageMaker Endpoint** for a custom NER model, scaling with autoscaling groups. All components were *stateless* so the system could elastically handle 10× traffic spikes during quarterly reports.  
Employed **CloudWatch Alarms** + **SNS** to alert on error rates >2%.  

**Result**  
Processing time dropped from ~30 s to <4 s, and manual review hours fell from 1,200 to 120 per month (90% reduction). Cost per document decreased from $0.12 to $0.04, yielding an annual saving of ~$350k. The system handled a 3‑month spike of 600 k documents with zero downtime.

**Reflection**  
I *dive deep* into error patterns and discovered that OCR confidence thresholds were too high; lowering them improved accuracy by 4%. This lesson guided the next iteration, reinforcing our bias for action and ownership mindset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
