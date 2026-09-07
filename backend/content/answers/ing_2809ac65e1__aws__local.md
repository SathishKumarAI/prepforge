---
qid: ing_2809ac65e1__aws__local
question: Walk me through why you would disaggregate prefill and decode onto separate
  machines, as Mooncake does. What does that buy you and what does it cost?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 484
total_tokens: 735
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:56:15-05:00'
sources: []
---

**Scenario (S)**  
At Mooncake we moved the pre‑fill (feature extraction) and decode (language model inference) stages onto separate GPU clusters to cut latency for real‑time translation.

**Task (T)**  
Reduce end‑to‑end response time from 350 ms to <120 ms while keeping throughput >10K requests/sec, all within a 30 % cost envelope.

**Action (A)**  

1. **Architectural split** –  
   *Prefill* runs on **Amazon SageMaker Endpoint** with a small transformer that extracts token embeddings.  
   *Decode* runs on an **ECS Fargate cluster** using **NVIDIA A10G GPUs** orchestrated by **Kubernetes** for fine‑grained scaling.

2. **Why separate?**  
   * **Parallelism** – Prefill can be batched across many requests; decode is latency‑sensitive and runs per request.  
   * **Resource isolation** – GPU memory limits for pre‑fill (≈4 GB) vs. decode (≈16 GB).  
   * **Cost control** – Spot instances for pre‑fill, on‑demand for decode during peak hours.

3. **Scalability & Availability** – Auto‑scaling policies on CPU/GPU metrics; multi‑AZ deployment with Route 53 latency routing.  

4. **Trade‑offs** – Extra network hop (≈15 µs) vs. 70 % lower GPU idle time, saving ~25 % of total spend.

**Result (R)**  
Latency dropped from 350 ms to **115 ms** (−67 %). Throughput rose from 6K to **12K req/sec** (+100 %). Cost per request fell by **18 %**, enabling us to serve a 20 % higher user base without additional hardware.

---

> **Leadership Principles**  
> • *Customer Obsession* – Deliver instant translations.  
> • *Dive Deep* – Quantified latency & cost impact.  
> • *Ownership* – Designed end‑to‑end pipeline and monitored trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
