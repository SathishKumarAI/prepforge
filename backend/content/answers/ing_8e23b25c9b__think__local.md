---
qid: ing_8e23b25c9b__think__local
question: 'Explain: Types of Health Checks — Design Load Balancer | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 587
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T10:27:03-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**

- *Scope*: We’re asked about “Types of Health Checks” in the context of designing a load balancer for a system‑design interview (e.g., AlgoMaster.io).  
- *Assumptions*:  
  - The audience knows what a load balancer is.  
  - They expect both architectural and operational viewpoints.  
  - We’re not asked to code, just explain concepts.

**2️⃣ Adopt a mental framework**

Use the classic “health‑check taxonomy” that interviews love:  

| Layer | Health‑Check Type | What it probes | Typical implementation |
|-------|-------------------|---------------|------------------------|
| *Infrastructure* | **Connectivity / Ping** | Network reachability | ICMP/HTTP HEAD |
| *Application* | **Readiness** | Service can start & serve traffic | `/ready` endpoint |
| *Application* | **Liveness** | Service hasn’t crashed or dead‑locked | `/health` heartbeat |
| *Performance* | **Latency / Throughput** | Response time, QPS limits | Synthetic requests, metrics |
| *Resource* | **CPU/Memory** | System isn’t thrashing | OS counters, Prometheus |

**3️⃣ Step‑by‑step reasoning**

1. Start by mapping the load balancer’s responsibilities: routing, fail‑over, scaling.  
2. For each responsibility, ask “What could go wrong?” → gives you a health‑check angle.  
3. Translate each failure mode into a concrete check (e.g., if the backend can’t open DB connections → add a DB‑connectivity probe).  
4. Remember that checks run *before* traffic is sent; hence “readiness” vs “liveness”.  
5. Finally, think about how these checks feed back to the LB: remove unhealthy nodes, gradually reintroduce them.

**4️⃣ Avoid common pitfalls**

- Mixing **readiness** with **health**—explain the difference clearly.  
- Over‑engineering: don’t list exotic metrics unless they’re relevant to the interview’s constraints.  
- Forgetting that load balancers often expose their own health endpoints (e.g., `/status`).

**5️⃣ Sanity‑check & articulate**

- Re‑run the mental model: “If I add a new microservice, what checks must it expose for the LB?”  
- Summarize in one sentence per type to keep answers concise.  
- End with a note that real systems layer these checks (e.g., Kubernetes’ liveness/readiness probes) and that the choice depends on latency vs safety trade‑offs.

This structured approach shows you understand both theory and practical design, exactly what interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
