---
qid: ing_b68d2f57b1__star__local
question: 'Explain: F4: Cost regression from over-routing to teacher'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 341
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:36:18-05:00'
sources: []
---

**Situation** – At a mid‑size SaaS company, our AI recommendation engine was routing 60% of traffic through an expensive external inference service because we defaulted to the most accurate model for every request. This caused monthly latency spikes and pushed cloud spend from $25K to $45K.

**Task** – I needed to cut that extra $20K/month while keeping overall accuracy above 92%. The goal was a cost‑regression strategy that would selectively route cheaper in‑house models, only falling back to the external “teacher” model when uncertainty was high.

**Action** – First, I built an online confidence estimator using the model’s softmax entropy. Then I added a lightweight “cost regression layer” that predicts expected inference cost per request. Using these two signals, I constructed a dynamic routing policy: if the predicted cost > $0.02 or entropy > 0.3, we send to the teacher; otherwise stay local. I implemented this in our edge service with an A/B test harness, using Redis for real‑time decision caching and Grafana dashboards for monitoring.

**Result** – Within two weeks of rollout, cloud spend dropped by 42% (from $45K to $26K/month) and latency improved from 350 ms to 210 ms. Accuracy stayed at 93%. I learned that coupling cost regression with confidence metrics can turn a brute‑force routing problem into an efficient, data‑driven solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
