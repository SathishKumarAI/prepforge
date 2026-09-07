---
qid: ing_6d24d6d5fc__aws__local
question: How would you A/B test an LLM-powered feature, and how does it differ from
  testing a ranking-model change?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 457
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:30:40-05:00'
sources: []
---

**Situation & Task**  
At my previous role I led the rollout of an LLM‑powered “smart reply” feature for our email client. The goal was to measure user engagement against a baseline ranking model that suggested replies from a static knowledge base.

**Action (Design & Execution)**  
1. **Experiment Definition** – Split traffic 50/50 using Amazon CloudFront + Lambda@Edge to inject the LLM response into the UI for the treatment group, while the control received the ranking‑model reply.  
2. **Metrics** – Primary KPI: *Reply Success Rate* (user clicks + time spent). Secondary: *CPU cost per session* and *latency*.  
3. **Data Pipeline** – Captured logs in Kinesis Data Streams → processed by AWS Glue to enrich with user segment tags, then stored in Redshift for analysis.  
4. **Statistical Significance** – Used Bayesian A/B testing (Bokeh + PyMC) to determine 95 % probability that the LLM improved success rate before rollout.

**Result**  
- 12 % lift in reply success (from 3.2 % → 3.6 %) with only a 4 % increase in average latency.  
- Cost per user session rose by $0.03, but overall revenue grew $1.8M monthly due to higher engagement.

**Learnings & Bar‑raiser Notes**  
- **Ownership**: I owned the end‑to‑end pipeline and handled rollback logic if latency exceeded SLA.  
- **Dive Deep**: Identified that most cost came from GPU inference; we later switched to SageMaker Edge with a 30 % cheaper spot instance.  
- **Quantified Impact**: Reported clear metrics tied to business outcomes.  
- **Learning from Failure**: Early tests under‑estimated cold‑start latency, so we introduced caching in ElastiCache for the LLM embeddings.

> *Leadership Principles*: Customer Obsession, Ownership, Dive Deep, Deliver Results.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
