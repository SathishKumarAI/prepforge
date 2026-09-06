---
qid: ing_a2465f2291__think__local
question: 'Explain: Pros — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 394
total_tokens: 580
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:48:19-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - *What does “availability” mean?* (e.g., uptime, fault tolerance)  
   - *Which AI components are we talking about?* (models, data pipelines, inference services)  
   - *Assume a typical cloud‑native stack (microservices, autoscaling, load balancers).*

**2️⃣ Adopt a system‑design mental model**  
   - Use the classic *availability matrix*: **N × R** (number of replicas × redundancy level).  
   - Map AI lifecycle stages: training → model registry → serving → monitoring.  

**3️⃣ Step‑by‑step reasoning**  
   1. Identify single points of failure (SPOFs) in the pipeline.  
   2. For each SPOF, decide on replication or failover strategy.  
   3. Quantify availability: e.g., two replicas with health checks → ~99.9 % uptime.  
   4. Consider auto‑scaling to absorb traffic spikes without downtime.  
   5. Integrate circuit breakers and graceful degradation for downstream services.

**4️⃣ Common traps to avoid**  
   - *Assuming more replicas always help*: ignore cost, consistency, and stateful components (e.g., GPU workers).  
   - *Overlooking data pipeline availability*: models can be served but data may be missing.  
   - *Neglecting monitoring*: high availability without observability is brittle.

**5️⃣ Sanity‑check & verbalize**  
   - Run a “failure injection” thought experiment: shut down one replica, observe failover.  
   - Ask yourself if the design satisfies SLAs for latency and uptime.  
   - Communicate by summarizing each layer’s redundancy and how it contributes to overall availability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
