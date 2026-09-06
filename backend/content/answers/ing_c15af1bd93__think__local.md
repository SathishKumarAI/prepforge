---
qid: ing_c15af1bd93__think__local
question: 'Explain: Like we said, scalability is being able — System Design BASICS:
  Horizontal vs. Vertical Scaling'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 445
total_tokens: 645
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:41:35-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - *What is “scalability” here?* We’re talking about handling more load (requests, data) without breaking performance.  
   - *Which system type?* Assume a typical web‑service or ML inference API.  
   - *Metrics to watch:* latency, throughput, cost.

**2️⃣ Adopt the “Horizontal vs. Vertical” mental model**  
   - **Vertical scaling (scale‑up):** add more CPU/RAM/SSD to a single machine.  
   - **Horizontal scaling (scale‑out):** add more identical machines and distribute traffic.  
   - Visualize each as moving along two axes: *capacity* vs. *complexity of coordination.*

**3️⃣ Step‑by‑step reasoning**  
   1. Measure current load & bottlenecks.  
   2. If the bottleneck is a single resource (CPU, memory), try vertical scaling first—fastest to implement.  
   3. Once you hit hardware limits or cost ceilings, shift to horizontal: spin up replicas, use load balancers, and ensure statelessness or shared state via external stores.  
   4. Re‑measure; iterate.

**4️⃣ Avoid common traps**  
   - *Assuming vertical is always cheaper:* in the long run, cloud costs per GB RAM/CPU rise steeply.  
   - *Neglecting data consistency:* horizontal scaling needs careful handling of shared state (e.g., model checkpoints).  
   - *Ignoring failure modes:* more nodes mean more points of failure; need health checks & retries.

**5️⃣ Sanity‑check & verbalize**  
   - Summarize: “Vertical is a quick win but caps at hardware limits; horizontal gives true elasticity and fault tolerance.”  
   - Check against real constraints (budget, SLA, team expertise). If all align, the plan feels solid.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
