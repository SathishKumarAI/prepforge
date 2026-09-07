---
qid: vq_64de8d0edb__aws__local
question: How will you balance/correct data that is unbalanced?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 402
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:54:47-05:00'
sources: []
---

**Situation & Task**  
At a fintech startup I led the ML team that built a fraud‑detection model on credit‑card data. The training set was heavily skewed: ~95 % legitimate transactions vs. 5 % fraudulent, causing the model to miss most frauds and inflate false positives.

**Action**  
1. **Ownership & Dive Deep:** I took full ownership of the data pipeline, auditing the ingestion process in S3 and Glue ETL jobs to identify class‑imbalance causes (missing labels, delayed reporting).  
2. **Bias for Action & Invent & Simplify:**  
   * Used AWS SageMaker Ground Truth to relabel a stratified 10 % sample, improving label quality by 12 %.  
   * Applied SMOTE via SageMaker’s built‑in “Data Wrangler” transform job and balanced the dataset with a 1:1 ratio.  
   * Implemented an online learning loop using Amazon Kinesis Data Streams + Lambda to continuously re‑balance new batches in real time.  
3. **Deliver Results:** Trained an XGBoost model on SageMaker; precision rose from 0.72 to **0.89**, recall from 0.38 to **0.78** (F1 = 0.64 vs. 0.80). The system now processes ~2 M transactions/day with <30 ms latency, cost‑effective at ~$3 k/month.

**Result & Learning**  
Balanced data reduced false positives by 45 %, cutting chargebacks $1.2 M annually. I documented the pipeline in CloudWatch dashboards and shared lessons on iterative rebalancing—showing that owning the problem, diving deep into data, and acting quickly yields measurable business impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
