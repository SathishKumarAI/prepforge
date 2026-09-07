---
qid: ing_4688114c9a__aws__local
question: 'Explain: Q24: Compare batching strategies for LLM serving'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 606
total_tokens: 837
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:05:07-05:00'
sources: []
---

**Answer (Amazon‑style)**  

I led a cross‑functional team that redesigned our LLM inference pipeline to cut latency by 60 % while keeping cost under $0.10 per request.  
- **Problem (S – Situation):** Our real‑time chatbot served ~5k QPS, but single‑request batching caused >300 ms tail latency and high GPU idle times.  
- **Action (T – Task & A – Action):** I evaluated three batching strategies:  

| Strategy | Description | AWS Services | Scalability | Availability | Cost |
|----------|-------------|--------------|------------|--------------|------|
| **Static Fixed‑Size Batching** | Queue requests, process in fixed 32‑request batches. | SageMaker Endpoint (GPU) + SQS | Easy scaling via autoscaling groups; batch size hard‑coded. | High – endpoint auto‑scales with health checks. | Moderate – GPU idle when <32 requests. |
| **Dynamic Time‑Based Batching** | Accumulate until 10 ms window or 64 reqs, whichever first. | Lambda + SageMaker Runtime | Handles bursty traffic; can trigger additional workers on spike. | Medium – Lambda concurrency limits may throttle during spikes. | Low – GPU used only when needed, but Lambda warm‑up costs. |
| **Adaptive Size Batching with Queue Depth** | Monitor queue depth; increase batch size up to 128 if depth >200. | ECS + Fargate + SQS | Highly elastic; scales containers per batch size. | Very high – ECS tasks can be replaced automatically. | High – More GPU usage but lower tail latency. |

I chose **Dynamic Time‑Based Batching** because it achieved the best trade‑off: 95 % of requests served <200 ms, GPU utilization rose from 35 % to 75 %, and cost dropped by 25 %.  

- **Result (R):** Latency reduced from 450 ms to 280 ms (median), throughput increased from 4.5k to 6.3k QPS, and AWS bill fell $1,200/month.  
- **Learnings:** The key was continuous monitoring of queue depth and batch latency; a simple feedback loop allowed us to pivot quickly if traffic patterns changed.

**Leadership Principles Highlighted:**  
- *Customer Obsession* – we focused on end‑user latency.  
- *Ownership* – I drove the entire redesign, from data collection to deployment.  
- *Dive Deep* – built metrics dashboards and iterated on batch size logic until hitting target SLAs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
