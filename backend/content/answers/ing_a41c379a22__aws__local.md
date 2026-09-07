---
qid: ing_a41c379a22__aws__local
question: How do we detect and prevent abuse? — Urlshorteningservicetinyurl
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 410
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:38:40-05:00'
sources: []
---

**Situation / Task**  
I was leading a team to launch *TinyURL‑AI*, a URL‑shortening service that automatically flags malicious or spammy links before they’re published. Our goal: reduce abuse by 90 % while keeping latency under 30 ms for the 10 M daily traffic spike.

**Action (Technical)**  
1. **Data ingestion** – Ingest click logs and user reports into *Amazon Kinesis Data Streams*; batch them to *Glue* for schema‑enforced ETL.  
2. **Feature extraction & model training** – Use *SageMaker* with a LightGBM pipeline trained on 10 M labeled URLs (benign vs. malicious).  
3. **Real‑time inference** – Deploy the model as a *Lambda@Edge* function behind CloudFront, ensuring sub‑30 ms latency and global availability.  
4. **Feedback loop** – Store predictions and outcomes in *DynamoDB*; trigger automated retraining every 24 h with new labels via SageMaker Pipelines.

**Result (Quantified Impact)**  
- Abuse incidents dropped from 12 % to 1.2 % within two months (90 % reduction).  
- Latency remained <28 ms; cost per inference <$0.00002, keeping monthly spend under $5K.  
- Customer support tickets related to malicious URLs fell by 75 %.

**Reflection (Leadership Principles)**  
*Customer Obsession*: We built the model around user safety and transparency.  
*Ownership & Dive Deep*: I personally audited the feature importance graph, identified a bias in domain age, corrected it, and documented the change—ensuring continuous improvement.  

This approach balances scalability, availability, and cost while delivering measurable results that protect our users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
