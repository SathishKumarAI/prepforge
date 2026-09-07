---
qid: ing_5ab9187b84__aws__local
question: 'Explain: III. Config — The 12-Factor App'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 432
total_tokens: 664
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:50:46-05:00'
sources: []
---

**Answer (Amazon style)**  

**Situation & Task** – While leading a cross‑functional team that migrated our recommendation engine to a cloud‑native architecture, we needed to guarantee *zero‑configuration drift* across dev, test, and prod. The goal was to eliminate “works on my machine” bugs and reduce deployment lead time by 40 %.  

**Action** – I applied the **12‑Factor App** rule “Config: Store config in environment variables”, and built a lightweight config service using **AWS Parameter Store + Secrets Manager**. Each microservice read its settings at start‑up, with immutable JSON files for defaults that could be overridden by environment variables per deployment stage. We wrapped this logic in an open‑source library (open‑sourced on GitHub) to enforce the pattern across all teams.  

- **Scalability** – Parameter Store scales automatically; secrets are cached in EC2/ALB local storage, keeping latency < 5 ms even under 10k concurrent requests.  
- **Availability** – Multi‑AZ replication of SSM and Secrets Manager guarantees 99.999% uptime.  
- **Cost** – We stay within the free tier for most parameters; only high‑frequency secrets (API keys) incur a modest $0.02/month per secret, saving ~30 % vs. hard‑coded values.  

**Result** – After implementation, deployment time dropped from 12 min to 3 min, and production incidents linked to config errors fell by **92 %**. The team adopted the pattern company‑wide, increasing overall delivery velocity.  

*Leadership Principles:* **Customer Obsession** (reliable service for end users) & **Ownership** (team took full responsibility for configuration hygiene).  
*Bar‑raiser cues:* clear ownership, data‑driven impact, depth in design choices, and lessons learned from past failures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
