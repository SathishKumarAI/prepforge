---
qid: ing_53b8741c18__star__local
question: 'Explain: Zero downtime cut-over and fast rollback strategy'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 349
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:15:35-05:00'
sources: []
---

**Situation**  
In my last role at a fintech startup, we were deploying a new credit‑risk model that had to replace the existing production model without any service interruption. Our monthly risk score report was generated every night for 5 000 active accounts and even a one‑hour outage would have triggered SLA penalties.

**Task**  
I needed to orchestrate a zero‑downtime cut‑over of the new model while also building an automated fast rollback in case the new version produced anomalous scores or degraded latency.

**Action**  
We used feature flagging (LaunchDarkly) and containerized both models with Docker. The old and new services ran side‑by‑side behind a load balancer that routed 1 % of traffic to the new model for canary testing. I implemented an A/B‑testing script in Python that monitored key metrics—mean absolute error, latency, and error rate—in real time. If any metric exceeded its threshold (e.g., MAE > 0.02 or latency > 200 ms), a webhook triggered a Helm rollback to the previous container image. The deployment pipeline was automated with GitHub Actions and ArgoCD for instant promotion.

**Result**  
The cut‑over completed in under 30 minutes with zero downtime; we saw no SLA violations. Post‑deployment, the new model reduced prediction latency by 35 % and improved accuracy by 4 %. I learned that coupling canary traffic with automated rollback hooks is essential for reliable ML deployments at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
