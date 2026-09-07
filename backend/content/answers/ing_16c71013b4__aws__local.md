---
qid: ing_16c71013b4__aws__local
question: 'Explain: Shared Memory — Inter-Process Communication on Linux'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 449
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:17:09-05:00'
sources: []
---

**Situation / Task**  
At my previous role I led a team that built an on‑prem ML inference pipeline for real‑time fraud detection. The model was deployed in two Docker containers (pre‑processor and scorer) running on the same EC2 instance. We needed low‑latency data exchange between them without hitting the network stack, while keeping the architecture cost‑effective and highly available.

**Action**  
I chose **POSIX shared memory (shm_open + mmap)** as our IPC mechanism because it bypasses user‑space copies and offers deterministic latency (< 200 µs). I wrapped the API in a lightweight C++ library that exposed a lock‑free ring buffer, so both processes could push and pop feature vectors concurrently. To satisfy **Ownership** and **Dive Deep**, I:

1. Benchmarked shared memory vs sockets vs AWS SQS, measuring throughput (10k requests/sec) and latency.
2. Added a health‑check service on the host that monitors the shared segment size; if it exceeds 80 % we trigger auto‑scaling of the EC2 instance family (e.g., T3 to M5).
3. Integrated CloudWatch metrics (`shm_usage_percent`, `inference_latency`) and set alarms.

**Result**  
Latency dropped from 1.2 ms (TCP) to 0.25 ms, a **79 % improvement**, while CPU usage fell by 35 %. The auto‑scale policy kept costs under $150/day versus the previous $250/day when we used EC2 spot instances with network IPC.

**Reflection**  
I learned that “Bias for Action” can be risky; my first implementation had a race condition that caused occasional crashes. I fixed it by adding a lightweight spinlock and added unit tests, which reduced failures to zero in production. This experience reinforced the value of **Customer Obsession**—every latency win directly improved user trust in our fraud alerts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
