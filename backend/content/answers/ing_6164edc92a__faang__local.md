---
qid: ing_6164edc92a__faang__local
question: 'Explain: When Local Beats Cloud (and When It Does Not)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 490
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:30:22-05:00'
sources: []
---

**Local vs. Cloud for AI inference**

| Situation | Prefer Local | Prefer Cloud |
|-----------|--------------|-------------|
| **Latency‑critical** | Edge devices (autonomous cars, AR/VR) | Batch jobs with no real‑time requirement |
| **Bandwidth constraints** | Offline or limited‑connectivity environments | High‑speed backbone networks |
| **Data privacy / compliance** | Sensitive data that cannot leave premises | Encrypted transport + compliant cloud regions |
| **Resource control** | Custom hardware (TPU, FPGA) tuned for a model | Managed services with auto‑scaling |
| **Cost predictability** | Fixed capital spend on GPUs | Pay‑as‑you‑go, avoid overprovisioning |

---

### 1️⃣ Clarify
- *What AI workload?* e.g., image classification vs. language generation.  
- *Latency target?* <10 ms for real‑time, >1 s acceptable otherwise.  
- *Data sensitivity and regulatory rules?* GDPR, HIPAA.

### 2️⃣ Approach
1. **Profile**: Measure model size, FLOPs, memory.  
2. **Benchmark**: Run on edge hardware vs. cloud GPU/TPU.  
3. **Decision tree**: If latency < threshold *and* data can stay local → go edge; else → cloud.

### 3️⃣ Depth
- **Edge inference** uses quantized models (INT8) and TensorRT/TFLite, reducing 10–50× memory and ~5× latency.  
- **Cloud inference** benefits from elastic scaling: spot instances for cost, multi‑region replication for redundancy.  
- Security: use VPC, IAM, and encrypted at rest.

### 4️⃣ Edge Cases
- *Model updates*: push OTA on edge vs. CI/CD in cloud.  
- *Hardware failure*: fallback to cloud if local GPU crashes.  
- *Network partition*: hybrid sync strategy.

### 5️⃣ Optimize & Communicate
Explain trade‑offs: **latency + privacy** vs. **cost & maintenance**. Use a simple decision diagram during the interview and emphasize that the choice is data‑driven, not opinionated. This showcases structured thinking and clear communication—key FAANG signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
