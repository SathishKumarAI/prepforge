---
qid: ing_f3e169013a__aws__local
question: 'Explain: What Changed Architecturally — Llamaindex'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 447
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:27:39-05:00'
sources: []
---

**Situation & Task**  
When we migrated the on‑prem LlamaIndex stack to a serverless data‑science platform, our customers complained that query latency was > 3 s for 90 % of requests and cost per inference shot up by 70 %. I owned the redesign.

**Action (Architecture)**  
* *Serverless compute*: replaced EC2 + GPU nodes with **AWS Lambda@Edge** + **Amazon SageMaker Neo** models, cutting cold‑start time from 1.5 s to < 200 ms.  
* *Data lake*: moved vector embeddings from local PostgreSQL to **Amazon QLDB** for ACID guarantees and **DynamoDB Accelerator (DAX)** for sub‑10 ms lookups.  
* *Caching & routing*: added **AWS CloudFront + Lambda@Edge** to cache popular queries; introduced a lightweight **Redis** cluster on **Elasticache** for session‑level state, reducing SageMaker inference calls by 45 %.  
* *Observability*: integrated **Amazon CloudWatch Metrics** and **X-Ray** to trace latency per component.

**Result**  
- Query latency dropped from **3.2 s (90th percentile)** to **0.42 s** (≈ 87 % reduction).  
- Cost per inference fell 70 %, saving ~$120k/month for a mid‑size client.  
- SLA compliance improved from 85 % to > 99.5 %.  

**Leadership Principles Highlighted**  
*Customer Obsession*: delivered measurable speed & cost benefits.  
*Dive Deep & Ownership*: I dissected every layer, quantified trade‑offs, and iterated until metrics met targets.

**Bar‑raiser takeaways** – the candidate shows ownership, deep technical reasoning, data‑driven impact, and learns from prior failure (high latency) to engineer a scalable, cost‑efficient solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
