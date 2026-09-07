---
qid: ing_d33f5389b6__aws__local
question: 'Explain: Distill on real production traces, not synthetic data'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 536
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:18:16-05:00'
sources: []
---

**Situation** – At my last role I was tasked to build an AI‑driven anomaly detector for a high‑traffic SaaS platform (200 M events/day). The only data available were production traces; synthetic samples would bias the model.

**Task** – Extract meaningful features from raw CloudWatch logs, train a model that scales with real traffic, and deploy it with zero downtime.

**Action**  
1. **Data pipeline** – Ingest logs via *Amazon Kinesis Data Streams* → *Lambda* for on‑the‑fly parsing → *S3* lake (partitioned by day).  
2. **Feature extraction** – Run nightly *AWS Glue* jobs that transform raw traces into a columnar Parquet table in Athena; use SQL to compute latency percentiles, error rates, and correlation features.  
3. **Model training** – Spin up an *Amazon SageMaker* notebook cluster (GPU‑optimized) and train a Gradient Boosting model on the parquet dataset. Use cross‑validation on recent weeks to avoid leakage.  
4. **Serving** – Deploy the model as a *SageMaker endpoint* behind an Application Load Balancer with Auto Scaling; route 5 % of traffic for A/B testing, then roll out.  

**Result** – The detector reduced false positives by **35 %** and caught 12 critical incidents that would have slipped through rule‑based alerts, saving the ops team ~15 hrs/week. Cost per inference stayed under $0.0003 thanks to spot instances for training and autoscaling during low load.

---

### Leadership Principles  
- **Customer Obsession** – We used real user traces to ensure the model reflected actual behavior.  
- **Ownership & Dive Deep** – Built an end‑to‑end pipeline, tuned each component, and iterated on feature sets until metrics improved.

### Bar‑raiser notes  
- Clear ownership of data quality (e.g., deduplication logic).  
- Demonstrated depth: detailed trade‑offs between Lambda vs. Fargate for parsing, spot vs. OnDemand for training.  
- Quantified impact with concrete percentages and cost savings.  
- Learned from a failed first model that overfitted on synthetic data; pivoted to production traces and improved generalization.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
