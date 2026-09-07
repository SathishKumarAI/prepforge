---
qid: ing_36ee0dc41d__aws__local
question: 'Explain: Bandwidth-Delay Product — Latency vs Throughput vs Bandwidth |
  System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 546
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:28:44-05:00'
sources: []
---

**Situation – Problem**  
I was tasked with redesigning the real‑time recommendation pipeline for a global e‑commerce platform that had to serve millions of users per second while keeping latency below 50 ms. The existing batch model delivered high throughput but suffered from unacceptable end‑to‑end delay.

**Task – What I needed to achieve**  
Show how the *Bandwidth–Delay Product (BDP)* governs the trade‑off between **latency**, **throughput**, and **bandwidth** so that we could pick the right network & compute resources, hit a 99.9 % SLA on latency, and keep costs under $200k/month.

**Action – Technical design & AWS services**  
1. **Model inference micro‑service**: Deployed as an *AWS Lambda* layer using *Amazon SageMaker Neo* for edge‑optimized binaries → 30 ms cold start, <10 ms hot.  
2. **Data pipeline**: Use *Kinesis Data Streams* (0.5 Mbps per shard) and *ElastiCache Redis* to buffer feature vectors, keeping the BDP (bandwidth × RTT ≈ 10 MB) satisfied with a single shard.  
3. **Auto‑scaling**: Lambda concurrency tied to Kinesis shard count via *Application Auto Scaling*, ensuring throughput scales linearly while latency stays below 45 ms.  
4. **Cost control**: Spot instances for SageMaker training, on‑demand only for inference; overall cost dropped from $350k/month to $180k/month.

**Result – Quantified impact**  
- Latency reduced from 120 ms (batch) to 42 ms (real‑time).  
- Throughput increased by 4× (from 200k requests/hr to 800k).  
- Monthly cost cut 50%.  

**Learning & Ownership**  
I *owned* the full end‑to‑end stack, performed a deep dive into BDP calculations, and iterated on shard sizing until SLA was met. The bar‑raiser will note my ownership, data‑driven decisions, and ability to learn from initial latency spikes to refine the design.

> **Leadership Principles:** *Customer Obsession* (delivering instant recommendations), *Ownership* (full lifecycle of the pipeline), *Dive Deep* (BDP analysis), *Bias for Action* (rapid prototyping with Lambda/SageMaker Neo).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
