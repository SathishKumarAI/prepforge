---
qid: ing_3c054ac2cd__aws__local
question: 'Explain: Eval-set construction with human labeling'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 409
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:41:59-05:00'
sources: []
---

**Situation / Task**  
At my last role I was tasked with building an evaluation set for a new fraud‑detection model that would be deployed in production on AWS SageMaker. The goal was to create a high‑quality, balanced dataset that reflected real user traffic while keeping labeling costs under $15k.

**Action**  
1. **Ownership & Bias for Action** – I scoped the entire pipeline: data extraction (Athena), sampling strategy (approx 10% of daily transactions), and quality checks.  
2. **Dive Deep** – I used a stratified random sample across merchant tiers, transaction amounts, and geographies to avoid bias.  
3. **AWS Services** –  
   * **Amazon SageMaker Ground Truth** for active learning labeling, leveraging built‑in workflows and automatic re‑labeling of uncertain samples.  
   * **SQS + Lambda** orchestrated the labeling queue and monitored worker throughput.  
   * **Athena + Glue** cataloged raw logs and performed incremental deduplication.  
4. **Cost & Scalability** – By limiting the sample to 50k records and using Spot instances for labeling, I kept costs at $12k while ensuring the dataset could scale if more annotations were needed.  
5. **Deliver Results** – The final set had a 0.87 F1 score on a held‑out test split, improving the production model’s precision from 81% to 92%.

**Result**  
The evaluation set enabled a rapid A/B rollout that reduced false positives by 18%, translating to $4M in avoided chargebacks over six months. The project was recognized as a best practice for data labeling at AWS re:Invent 2025.

*Key take‑aways*: Own the end‑to‑end pipeline, dive deep into sampling bias, and quantify impact—hallmarks of an Amazon bar‑raiser.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
