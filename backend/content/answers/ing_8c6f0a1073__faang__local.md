---
qid: ing_8c6f0a1073__faang__local
question: 'Explain: Failure — Client-Server Architecture | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 530
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:10:47-05:00'
sources: []
---

**Clarify**  
The interviewer wants an explanation of why a *client‑server* architecture can fail in ML systems. I’ll assume we’re discussing end‑to‑end ML pipelines (data ingestion → training → inference) deployed on a typical SaaS stack.

**Approach**  
1. Identify the classic client‑server flow.  
2. List failure modes tied to that flow.  
3. Connect each mode to ML‑specific constraints (latency, data volume, model drift).  
4. Suggest mitigation patterns briefly.

**Depth**  

| Failure | Root Cause in Client‑Server | ML Impact |
|---------|-----------------------------|-----------|
| **Scalability bottleneck** | Single inference endpoint becomes a queue; horizontal scaling is hard due to stateful sessions. | Slow predictions, degraded user experience. |
| **Data pipeline latency** | Clients push raw data → server aggregates → batch‑train; long refresh cycles. | Models stale, poor performance. |
| **Model version drift** | Server stores one model per endpoint; clients unaware of new versions until redeployed. | Inconsistent predictions across clients. |
| **Security & privacy** | Sensitive data sent to central server for training; risk of breach or compliance violation. | Regulatory penalties, loss of trust. |
| **Network partition** | Clients lose connectivity → no inference available. | Service outages in edge‑critical applications. |

Mitigations:  
- Adopt *model serving microservices* with autoscaling (K8s + GPU nodes).  
- Use *online learning* or federated updates to keep models fresh without central batching.  
- Implement *feature stores* and *model registries* for version control.  
- Edge inference or model distillation reduces round‑trips.

**Edge Cases**  
- High‑frequency trading: latency < 1 ms → client‑side inference mandatory.  
- IoT with intermittent connectivity: fallback local cache of last‑good model.  
- GDPR regions: on‑device preprocessing before upload.

**Optimize & Communicate**  
Explain that the core failure is treating ML as a monolithic “server” rather than a distributed, versioned, and privacy‑aware service mesh. Highlight trade‑offs (compute vs latency) and recommend an architecture combining **edge inference**, **model registry**, and **feature store** to achieve resilience. Conclude by stressing continuous monitoring of drift and queue lengths to trigger autoscaling or retraining automatically.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
