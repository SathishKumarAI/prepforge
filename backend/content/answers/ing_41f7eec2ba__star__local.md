---
qid: ing_41f7eec2ba__star__local
question: 'Explain: What FDE actually is - day-to-day, vs. sales engineering, vs.
  consulting'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 391
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:40:36-05:00'
sources: []
---

**Situation** – At my last company we were rolling out a new recommendation‑engine platform for a large retail client. The model had been validated in our lab, but the customer’s on‑premises infrastructure was a mix of legacy Hadoop clusters and newer Kubernetes pods.  

**Task** – I was appointed as the Field Delivery Engineer (FDE) to bridge the gap between the data science team and the client’s IT ops: ensure the AI model ran reliably at scale, meet SLAs, and provide post‑deployment support.

**Action** – First, I mapped the client’s environment with Ansible, built a containerized pipeline that wrapped the TensorFlow inference service, and wrote custom metrics collectors to feed back into Prometheus. I coordinated daily stand‑ups with the sales engineering group (who had scoped the contract and promised 99.9% uptime) and with the consulting team that was doing business‑process mapping. I also set up a blue‑green rollout to avoid downtime, automated rollback scripts, and ran load tests to validate latency targets.  

**Result** – The deployment went live two days ahead of schedule, maintained <200 ms inference latency under peak traffic, and achieved 99.95% uptime in the first month—exceeding the sales contract by 0.05%. I learned that an FDE must juggle technical ops, client expectations, and cross‑team communication, unlike a pure sales engineer who focuses on pre‑sale demos or a consultant who stays at the strategy layer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
