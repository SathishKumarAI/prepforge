---
qid: ing_5abd4e99cb__aws__local
question: 'Explain: Your offline evals improved but the online metric dropped after
  launch. Walk me through the investigation.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 427
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:50:46-05:00'
sources: []
---

**Situation:**  
After launching a new recommendation engine, our offline A/B test showed a 12 % lift in click‑through rate (CTR). However, the live dashboard reported a 4 % drop in CTR within the first week.

**Task:**  
Own the investigation, isolate the root cause, and deliver a fix that restores online performance without compromising scalability or cost.

**Action:**  
1. **Data‑driven hypothesis testing** – pulled per‑segment logs from CloudWatch and Kinesis Data Streams to compare predicted vs. actual CTR distributions (AWS Athena + QuickSight).  
2. **Feature drift analysis** – used SageMaker Feature Store to compute cosine similarity between training features and production data; found a 35 % shift in user‑interest vectors due to a recent campaign.  
3. **Model retraining pipeline** – updated the training job on SageMaker, added a “drift guard” Lambda that triggers re‑training when similarity < 0.6.  
4. **Canary deployment** – staged rollout via CodeDeploy + AppConfig, monitored latency in CloudWatch; no increase observed.  

**Result:**  
Within 48 h, online CTR rebounded to +9 % above baseline, and the drift guard cut future re‑train costs by ~15 %. The incident report was shared with the data science squad, leading to a new “data quality” metric in our CI pipeline.

**Leadership Principles Anchored:**  
- **Ownership & Bias for Action** – I led end‑to‑end debugging and rapid deployment.  
- **Dive Deep** – Quantified drift metrics, leveraged AWS analytics tools, and iterated on model retraining.

*Bar‑raiser cues:* clear ownership, deep technical dive, quantified impact, and learning loop (drift guard).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
