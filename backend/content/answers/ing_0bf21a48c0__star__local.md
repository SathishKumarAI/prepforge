---
qid: ing_0bf21a48c0__star__local
question: Where does your golden dataset come from, and how do you stop it rotting?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 319
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:52:29-05:00'
sources: []
---

**Situation:**  
When I joined the fraud‑detection team at FinTechX, our model’s accuracy had dropped from 94 % to 86 % because the training data was stale—many merchants’ transaction patterns changed after a regulatory update.

**Task:**  
I needed to rebuild a “golden” dataset that reflected current merchant behavior and devise a pipeline to keep it fresh without manual intervention.

**Action:**  
First, I extracted raw logs from our 24‑hour ingestion layer, then applied an incremental ETL with Apache Spark: deduplicate, enrich with external risk scores, and hash sensitive fields for compliance. I used Delta Lake to version the dataset so every change is tracked. To prevent rotting, I scheduled a nightly job that runs a drift‑detection script (using Kolmogorov–Smirnov tests) against the latest batch; if drift exceeds 5 %, it triggers an automatic re‑training cycle and alerts the data science lead. I also implemented a retention policy that archives older snapshots to S3 Glacier after one year, keeping only the last 12 months in hot storage.

**Result:**  
The refreshed golden dataset lifted model precision back to 93 % within three days of deployment, and automated drift checks reduced manual review time by 70 %. I learned that treating data as code—versioning, testing for drift, and automating retraining—is key to sustaining AI performance in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
