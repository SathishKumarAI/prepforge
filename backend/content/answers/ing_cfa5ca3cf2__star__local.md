---
qid: ing_cfa5ca3cf2__star__local
question: 'Explain: Design the scheduler for a continuous-batching inference engine.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 351
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:24:16-05:00'
sources: []
---

**Situation** – At my previous startup we launched a real‑time recommendation service that ran on a GPU cluster. The latency SLA was 20 ms, but our inference pipeline was batch‑oriented: every request was queued until the GPU could process 128 vectors at once. This caused a 70 % variance in response times.

**Task** – I had to redesign the scheduler so that we still achieved high throughput from batching while guaranteeing sub‑20 ms latency for each user query, and without over‑provisioning hardware.

**Action** – I implemented a two‑tier scheduler. First, an *early‑exit* queue: any request arriving when the current batch size was < 32 would be immediately sent to a lightweight “small‑batch” kernel that processed up to 32 vectors in ~10 ms. Second, a *dynamic batch window* for larger queues: the scheduler measured GPU utilization every 5 ms and adjusted the target batch size (between 64–128) to keep the queue length under a calculated threshold derived from queuing theory (M/M/1). I used CUDA streams for overlap, and integrated Prometheus metrics so we could auto‑scale the number of worker nodes based on real‑time latency.

**Result** – Latency jitter dropped from 70 % to <15 %, with average response time 12 ms. Throughput increased by 35 % because we avoided idle GPU cycles. I learned that blending deterministic “small‑batch” paths with adaptive batching, backed by live metrics, is key to meeting strict SLAs in inference workloads.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
