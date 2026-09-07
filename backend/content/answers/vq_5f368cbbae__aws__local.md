---
qid: vq_5f368cbbae__aws__local
question: How will you handle missing values in your data analysis?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 400
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:53:34-05:00'
sources: []
---

**Situation & Task (Customer Obsession + Ownership)**  
At my last role I built a fraud‑prediction pipeline for a $1 B e‑commerce platform. Half the transaction logs were missing critical fields (merchant ID, device type). If left untreated, the model accuracy dropped from 93 % to 70 %, directly impacting revenue.

**Action (Dive Deep + Bias for Action)**  
I first instrumented an **AWS Glue crawler** to catalog the raw data in S3 and ran a **Python ETL job** that:  

1. **Imputed categorical gaps** with a *mode* derived from the same merchant’s historical traffic, stored in DynamoDB for fast lookup.  
2. **Used statistical imputation** (median for numeric fields) and flagged rows with >50 % missingness for exclusion.  
3. Deployed a **SageMaker Ground Truth workflow** to manually review 1 % of the flagged samples, feeding back labels into an automated *auto‑encoder* that learned latent features for remaining gaps.

The pipeline ran nightly on **EMR Spot instances**, costing <$0.05/hr, and processed 10 M rows in under 30 min, keeping latency <5 s for real‑time scoring.

**Result (Deliver Results)**  
After implementing the strategy, model precision improved from 70 % to 91 %, increasing daily revenue by $2.3 M. The automated imputation reduced manual effort by 80 %.  

**Learning & Bar‑raiser cues** – I documented failure modes (e.g., mode drift) and added a scheduled re‑train loop, demonstrating ownership and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
