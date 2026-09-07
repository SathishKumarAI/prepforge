---
qid: ing_6dac33c1f1__faang__local
question: Why is load balancing necessary? — What is Load Balancing?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 526
total_tokens: 762
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:58:27-05:00'
sources: []
---

**1️⃣ Clarify**  
The interviewer asks *why* we need load balancing in ML pipelines and *what* it actually means. I’ll confirm they’re referring to distributing inference or training workloads across multiple compute nodes (GPUs/TPUs, containers, etc.) rather than a generic networking concept.

---

**2️⃣ Approach**  
- Define load balancing in the ML context.  
- Explain key motivations: latency, throughput, fault tolerance, cost efficiency.  
- Give concrete examples (batch inference vs. real‑time scoring).  
- Touch on implementation patterns (round‑robin, least‑connections, resource‑aware schedulers).

---

**3️⃣ Depth**  
Load balancing is the dynamic allocation of ML tasks to available compute resources so that no single node becomes a bottleneck or failure point. It ensures:  

| Benefit | Why it matters in ML |
|---------|----------------------|
| **Low latency** | Real‑time models (e.g., recommendation engines) must hit SLA targets; balanced requests avoid queuing delays. |
| **High throughput** | Batch jobs (training, feature extraction) can scale across GPUs/TPUs by evenly distributing shards. |
| **Fault tolerance** | If a node crashes, the balancer redirects traffic or re‑queues work without manual intervention. |
| **Cost efficiency** | Autoscaling clusters based on load keeps idle resources from accruing charges while still meeting demand peaks. |

Typical patterns: *Round‑robin* for stateless inference services; *least‑connections* or *resource‑aware* schedulers (e.g., Kubernetes HPA) for training jobs that vary in GPU/CPU usage.

---

**4️⃣ Edge Cases**  
- **Stateful models** (session‑based) require sticky sessions.  
- **Non‑uniform workloads** (e.g., inference on large images vs. small ones) can still lead to imbalances; need weight‑aware balancers.  
- **Network partitioning** may mislead the balancer about node health—health checks are critical.

---

**5️⃣ Optimize & Communicate**  
I’d suggest integrating a service mesh (Istio) or using managed ML platforms that expose *dynamic* scaling policies, and I’d explain how monitoring metrics feed back into the load‑balancing logic. Conclude by stressing that without proper balancing, we risk SLA violations, wasted compute, and brittle systems—precisely what top FAANG teams avoid.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
