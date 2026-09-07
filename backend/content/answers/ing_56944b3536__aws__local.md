---
qid: ing_56944b3536__aws__local
question: 'Q: Why is Tensor Parallelism preferred over Pipeline Parallelism for low-latency
  serving?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 498
total_tokens: 736
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:42:02-05:00'
sources: []
---

**Answer (Amazon style)**  

During a recent redesign of our LLM‑inference service for the Alexa Voice Service, I led an experiment to reduce per‑request latency from **120 ms to under 80 ms** while keeping cost ≤ 15 %.  

| Step | What I did | Result |
|------|------------|--------|
| **S – Situation** | Our model (13B params) was split across two racks using *pipeline parallelism*; each request had to wait for all stages, causing a 30‑ms queuing delay. |
| **T – Task** | Replace the pipeline with *tensor parallelism* on GPU instances (p4d.24xlarge) and evaluate latency & cost. |
| **A – Action** | • Re‑architected the inference graph to shard tensors across GPUs using DeepSpeed ZeRO‑2. <br>• Deployed via SageMaker Multi‑Model endpoints, auto‑scaling on CPU/GPUs. <br>• Instrumented with CloudWatch metrics and A/B test traffic split 70/30. |
| **R – Result** | *Latency dropped to 72 ms* (≈ 40 % improvement). <br>*Cost per inference fell by 12 %* due to fewer idle GPUs. <br>Customer satisfaction scores rose from 4.2 to 4.6/5. |

**Why tensor over pipeline for low‑latency?**  
- **Parallelism granularity:** Tensor shards allow all GPUs to work simultaneously on a single request, eliminating stage serialization.  
- **Reduced inter‑GPU traffic:** Pipeline requires sequential data transfer between stages; tensor splits keep communication local (NVLink), lowering round‑trip time.  
- **Scalability & fault tolerance:** A failure in one tensor shard can be recovered locally without stalling the entire pipeline.  

**AWS services used:** SageMaker, Elastic Inference, CloudWatch, Auto Scaling.  

**Bar‑raiser cues I met:** ownership of end‑to‑end performance, deep dive into GPU communication patterns, quantifiable impact on latency/cost, and iteration after a failed A/B test (we learned to monitor inter‑GPU bandwidth early).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
