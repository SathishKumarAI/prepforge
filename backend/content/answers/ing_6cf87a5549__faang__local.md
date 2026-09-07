---
qid: ing_6cf87a5549__faang__local
question: 'Explain: Non-Functional Requirements — ChatGPT System Design - by Neo Kim
  and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 480
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:57:09-05:00'
sources: []
---

**1️⃣ Clarify**  
The paper “Non‑Functional Requirements – ChatGPT System Design” describes how to capture performance, reliability, scalability, security, and usability constraints for a large language model service (ChatGPT). I’ll assume the audience wants an overview of *what* NFRs are discussed, *why* they matter, and *how* they shape the architecture.

**2️⃣ Approach**  
I’ll break it into:  
- Definition of NFRs in ML services  
- Key categories highlighted by Neo & Hayk  
- Illustrative design choices that satisfy each category

**3️⃣ Depth**  

| Category | Example NFRs | Architectural Levers |
|----------|--------------|----------------------|
| **Performance** | <1 s response, 100 k QPS | GPU‑cluster autoscaling, model sharding, batching |
| **Scalability** | Multi‑region deployment, elastic compute | Kubernetes + Spot‑VMs, service mesh for traffic routing |
| **Reliability** | 99.9% uptime, graceful degradation | Redundant replicas, circuit breakers, fallback to smaller models |
| **Security** | Data encryption at rest, fine‑grained auth | KMS, role‑based access, differential privacy in training data |
| **Usability** | Consistent API, explainable outputs | Standardized JSON contract, model‑agnostic explanation layer |

Neo & Hayk argue that NFRs should be *measured first*, not just “good‑to‑have”, and must be baked into CI/CD pipelines (e.g., automated latency tests).

**4️⃣ Edge Cases**  
- Sudden traffic spikes → burst capacity limits  
- Model drift → continuous validation metrics  
- Regulatory changes → data residency constraints  

Testing should include chaos experiments, synthetic load, and compliance audits.

**5️⃣ Optimize & Communicate**  
Highlight trade‑offs: e.g., lower latency vs. higher compute cost; stronger security vs. developer friction. Show how an iterative feedback loop (monitor ➜ alert ➜ roll‑out) keeps NFRs aligned with business goals. Conclude that treating NFRs as first‑class citizens yields a resilient, user‑centric ChatGPT service.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
