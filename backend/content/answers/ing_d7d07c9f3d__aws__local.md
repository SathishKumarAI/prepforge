---
qid: ing_d7d07c9f3d__aws__local
question: How would you A/B test a prompt change safely in production?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 454
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:27:28-05:00'
sources: []
---

**Situation & Task**  
At my previous role I had to evaluate a new prompt that could potentially increase user engagement for our chatbot. The risk was high: an ineffective prompt would degrade satisfaction scores (CSAT) and cost us $10K/month in compute.

**Approach (A/B Test Design)**  
1. **Feature flag + Canary** – Use *AWS AppConfig* to roll the new prompt out to 5 % of traffic, backed by a *Lambda@Edge* rewrite that injects the prompt only for flagged users.  
2. **Data capture** – Store each interaction in *DynamoDB* with a `variant` field; stream to *Kinesis Data Firehose* → *S3* for batch analytics and real‑time metrics in *CloudWatch Dashboards*.  
3. **Statistical trigger** – Run an automated hypothesis test (t‑test) via *AWS Glue* jobs on the S3 data every 6 h; if p < 0.01 and lift >2 % in CSAT, roll out to 50 %, else rollback.

**Result**  
Within 48 h we validated a +3.7 % lift in average session length and a 1.4 % drop in error rate (p = 0.002). The incremental compute cost was $120/month – under the $10K budget.  

**Leadership Principles Highlighted**  
- **Customer Obsession**: Directly measured CSAT impact.  
- **Ownership & Dive Deep**: Built end‑to‑end observability, wrote custom test harnesses, and tuned thresholds after a prior failure where an unflagged rollout caused a 5 % spike in latency.

**Bar‑raiser takeaways** – Clear ownership of data pipelines, quantified ROI, rapid rollback path, and learning from past incidents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
