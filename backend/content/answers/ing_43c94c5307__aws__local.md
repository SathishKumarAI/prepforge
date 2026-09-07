---
qid: ing_43c94c5307__aws__local
question: 'Explain: How to Clean Messy CSV Files with Python: A Beginner’s Guide'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 434
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:59:27-05:00'
sources: []
---

**Situation (S)**  
While onboarding a new data‑science team, we inherited ~50 GB of raw CSVs from a legacy ERP system. The files were riddled with duplicate rows, inconsistent delimiters, missing headers, and thousands of malformed date fields—making model training impossible.

**Task (T)**  
I was tasked to build an automated pipeline that cleans these files in minutes, preserves data quality, and scales to future increases in volume.

**Action (A)**  
1. **Ownership & Bias for Action** – I scoped the problem, wrote a one‑liner script (`pandas.read_csv(..., engine='python')`) to auto‑detect delimiters and infer headers.  
2. **Dive Deep** – Implemented a validation layer that flags rows with >30% missing values or out‑of‑range dates; logged anomalies to CloudWatch for audit.  
3. **AWS Services** – Deployed the script as an AWS Lambda triggered by S3 `ObjectCreated` events, using Amazon S3 for storage and DynamoDB for a lightweight metadata table.  
4. **Scalability & Cost** – Leveraged Lambda’s concurrency (max 10) to process multiple files in parallel; used S3 Intelligent‑Tiering to keep cold data inexpensive.

**Result (R)**  
- Reduced manual cleaning effort by **80 %**, cutting engineer time from 12 hrs/month to <30 min.  
- Achieved 99.9 % data integrity, allowing downstream ML models to hit a 15 % lift in predictive accuracy.  
- The pipeline now handles 5× larger datasets with negligible cost impact (~$0.02 per file).

**Learning** – Early prototype failed on nested JSON columns; refactored to use `awswrangler` for hybrid CSV/JSON parsing, illustrating the importance of iterating based on real‑world edge cases.  

*Leadership Principles: Ownership, Dive Deep.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
