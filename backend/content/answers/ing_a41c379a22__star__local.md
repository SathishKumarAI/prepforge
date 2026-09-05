---
qid: ing_a41c379a22__star__local
question: How do we detect and prevent abuse? — Urlshorteningservicetinyurl
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 331
total_tokens: 574
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:01:43-05:00'
sources: []
---

**Situation** – When I joined the team at TinyURL, we were hit with a spike of malicious link usage: phishing campaigns and spam bots were abusing our free tier, inflating traffic by 35% in just two weeks and risking user trust.

**Task** – My goal was to build an automated system that could flag suspicious URLs in real time, block abuse before it reached users, and do so without impacting the 99.9% of legitimate links.

**Action** – I designed a lightweight ML pipeline: first, we extracted features from each shortened URL (entropy, domain age, click‑rate patterns) and enriched them with external threat intel APIs. We trained an XGBoost model on a balanced dataset of known malicious vs. benign URLs, tuning for high precision to avoid false positives. The model was wrapped in a Flask microservice behind our load balancer; it scored each request in <5 ms. For enforcement we added a rule‑engine that throttled or auto‑deleted links scoring above 0.8, and sent alerts to the security ops team.

**Result** – Within three weeks of deployment, malicious click traffic dropped by 92%, while legitimate link latency increased by less than 2 ms. The system also reduced manual triage effort by 70%. I learned that combining domain‑level signals with real‑time ML inference can effectively protect a high‑scale service without hurting user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
