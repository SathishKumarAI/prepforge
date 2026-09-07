---
qid: ing_a346590fce__aws__local
question: 'Explain: The Interview Question — Fraud Detection'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 227
output_tokens: 383
total_tokens: 610
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:34:24-05:00'
sources: []
---

**Fraud Detection System – “Detect the Red Flags”**

*Situation & Task*:  
When I joined a fintech startup, we were losing **$2 M/month** to card‑fraud because our rule‑based engine missed 70 % of suspicious transactions. My goal: build a real‑time fraud detection pipeline that cuts loss by ≥50 % while keeping latency <200 ms.

*Action*:  
- **Ownership & Customer Obsession**: I scoped the problem with merchants and CS teams, translating their pain into KPIs (false‑positive rate ≤3%, true‑positive ≥90%).  
- **Dive Deep + Bias for Action**: Collected 4M labeled transactions, engineered features (IP entropy, velocity, device fingerprint). Trained an XGBoost model on SageMaker, then deployed it via **AWS Lambda + API Gateway** behind a **Kinesis Data Streams** ingestion layer.  
- **Invent & Simplify**: Added an auto‑scaling **Elastic Inference** endpoint to keep cost <$0.01/txn. Used **DynamoDB** for real‑time blacklists and **S3 Glacier** for audit logs.  

*Result*:  
- Reduced fraud losses by **$1.2 M/month** (60 % drop).  
- False positives fell from 12 % to 2.8 %.  
- End‑to‑end latency stayed at **180 ms**, meeting SLAs.

*Learnings*:  
I iterated on feature importance, discovered that device fingerprinting was the single biggest contributor. I documented the failure modes of the initial rule engine and turned them into automated tests for future models—an example of continuous learning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
