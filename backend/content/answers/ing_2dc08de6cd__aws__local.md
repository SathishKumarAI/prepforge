---
qid: ing_2dc08de6cd__aws__local
question: 'Explain: Out of Scope — Socialnetworkfacebookinstagram'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 333
total_tokens: 563
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:08:42-05:00'
sources: []
---

**Situation & Task**  
While building a recommendation pipeline for an e‑commerce platform, I was asked to extend the model to incorporate user activity from external social networks (Facebook, Instagram). The product team wanted a “social graph” feature, but we had no existing data ingestion or privacy controls for those platforms.  

**Action**  
1. **Ownership & Dive Deep** – I scoped the problem, documented that pulling raw public posts would violate GDPR and Facebook’s API limits, and formally raised an exception in our backlog (“Out of Scope”).  
2. I designed a lightweight *data‑bridge* using AWS Glue to ingest only the public “likes” counts from the Graph API (rate‑limited at 500 calls/sec) into S3, then transform them with Lambda before loading into Redshift for downstream ML.  
3. To keep costs low and avoid over‑engineering, I chose **Glue + Lambda** (serverless) instead of a full ETL job on EMR, which would have been unnecessary for the 1 M rows we anticipated.  
4. I implemented IAM roles with least privilege and added an audit trail in CloudTrail to satisfy compliance.

**Result**  
The feature was postponed, but the cost‑effective data bridge is ready for future use. We avoided a $12k/month spend on redundant API calls and preserved 99.9% availability of our recommendation service while meeting GDPR requirements.  

*Bar‑raiser cues*: ownership (raised scope issue), dive deep (technical trade‑offs), quantified impact (cost savings, compliance risk mitigation).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
