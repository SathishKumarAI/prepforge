---
qid: ing_a54172da4a__aws__local
question: 'Explain: ── Per-frame prompt ──────────────────────────────────────────────────────────'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 456
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:40:43-05:00'
sources: []
---

**Situation (S)**  
At my previous role I led a video‑analytics product that needed to generate captions for every frame in real‑time surveillance footage. The requirement was “per‑frame prompt”: each frame must be processed, queried against a prompt model, and returned with an inference within 200 ms.

**Task (T)**  
Design a scalable pipeline that delivers <200 ms latency per frame while keeping cost under $0.05/GB of video processed, and ensuring high availability for a global customer base.

**Action (A)**  

1. **Data ingestion** – Use *Amazon Kinesis Video Streams* to stream raw footage to an *S3* archive.  
2. **Frame extraction** – Trigger an *AWS Lambda* on every key‑frame event; convert the frame to JPEG and publish a message to an *Amazon SQS* queue.  
3. **Inference** – Spin up an *ECS Fargate* cluster running a containerized PyTorch model (ResNet‑50 + prompt head). Use *Application Load Balancer* with target group health checks for 99.9 % availability.  
4. **Caching & batching** – Deploy *Amazon ElastiCache Redis* to store the last 10 000 prompt embeddings, reducing inference time by ~30 %.  
5. **Observability** – Instrument with *AWS CloudWatch* metrics (latency, error rate) and *X-Ray* for deep dive.

**Result (R)**  

- Achieved an average latency of **145 ms/frame** (≤200 ms target).  
- Cost per GB dropped to **$0.038**, 20 % below budget.  
- Uptime hit **99.97 %** over a 6‑month period, surpassing SLA.  

*Learnings*: Initial design underestimated frame‑extraction overhead; adding Lambda concurrency control resolved the bottleneck. The bar‑raiser praised my ownership of end‑to‑end latency and the use of AWS services to meet strict cost/availability targets.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
