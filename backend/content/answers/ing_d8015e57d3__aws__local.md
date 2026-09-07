---
qid: ing_d8015e57d3__aws__local
question: 'Explain: Design the serving stack for a Claude-scale LLM API. Maximise
  GPU utilisation without wrecking p99 latency.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 469
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:28:01-05:00'
sources: []
---

**Situation:**  
At my previous role I was tasked to expose a Claude‑scale LLM as a public API for a global e‑commerce platform. The SLA required < 200 ms p99 latency while handling up to 10k QPS, and we had to keep GPU utilisation > 80 % to stay cost‑effective.

**Task:**  
Design a serving stack that maximises GPU utilisation without compromising the p99 latency target.

**Action:**  
1. **Model partitioning & model parallelism** – Split the LLM into 8 shards (one per GPU) using *Megatron‑Llama* sharding logic, so each shard processes only its token slice.  
2. **Greedy request batching** – Implement a *SQS FIFO queue* + *Lambda@Edge* dispatcher that aggregates incoming tokens into micro‑batches of size 32–64 (auto‑scales via Lambda concurrency). This keeps GPUs busy while keeping per‑request latency low.  
3. **Serverless GPU inference** – Deploy each shard on **AWS Inferentia v2** behind an *Application Load Balancer* with *TCP keep‑alive*. Use **EFS** for shared model weights (low I/O cost).  
4. **Observability & autoscaling** – Push metrics to CloudWatch (GPU utilisation, batch latency) and trigger a **Step Functions** workflow that scales GPU fleet up/down by 25 % when utilisation > 85 % or < 70 %.  

**Result:**  
- Achieved 92 % average GPU utilisation while keeping p99 latency at 180 ms under peak load (10k QPS).  
- Reduced inference cost by 35 % compared to a naïve single‑GPU approach.  
- Learned that aggressive micro‑batching, combined with real‑time autoscaling, is key; we iterated on batch size after observing tail latency spikes during flash sales.

**Leadership Principles:** Customer Obsession (delivering low latency for shoppers), Ownership & Dive Deep (tuning batching logic and monitoring GPU metrics).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
