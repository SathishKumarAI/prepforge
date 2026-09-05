---
qid: ing_07f8a6c618__star__local
question: 'Explain: Data Lifecycle Management — How do we manage sensitive data in
  a system?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 362
total_tokens: 604
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:44:46-05:00'
sources: []
---

**Situation:**  
At my last company we launched a recommendation engine that used customer purchase histories and browsing logs. Early in the pilot, the compliance team flagged that our raw datasets contained personally identifiable information (PII) and credit card numbers, which could trigger GDPR violations if mishandled.

**Task:**  
I was tasked with designing a data‑lifecycle framework that protected sensitive fields from ingestion to model deployment while still enabling meaningful ML insights.

**Action:**  
First, I introduced a schema‑based masking layer in our ETL pipeline: PII columns were hashed with SHA‑256 and salted; credit card numbers were tokenized using the open‑source Vault API. Next, we set up an access‑control matrix on our data lake (AWS S3) with fine‑grained IAM policies, ensuring only the ML team’s read‑only role could view the raw bucket. For model training, I built a “synthetic” dataset generator that sampled from anonymized distributions and fed it to the TensorFlow pipeline. Finally, I automated a retention policy via AWS Lifecycle rules: raw logs were archived to Glacier after 90 days, then purged after one year, with audit logs retained for two years.

**Result:**  
The new workflow reduced compliance incidents by 97 % and cut data‑processing time by 15 %. The team could iterate on models faster while staying fully compliant. I learned that a layered approach—masking, access control, synthetic data, and automated retention—is essential to safely managing sensitive data throughout the ML lifecycle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
