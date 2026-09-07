---
qid: ing_91fd324cc1__aws__local
question: Design the parallelism strategy for serving a 405B-parameter dense model.
  TP, PP, EP - what goes where and why?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 696
total_tokens: 943
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:56:26-05:00'
sources: []
---

**Situation & Task (S)**  
I was tasked with deploying a 405 B‑parameter dense transformer for real‑time recommendation scoring in an e‑commerce platform that serves ~10 M users per day. The model must return predictions within 100 ms while keeping infra costs under $0.02/user/day.

**Action (A)**  

| Parallelism | Where it lives | Why |
|-------------|----------------|-----|
| **Tensor Parallelism (TP)** | **In‑memory on GPU shards** – each shard holds a slice of weight matrices; we use `torch.distributed` + NCCL. | TP keeps the model width constant, minimizing inter‑node traffic. With 32 GB GPUs, a 405B model requires ~120 shards; this fits into our GPU fleet without extra nodes. |
| **Pipeline Parallelism (PP)** | **Across 8 micro‑batch stages on separate node groups** – each stage runs on its own set of TP shards. | PP reduces per‑stage latency by overlapping compute and communication, letting us keep the 100 ms SLA while still loading the entire model. |
| **Epoch / Sequence Parallelism (EP)** | **On the inference server layer** – we batch queries into sequences of length 64; EP is implemented via a lightweight async queue that groups similar requests. | EP amortizes the cost of forward passes across many users, improving GPU utilisation from ~60 % to >90 %. |

**Result (R)**  
- Latency dropped from 250 ms to **<100 ms** per request.  
- GPU utilisation rose from 58 % to **92 %**, cutting the cost per inference by **35 %** (~$0.015 vs $0.023).  
- The system handled a traffic spike of 3× during Black Friday without any outages.

---

### Technical/Design Rationale

* **AWS Services** – EC2 G5 instances (NVIDIA A10G) for TP shards, ECS Fargate for PP orchestration, and SQS + Lambda for EP batching.  
* **Scalability** – TP scales linearly with GPU count; PP allows us to add more stages if traffic grows beyond 15 M requests/day.  
* **Availability** – Each TP shard is replicated in an Auto Scaling Group; PP stages are stateless, so failover is instant.  
* **Cost Trade‑offs** – Adding EP avoided the need for extra GPU nodes that would have increased memory pressure and network costs.

---

### Bar‑Raiser Lens

| Leadership Principle | What I Showed |
|----------------------|---------------|
| **Ownership** | Took full responsibility for design, cost modelling, and post‑launch monitoring. |
| **Dive Deep** | Benchmarked TP vs PP configurations; profiled GPU memory and network traffic to justify shard counts. |
| **Bias for Action** | Deployed a prototype in 48 h, iterated based on real traffic data. |
| **Deliver Results** | Met SLA and cost targets while scaling to peak demand. |

> *Learned:* Early assumption that PP alone would meet latency was wrong; integrating EP provided the necessary throughput boost without extra hardware.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
