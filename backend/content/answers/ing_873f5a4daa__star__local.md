---
qid: ing_873f5a4daa__star__local
question: 'Explain: 13 February 2025 update: Live demo results'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 359
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:03:03-05:00'
sources: []
---

**Situation** – In early February 2025 our team rolled out a new conversational‑AI model to the internal product line. The company’s marketing deck promised “real‑time context retention” and we needed to prove it in a live demo before the investor conference on March 1.

**Task** – My goal was to design a scripted demo that showcased the model’s ability to remember user intent across multiple turns, while keeping latency under 200 ms per response. We had to record quantitative metrics (response time, accuracy) and qualitative feedback from at least three stakeholders in real‑time.

**Action** – I set up an end‑to‑end pipeline: a Dockerized inference server on AWS Lambda with GPU‑accelerated containers, and a front‑end using React‑Query to cache previous turns. I scripted five user scenarios (booking travel, troubleshooting software, ordering office supplies, etc.) and used Prometheus + Grafana dashboards to capture latency and accuracy live. During the demo I logged each utterance, highlighted the model’s memory graph, and ran an A/B test against the legacy system to show a 35 % drop in response time and a 12 % lift in user satisfaction scores.

**Result** – The demo recorded an average latency of 158 ms, accuracy of 93 %, and received a 4.8/5 stakeholder rating. Post‑demo, we were approved to deploy the model company‑wide, and I learned how critical real‑time monitoring is for convincing executives about AI performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
