---
qid: ing_1c34653033__aws__local
question: Nothing deployed, no infra alerts - but users say the AI feature "got worse."
  How do you detect and debug silent quality regressions?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 392
total_tokens: 639
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:29:58-05:00'
sources: []
---

**Situation & Task**  
At a SaaS platform, an LLM‑driven recommendation feature “got worse” according to users, yet no deployment logs or infra alerts existed. I owned the investigation and needed to surface hidden regressions.

**Action**  
1. **Instrumentation audit** – added *contextual request IDs* and *prompt‑to‑response latency* metrics in CloudWatch (100 % coverage).  
2. **Data‑driven anomaly detection** – built a Kinesis Data Stream feeding Athena queries that calculate per‑user *F1 score* over the last 24 h. A sliding‑window deviation algorithm flagged a 12 % drop versus baseline.  
3. **Root‑cause isolation** – used AWS XRay to trace request paths; discovered a new caching layer (ElastiCache) was returning stale embeddings because of an invalid key‑expiry policy.  
4. **Remediation & validation** – updated the cache TTL logic, re‑deployed via CodePipeline with Canary strategy, and ran A/B tests for 30 min. F1 score returned to 98 % baseline.

**Result**  
- Reduced mean time to detect (MTTD) regressions from *infinite* to **2 hrs**.  
- Cut unplanned outage cost by **$15k/month** by catching the issue before user churn rose by 3 %.  
- Implemented automated alerts on latency and quality metrics, ensuring future regressions trigger a PagerDuty incident within minutes.

**Leadership Principles**  
- *Customer Obsession*: prioritized rapid detection to protect user experience.  
- *Ownership & Dive Deep*: took full responsibility, dissected the entire request pipeline, and quantified impact before releasing fixes.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
