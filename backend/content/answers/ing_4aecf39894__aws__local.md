---
qid: ing_4aecf39894__aws__local
question: 'Explain: NVIDIA Custom Problems (2026) — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 483
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:14:37-05:00'
sources: []
---

**Situation & Task**  
In 2026 I led a cross‑functional team at AWS building an **NVIDIA Custom Problems** inference service for Faang‑grade workloads (e.g., real‑time recommendation, fraud detection). The goal was to cut model latency by 30 % while keeping cost < 15 % of the legacy on‑prem GPU farm.

**Action & Technical Design**  
1. **Data‑driven requirements:** Benchmarked baseline GPU inference (NVIDIA A100) → 250 ms avg, $0.12/hr per node.  
2. **Architecture:**  
   - *Inference layer:* Amazon SageMaker Endpoint + AWS Lambda for pre/post‑processing.  
   - *Compute:* Spot EC2 G5 instances with Elastic Inference acceleration; autoscaling policy based on CloudWatch metrics (CPU > 70 % → scale up).  
   - *Model serving:* TensorRT‑optimized ONNX models, containerized via ECS Fargate for zero‑downtime deploys.  
3. **Scalability & Availability:** 2‑AZ deployment with Elastic Load Balancer + Global Accelerator; health checks every 10 s; failover to on‑prem GPU cluster if latency > 350 ms.  
4. **Cost trade‑offs:** Spot pricing ~ 60 % cheaper than On‑Demand, but added stateful checkpointing via Amazon EFS (cost $0.03/GB‑month).  

**Result**  
- Latency dropped to 165 ms (−34 %) and cost per inference fell from $0.12 to $0.08 (+33 % savings).  
- SLA uptime 99.95 %, exceeding the 99.9 % target by 0.05 %.  

**Reflection**  
I owned the end‑to‑end pipeline, dove deep into GPU utilization metrics, and iterated on the autoscaling rule after a failed spike test that revealed under‑provisioned Spot capacity. This experience sharpened my ability to balance performance, cost, and reliability—core to AWS’s *Customer Obsession* and *Ownership* principles.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
