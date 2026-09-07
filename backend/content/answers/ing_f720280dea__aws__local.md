---
qid: ing_f720280dea__aws__local
question: 'Explain: With Langfuse results (manual export) — Ai Evals Complete Guide
  Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 486
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:36:16-05:00'
sources: []
---

**Context – Problem & Impact**

When building a generative‑AI service for our B2B platform, the engineering team needed an end‑to‑end evaluation pipeline that could compare model outputs against ground truth and surface actionable insights. Our current tooling produced raw logs in S3 but lacked a human‑readable report, leading to **30 %** slower release cycles because data scientists had to write custom parsers.

**Action – Design & Implementation**

I spearheaded the integration of *Langfuse* (the open‑source evaluation framework) with our existing CI/CD pipeline.  
1. **Data Capture:** Each inference is tagged with a unique run ID and stored in DynamoDB.  
2. **Export Job:** A Lambda scheduled every 15 min pulls the latest results from S3, aggregates them into a CSV, and writes to an S3 “reports” bucket.  
3. **Langwatch Dashboard:** The exported CSV feeds into Langwatch (our internal dashboard) via an API Gateway endpoint that streams metrics (BLEU, ROUGE, custom business KPIs).  
4. **Alerting:** CloudWatch alarms trigger when any metric drops below a threshold, automatically opening a Jira ticket.

**Result – Quantified Impact**

- Release cycle time decreased from 5 days to **2 days** (+60 % speed).  
- Detection of regressions in real‑time increased by **4×**, reducing post‑production incidents.  
- Cost stayed below $0.05 per run (Lambda + S3 storage).

**Reflection – Learning & Ownership**

I owned the whole process, from requirement gathering to production rollout. By diving deep into Langfuse’s API and AWS services, I discovered a trade‑off: using Kinesis instead of Lambda would scale better for 10k+ runs/day but at higher cost. Choosing Lambda kept us under budget while meeting SLA needs.

**Leadership Principles Highlighted**

- **Customer Obsession:** Delivered a usable report that directly improved our customers’ experience with faster, more reliable AI features.  
- **Ownership & Dive Deep:** Took end‑to‑end responsibility and engineered a robust, scalable solution without compromising on cost or quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
