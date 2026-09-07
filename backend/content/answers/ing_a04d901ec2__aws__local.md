---
qid: ing_a04d901ec2__aws__local
question: 'Explain: Multi-GPU Orchestration — Serving Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 450
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:27:32-05:00'
sources: []
---

**Situation & Task**  
At my previous company we launched a real‑time recommendation engine that required inference on 8 GPU nodes to keep latency under 50 ms for 200k concurrent users. The existing single‑GPU deployment hit CPU bottlenecks and cost $12k/month.

**Action**  
I architected a multi‑GPU orchestration layer using **Amazon EKS + NVIDIA device plugin**, coupled with **SageMaker Neo** to compile models for inference on GPUs.  
* *Scalability*: Autoscaling pods by GPU utilization (80 % threshold) via the Cluster Autoscaler, ensuring 99.9 % availability during traffic spikes.  
* *Cost*: Leveraged Spot Instances and Savings Plans; cut GPU‑hour spend from $12k to **$4.8k/month** (60 % savings).  
* *Reliability*: Implemented health checks on the device plugin, promoted pods only when all GPUs were healthy; added CloudWatch metrics for per‑GPU memory & compute usage.  
* *Observability*: Integrated Prometheus/Grafana dashboards and AWS X-Ray traces to drill down latency spikes.

**Result**  
Latency dropped from 120 ms to **42 ms**, throughput increased by 3×, and revenue grew $1.2M/month due to higher conversion rates.  

**Leadership Principles Reflected**  
*Customer Obsession*: Delivered a faster experience that directly boosted revenue.  
*Ownership & Dive Deep*: Built the end‑to‑end pipeline, from model compilation to GPU health monitoring, and iterated based on real telemetry.

**Bar‑raiser Insight** – The interviewer will look for evidence of ownership (owning the full stack), depth (understanding GPU nuances), quantified impact (cost & latency numbers), and lessons learned (e.g., how we tuned pod thresholds after initial over‑provisioning).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
