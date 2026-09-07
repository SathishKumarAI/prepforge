---
qid: ing_5312425204__aws__local
question: 'Explain: Step 3: Split Data (Train / Dev / Test) — Ai Evals Comprehensive
  Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 433
total_tokens: 674
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:32:48-05:00'
sources: []
---

**Step 3 – Split Data (Train / Dev / Test)**  
*Leadership Principles:* **Ownership**, **Dive Deep**

**Situation:** In a recent fraud‑detection project I was responsible for training a neural net that would flag suspicious transactions in real time.

**Task:** To ensure the model generalised, I had to split the 12 M transaction records into *train*, *development* (dev), and *test* sets without leaking future information.

**Action:**  
1. **Chronological split** – 70 % train (earliest data), 15 % dev (mid‑period), 15 % test (latest). This respects the time‑series nature of fraud patterns.  
2. **Stratified sampling** on the label (`fraud/not`) to keep class ratios (~1:100) consistent across splits, preventing bias.  
3. Implemented with **AWS Glue** jobs that write each split into separate S3 buckets (train/ dev/ test). Glue’s dynamic frames automatically handle schema evolution and metadata cataloging in **AWS Glue Data Catalog**, enabling downstream services to discover partitions quickly.  
4. Added a **validation checkpoint**: after every epoch, the model is evaluated on the dev set; if dev‑AUC drops 2 % for two consecutive epochs, training stops (early stopping).  

**Result:** The final model achieved an AUC of 0.97 on the test set—up 5 % over baseline—and reduced false positives by 30 %, saving ~$1.2M in manual review costs annually. The split strategy also cut overfitting risk, a lesson I now enforce across all ML projects.

**Bar‑raiser focus:** Ownership of data integrity, deep dive into temporal bias, quantifiable impact on fraud loss, and iteration after dev failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
