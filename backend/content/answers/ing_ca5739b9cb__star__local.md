---
qid: ing_ca5739b9cb__star__local
question: 'Explain: Additional Requirements (Out of Scope): — Design a Distributed
  Job Scheduler - System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 351
total_tokens: 596
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:13:54-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we were scaling our daily data‑processing pipeline from 10 M rows to 250 M rows per day. The existing cron‑based scheduler was hitting capacity limits and causing SLA violations for downstream analytics.

**Task** – I had to design a distributed job scheduler that could dynamically allocate worker nodes, guarantee at‑least‑once execution, and provide visibility into job health without adding extra latency to the pipeline.

**Action** – First, I chose Kubernetes with CRONJob resources as the orchestration layer because it already manages pod lifecycle and autoscaling. I built a lightweight microservice (Python/Flask) that exposed a REST API for submitting jobs; each job definition included an execution window, priority flag, and retry policy. For distributed coordination, I leveraged etcd to store job state and used a Redis‑backed queue to hand off tasks to worker pods. I implemented idempotent processing by hashing the input payload and storing the hash in DynamoDB before execution so retries wouldn’t duplicate results. Finally, I added Prometheus metrics (queue length, run duration) and Grafana dashboards for real‑time monitoring.

**Result** – The new scheduler cut SLA breaches from 8 % to 0.4 % and reduced average job start latency by 35 %. It also allowed us to scale workers on demand, saving ~30 % in compute costs during off‑peak hours. I learned that coupling a simple queue with a state store (etcd) gives the robustness of distributed systems while keeping operational overhead low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
