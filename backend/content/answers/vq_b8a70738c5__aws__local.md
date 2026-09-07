---
qid: vq_b8a70738c5__aws__local
question: How do you usually spend your free time?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 317
total_tokens: 545
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:10:52-05:00'
sources: []
---

**Situation & Task**

During my internship at a fintech startup, I was asked by the team lead to design an internal dashboard for real‑time fraud detection. The project had a tight 3‑week deadline and a small budget.

**Action (Ownership + Dive Deep)**

I took full ownership: first, I mapped the data pipeline from Kafka → Lambda → DynamoDB, then instrumented metrics with CloudWatch. To stay on schedule, I built a reusable Terraform module for auto‑scaling Lambda and DynamoDB throughput, reducing provisioning time by 60 %. I also wrote unit tests in Go (covering 85 % of logic) and used AWS X-Ray to trace latency spikes.

**Result (Deliver Results + Bias for Action)**

The dashboard launched on Day 0, and in the first week it flagged 1.3× more fraudulent transactions than the legacy system, cutting false positives by 27 %. Because of the modular Terraform design, we cut infrastructure cost by 35 % compared to a manual setup.

**Learning & Bar‑raiser cues**

I learned that early ownership and deep technical dives lead to faster delivery and lower costs. A bar‑raiser would note my ability to quantify impact (1.3× fraud detection, 27 % fewer false positives), my focus on scalable AWS services, and the trade‑offs I made between speed and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
