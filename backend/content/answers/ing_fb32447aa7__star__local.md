---
qid: ing_fb32447aa7__star__local
question: 'Explain: 2.5 System Design: Implement a GPU Scheduling System Using Credits'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 372
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:51:14-05:00'
sources: []
---

**Situation** – At my previous startup we launched a cloud‑based AI platform that allowed data scientists to spin up GPU instances on demand. By the third month of launch, our queue times were averaging 12 minutes for a single NVIDIA A100 and the billing system was struggling with over‑provisioning because users kept running out of credits mid‑job.

**Task** – I was tasked with designing a fair, credit‑based GPU scheduler that would: (1) enforce per‑user quotas, (2) avoid resource starvation, and (3) integrate cleanly with our existing REST API and billing pipeline.

**Action** – I chose to implement a token‑bucket algorithm stored in Redis. Each user had a “credit” counter refreshed hourly via a scheduled Lambda. When a job was submitted, the scheduler checked credits, reserved GPU slots in a priority queue (using a min‑heap keyed by remaining credits), and used Kubernetes Jobs with node affinity to pin pods to GPU nodes. I added an exponential backoff for low‑credit users and exposed an API endpoint `/credits/remaining` so clients could pre‑check feasibility. The system also logged credit usage in Prometheus, triggering alerts when a tenant hit 90% of their allotment.

**Result** – Queue times dropped from 12 minutes to under 2 minutes for 80% of jobs, while the credit system prevented accidental over‑usage and cut our GPU utilization by 15%. I learned how to balance strict quota enforcement with user experience, and that a lightweight in‑memory scheduler can scale with minimal latency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
