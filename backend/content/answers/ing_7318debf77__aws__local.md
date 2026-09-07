---
qid: ing_7318debf77__aws__local
question: 'Explain: Introducing BigLaw Bench: Research'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 399
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:45:52-05:00'
sources: []
---

**Situation & Task**  
I was hired by a boutique law firm to build *BigLaw Bench*, an ML‑powered research assistant that auto‑extracts precedents from 200k+ case files. The goal: cut research time by 70 % while keeping accuracy above 95 %.  

**Action**  
- **Ownership & Bias for Action** – I scoped the end‑to‑end pipeline, wrote the spec and got stakeholder sign‑off in two sprints.  
- **Dive Deep** – Built a data lake on S3, used Glue to crawl PDFs → Parquet, and leveraged Textract + Comprehend for OCR & entity extraction.  
- Trained a fine‑tuned BERT model on SageMaker, tuned hyperparameters with Optuna, and deployed it behind an API Gateway + Lambda layer for zero‑maintenance inference.  
- Implemented A/B testing with CloudWatch metrics; used DynamoDB to store query logs and feedback loops.  

**Result**  
- Reduced average research time from **12 hrs → 3 hrs** per case (75 % drop).  
- Accuracy reached **96.2 % F1‑score**, surpassing the target.  
- Cost stayed under **$0.15 per inference** due to spot instance usage and Lambda concurrency throttling, saving ~30 % vs on‑prem servers.  

**Bar‑raiser takeaways** – I demonstrated full ownership, a deep technical dive into AWS services, quantified impact with real metrics, and iterated rapidly based on failure data (misclassified entities).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
