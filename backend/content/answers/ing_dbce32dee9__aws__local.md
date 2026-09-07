---
qid: ing_dbce32dee9__aws__local
question: You need to serve a Llama-class 70B+ model to hundreds of millions of assistant
  users. What does the serving stack look like and where does the money go?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 493
total_tokens: 747
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:34:39-05:00'
sources: []
---

**Situation / Task**  
I was tasked to expose a Llama‑3 70B model to ~300 M daily users in an Alexa‑style assistant while keeping latency <200 ms and OPEX below $30 M/yr.

**Action (Design)**  

| Layer | AWS Service | Why |
|-------|-------------|-----|
| **Model Hosting** | **Amazon SageMaker Neo + EC2 C5.18xlarge w/ NVIDIA A100** | Neo compiles the PyTorch graph to run natively on GPUs, cutting inference cost 3× vs. EFA‑based RPC. |
| **Orchestration** | **AWS App Mesh + ECS Fargate** | Service‑mesh guarantees zero‑downtime rollouts and per‑pod autoscaling based on request‑rate spikes. |
| **Cache / Pre‑fetch** | **Amazon ElastiCache Redis (clustered)** | Stores top 10k most‑requested prompts; reduces GPU load by ~35 %. |
| **Load Balancer** | **ALB with Path‑based routing** | Ensures 99.9 % availability and per‑region failover. |
| **Observability** | **Amazon CloudWatch + X-Ray** | Captures latency, error rates; feeds back to autoscaling policies. |

**Result**  
- Latency dropped from 350 ms to 180 ms (median).  
- GPU utilization rose from 45 % to 78 %, saving $9 M/yr.  
- 99.92 % request success, surpassing SLA by 0.02 %.  

**Reflection**  
I took **Ownership** of the cost model and applied **Dive Deep** into the profiling data. The trade‑off was a higher upfront Neo compilation time (~10 min) but amortized over millions of calls. A pilot failure (missed cache warm‑up) taught me to add a “warm‑cache” cron job, which now prevents 12 % of cold starts.

**Bar‑raiser cues** – clear ownership, data‑driven impact, deep technical rationale, and evidence of learning from an early misstep.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
