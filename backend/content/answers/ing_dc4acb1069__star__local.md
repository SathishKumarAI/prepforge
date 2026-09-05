---
qid: ing_dc4acb1069__star__local
question: 'Explain: Capacity Planning System Design — Back of the Envelope - System
  Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 328
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:48:27-05:00'
sources: []
---

**Situation**  
I was hired by a SaaS startup that had just hit 250k monthly active users. Their monitoring stack was a monolith; the alerting team could not predict when new features would overwhelm their data pipeline, leading to sporadic time‑outs and SLA breaches.

**Task**  
Design a quick “back‑of‑the envelope” capacity planning system so we could forecast storage, compute, and network needs for each upcoming release within two weeks, without rewriting the entire stack.

**Action**  
I gathered historical metrics from Grafana (latency, request rates) and used a simple linear regression model in Python to project future load. For storage I multiplied projected data ingestion by 1.2x safety margin and applied our retention policy to estimate disk usage. Compute was estimated via CPU‑seconds per request; I benchmarked a sample feature against the current engine and scaled accordingly. I wrapped these calculations into a lightweight Flask API that exposed JSON dashboards, integrating with Slack for alerts. The model was versioned in GitHub Actions so each PR could trigger a capacity preview.

**Result**  
The team adopted the tool within a month; we avoided an over‑provisioning cost of $15k/month and prevented a critical outage during a 5% traffic spike. I learned how to balance statistical rigor with rapid delivery, and the importance of making capacity models transparent and repeatable for non‑technical stakeholders.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
