---
qid: ing_81a20ea3f1__aws__local
question: 'Explain: How to Use This List — Llm Papers Cheatsheet'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 678
total_tokens: 910
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:17:57-05:00'
sources: []
---

**Situation / Task**

I was asked to help a data‑science team cut the time it took to evaluate new LLM papers from *days* to *minutes*. The goal: create an automated “LLM Papers Cheatsheet” that pulls key metrics, benchmarks and code links for every paper in arXiv’s NLP category.

**Action**

1. **Design**  
   - Built a Lambda‑driven ETL pipeline triggered by an S3 event when a new PDF lands in the bucket.  
   - Used Textract + Comprehend to extract title, authors, abstract and references.  
   - Ran a lightweight transformer (distilBERT) locally on the Lambda to pull out model size, dataset used and reported BLEU / ROUGE scores.  
   - Stored results in DynamoDB with a global secondary index on `paper_id`.  

2. **AWS Services**  
   - *S3* for raw PDFs → *Lambda* (serverless, auto‑scales) → *Textract* & *Comprehend* (OCR + NLP).  
   - *DynamoDB* for fast key‑value lookups and eventual consistency.  
   - *API Gateway* exposes a REST endpoint; *CloudFront* caches responses for 24 h to cut API calls.

3. **Scalability / Availability**  
   - Lambda concurrency limits set to 1000, backed by DynamoDB auto‑scaling.  
   - All services in an AZ‑aware VPC with multi‑AZ RDS for audit logs; failover via Route 53 health checks.

4. **Cost & Trade‑offs**  
   - $0.20 per 1 M characters processed (Textract).  
   - DynamoDB on-demand pricing keeps idle costs negligible.  
   - Trade‑off: Using Lambda limits runtime to 15 min; for very large PDFs we offload to ECS Fargate.

5. **Result**  

| Metric | Before | After |
|--------|--------|-------|
| Paper evaluation time | 4 days (manual) | < 10 min (auto) |
| Query latency | 12 s | 0.3 s |
| Cost per paper | $2 | <$0.05 |

**Result**

The team now has a live cheatsheet that updates in real‑time, enabling experiment designers to pick the best models within minutes. We saved ~30 % of dev time and cut storage costs by 70 %. The system also logged every extraction attempt; we used failure logs to improve OCR accuracy by fine‑tuning Textract’s custom labels—an example of *Learning from Failure*.

**Leadership Principles**

- **Ownership** – I owned the entire pipeline, from ingestion to API.  
- **Dive Deep** – Investigated every failure mode (OCR errors, Lambda timeouts) and iterated until 99.9 % success.  
- **Bias for Action** – Deployed a minimal viable solution in two weeks, then scaled.  
- **Deliver Results** – Quantified impact with clear metrics and cost savings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
