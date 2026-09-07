---
qid: ing_eafad82c35__aws__local
question: You have hundreds of millions of fleet miles. How do you find and use the
  rare scenarios that matter?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 431
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:09:10-05:00'
sources: []
---

**Situation & Task (Ownership + Customer Obsession)**  
I was tasked with extracting the *rare* high‑impact incidents from a fleet that logged 350 M miles/year—events that could drive safety upgrades and reduce $12 M in annual claims.

**Action (Dive Deep + Bias for Action)**  
1. **Data ingestion** – streamed raw telemetry into Amazon Kinesis Data Streams, auto‑scaling to 10 Gbps.  
2. **Feature enrichment** – used Lambda to join GPS, sensor, and weather feeds, tagging each event with a risk score.  
3. **Anomaly detection** – deployed SageMaker’s *Amazon Lookout for Metrics* on the enriched stream; set a threshold of 4‑σ from the mean.  
4. **Alert & triage pipeline** – triggered an SNS notification to a Slack channel, and stored flagged records in Amazon S3 (object size ~5 KB).  
5. **Analysis loop** – built a Jupyter notebook on SageMaker Studio that aggregated rare events into heat‑maps; identified 12 hotspots accounting for 68% of severe incidents.

**Result (Deliver Results)**  
Within 90 days, the pipeline reduced manual triage time by 80%, surfaced 1,200 actionable scenarios, and enabled a $4 M reduction in projected claims. The solution cost <$2k/month, running on spot instances for training and serverless compute for inference.

> **Bar‑raiser check**  
> *Ownership:* I owned the full end‑to‑end flow from ingestion to business impact.  
> *Dive Deep:* Leveraged AWS analytics & ML services to surface statistically significant anomalies.  
> *Quantified Impact:* 68% of severe incidents captured; $4 M claim savings.  
> *Learning from Failure:* Initial false‑positive rate was 15%; iterative feature tuning reduced it to <3%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
