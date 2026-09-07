---
qid: ing_d82df3e1eb__faang__local
question: 'Explain: Cons — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 466
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:02:16-05:00'
sources: []
---

**Clarify**  
We’re evaluating the *cons* of AI systems that hinge on **availability**—the ability for a service to respond quickly and reliably when users request it. I’ll assume we mean cloud‑hosted ML APIs or inference engines in production.

**Approach**  
1. List key failure modes tied to availability.  
2. Explain why each is problematic for end‑users/businesses.  
3. Quantify impact (latency, SLA loss).  
4. Suggest mitigation trade‑offs.

**Depth**  

| Cons | Why It Matters | Typical Impact |
|------|----------------|----------------|
| **Cold‑start latency** | Model loading & GPU warm‑up delay > 1 s | Users see slow response → churn, higher MTTR |
| **Resource contention** | Shared GPUs/TPUs lead to queueing | Throughput drops; SLA violations |
| **Scale‑out complexity** | Autoscaling triggers need accurate load prediction | Over‑provisioning costs or under‑provisioning outages |
| **Dependency failure** | External data stores, model registries offline | Inference stalls, 5xx errors |
| **Model drift detection lag** | Retraining pipelines not real‑time | Degraded predictions → trust loss |

Each point inflates latency, reduces throughput, and erodes the reliability guarantees companies promise.

**Edge cases**  
- *Burst traffic*: sudden spikes can exceed autoscaling thresholds.  
- *Partial failures*: one node down but others still serve stale models.  
- *Network partitions*: isolated clusters lose model registry access.

Testing: simulate cold starts, throttle GPU memory, inject network delays, and run chaos experiments on the registry service.

**Optimize & Communicate**  
Mitigate by pre‑warming containers, using serverless GPU functions for short bursts, caching predictions, and decoupling inference from training pipelines. Communicate trade‑offs clearly to stakeholders: e.g., “Pre‑warm reduces latency by 80 % but increases idle cost by X%.” This balanced view shows deep technical grasp while aligning with business goals—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
