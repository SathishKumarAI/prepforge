---
qid: ing_cfc29bbd4d__aws__local
question: 'Explain: Design the evaluation for a document understanding feature: users
  upload invoices and scanned forms and ask questions about them.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 407
total_tokens: 649
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:10:35-05:00'
sources: []
---

**Situation & Task**  
I led the design of an “Ask‑Me Anything” layer on top of our invoice processing pipeline for a fintech startup that needed 99 % query accuracy and <2 s latency.

**Action – Technical Design**  
1. **Ingestion** – S3 bucket + EventBridge triggers an AWS Lambda that invokes Textract (Document Text Detection) to extract raw text and layout.  
2. **Knowledge Graph** – Store key fields in DynamoDB with a global secondary index on `invoice_id`. Use Amazon Neptune for relational queries across multiple documents (e.g., vendor‑to‑vendor relationships).  
3. **NLP Engine** – Deploy an AWS SageMaker endpoint running a fine‑tuned BERT model (on GPU instances) that maps user questions to entity paths in the graph.  
4. **Caching & Scaling** – Place API Gateway + Lambda@Edge fronting the endpoint; use ElastiCache Redis for hot query results, auto‑scaling based on CloudWatch metrics.  
5. **Monitoring** – CloudWatch dashboards track `QueryLatency`, `AccuracyScore` (validated against a 10k ground truth set), and cost per inference.

**Result**  
- Achieved **97 % accuracy** and **average latency of 1.8 s**, surpassing the target by 5 %.  
- Cost per query dropped 30 % after moving to Spot GPU instances for SageMaker.  

**Reflection – Bar‑raiser Lens**  
I owned every layer, from data ingestion to user response. By diving deep into Textract’s OCR confidence scores I identified a skew that required custom post‑processing rules—an example of *Bias for Action* and *Ownership*. The quantified impact (accuracy & cost) demonstrates *Deliver Results*, while the iterative A/B testing loop reflects continuous learning and *Invent & Simplify*.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
