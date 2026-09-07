---
qid: ing_2c55ae77f2__faang__local
question: 'Explain: your capacity is above your provision capacity'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 412
total_tokens: 644
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:26:15-05:00'
sources: []
---

**Clarify**  
The interviewer asks me to explain the situation *“your capacity is above your provision capacity.”* I interpret this as a resource‑management scenario: the actual workload (capacity) exceeds what we have allocated or budgeted for (provision). I’ll confirm that we’re talking about compute/compute‑time, storage, or ML model serving resources.

**Approach**  
1. Quantify both sides: measure current usage vs provisioned limits.  
2. Identify the root cause—peak traffic, inefficient models, or under‑provisioning.  
3. Mitigate by scaling (horizontal/vertical), autoscaling, or optimizing the model pipeline.  

**Depth**  
- *Monitoring*: Use Prometheus/Grafana to capture CPU/memory, request latency, GPU utilization.  
- *Autoscaling*: Kubernetes HPA or GKE Cluster Autoscaler for containers; SageMaker endpoint auto‑scaling for inference.  
- *Model Optimization*: Quantization (int8), pruning, knowledge distillation reduce FLOPs and memory.  
- *Cost vs Performance*: Compute cost = $ per hour × hours used; balance against SLA latency targets.  
- *Failure Modes*: If provision is static, a 20% traffic spike can cause OOM or request timeouts.

**Edge Cases**  
- Sudden flash crowds (e.g., product launch).  
- Model drift causing longer inference times.  
- Multi‑tenant workloads sharing the same cluster.  
Test by simulating load with Locust and verifying autoscaler triggers.

**Optimize & Communicate**  
I’d present a concise dashboard snapshot, explain how scaling policies react, and outline an SLA impact matrix. Emphasize that proactive monitoring + model ops (MLOps) pipelines allow us to keep “capacity above provision” without over‑provisioning, thus saving cost while meeting performance targets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
