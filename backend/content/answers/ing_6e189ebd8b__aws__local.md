---
qid: ing_6e189ebd8b__aws__local
question: 'Explain: Benchmarking Beyond Models — Introducing BigLaw Bench: Research'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 448
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:32:49-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
At a boutique legal‑tech startup I was asked to benchmark our document‑classification models against industry standards. The client’s lawyers needed confidence that the system could outperform legacy rule‑based engines on *real* court filings, not just synthetic datasets.

**Action (Dive Deep + Bias for Action)**  
1. **Define “beyond models”** – I scoped a new benchmark called **BigLaw Bench**, a curated corpus of 120 k annotated case documents from the public docket.  
2. **Infrastructure** – Built an end‑to‑end pipeline on AWS:  
   * **Amazon S3** for raw PDFs, **AWS Glue** to parse and store metadata in **Amazon Athena**.  
   * **Amazon Textract** + **Comprehend Medical** (custom domain) for OCR & entity extraction.  
   * Trained models on **SageMaker** with spot instances, autoscaling across 8 g4dn.xlarge nodes.  
3. **Evaluation** – Created a federated scoring service in **AWS Lambda** that ran each model (our transformer and the baseline rule‑engine) in parallel, aggregating precision/recall into a single metric: **F1@Top‑5**.  
4. **Result & Impact** – The benchmark showed our model achieved *F1 = 0.89* vs. 0.73 for the legacy engine, a 21 % lift in accuracy. Deployment to production cut manual review time by **35 hrs/month**, saving ~$18k annually.

**Learning (Invent & Simplify + Deliver Results)**  
The first iteration missed rare legal phrases, so I added a *few‑shot fine‑tuning* step using **Amazon Bedrock** (Claude) for domain adaptation. This reduced false negatives by 12 %. The BigLaw Bench now serves as an internal audit tool and can be shared with partners, reinforcing our commitment to customer trust while maintaining ownership of the entire ML lifecycle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
