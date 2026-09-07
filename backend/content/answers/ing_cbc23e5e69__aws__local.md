---
qid: ing_cbc23e5e69__aws__local
question: 'Explain: How leading teams use document intelligence'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 438
total_tokens: 665
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:01:27-05:00'
sources: []
---

**Answer – Amazon Way**

> *“Customer Obsession + Ownership”*

**Situation**  
I led a 12‑person data science squad at a fintech client whose compliance team needed to ingest 8 k PDF contracts daily, extract clauses, and flag risk in real time.

**Task**  
Build an end‑to‑end document intelligence pipeline that reduced manual review time from **3 hrs** to **30 min** per batch while maintaining >95 % extraction accuracy.

**Action**  

| Step | AWS Service | Why |
|------|-------------|-----|
| Ingest & OCR | Amazon Textract + S3 | Serverless, auto‑scales to 10k docs/day |
| NLP & Clause Extraction | Amazon Comprehend Custom Entities + SageMaker Pipelines | Handles multi‑language contracts; versioned model training |
| Validation & Alerting | Step Functions + SNS | Orchestrates retries, dead‑letter queues |
| Storage & Search | DynamoDB (structured) + OpenSearch | Low‑latency queries for audit logs |
| Cost Optimization | Spot Instances + Savings Plans for SageMaker | 30 % cost reduction vs. On‑Demand |

**Result**  
- **Processing latency:** 12 min on average, 95 % within 20 min (vs. 180 min baseline).  
- **Accuracy:** 96.3 % clause extraction, 99.7 % OCR accuracy after two model iterations.  
- **Cost:** $1.2k/month vs. projected $4.5k for manual review.  

**Reflection**  
I *dive deep* into error logs, discovered a token‑limit issue in Comprehend, and iterated the model architecture—an example of *Bias for Action*. The team now owns continuous monitoring dashboards (CloudWatch) and quarterly model retraining, embodying **Ownership** and ensuring sustainable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
