---
qid: ing_37b0a19d4c__faang__local
question: 'Explain: Types of Client-Server Architectures — Client-Server Architecture
  | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 556
total_tokens: 796
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:53:31-05:00'
sources: []
---

**1️⃣ Clarify**  
We’re asked: *What are the main types of client‑server architectures used when building machine‑learning systems?*  
Assumptions:  
- “Client” can be a web/mobile app, IoT device, or another service.  
- “Server” hosts ML models, data pipelines, or orchestration services.  
- Focus on architectural patterns rather than specific tech stacks.

**2️⃣ Approach**  
Outline the canonical patterns, give a short use‑case for each, then dive into details (trade‑offs, complexity).

**3️⃣ Depth**

| Architecture | Typical Flow | Strengths | Weaknesses |
|--------------|-------------|-----------|------------|
| **Model‑as‑a‑Service (MaaS)** | Client → REST/GRPC → Inference endpoint (scalable container) | Easy to update models, autoscaling, no client‑side model shipping | Latency from network, higher per‑request cost |
| **Edge‑Inference** | Model packaged on device; occasional sync with central server for updates | Low latency, privacy, works offline | Limited compute, frequent updates needed |
| **Feature‑Store + Prediction API** | Client → Feature service → Inference API | Reuse of engineered features, consistent training/inference data | Adds another hop, requires feature store maintenance |
| **Batch‑Inference + Pull** | Server periodically precomputes predictions; client pulls results | Handles heavy workloads, reduces real‑time latency | Stale predictions, higher storage cost |
| **Hybrid (Server + Edge)** | Critical inference on edge; fallback to server for complex cases | Best of both worlds: low latency + accuracy | Complex orchestration, consistency challenges |

**4️⃣ Edge Cases**  
- Real‑time systems (e.g., autonomous vehicles) can’t tolerate batch lag.  
- Highly regulated domains may forbid sending raw data to cloud (edge needed).  
- Cold‑start problems in MaaS when scaling up new users.

**5️⃣ Optimize & Communicate**  
Explain that the choice hinges on *latency*, *privacy*, *compute budget*, and *model lifecycle*. For a FAANG interview, emphasize trade‑offs: e.g., “If you need 10 ms inference for a mobile game, edge is mandatory; if model updates are frequent, MaaS with CI/CD pipelines wins.” Conclude by noting that many production systems blend these patterns—start with MaaS, move hot paths to edge, and use feature stores to avoid data drift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
