---
qid: ing_adcf74439a__think__local
question: 'Explain: High Availability — 8 Common System Design Problems and Solutions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 405
total_tokens: 597
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:27:31-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
- Confirm that “high‑availability” refers to system uptime (e.g., 99.999 % SLA).  
- Assume a distributed ML pipeline (data ingestion → preprocessing → model inference) on cloud or hybrid infra.  
- Note constraints: budget, latency tolerance, regulatory compliance.

**2. Adopt a mental framework**  
- Map the classic “5‑nines” availability ladder to *design patterns*: redundancy, failover, health checks, graceful degradation, observability.  
- For each pattern list: *problem*, *root cause*, *solution*, *trade‑offs*.

**3. Step‑by‑step reasoning**  
a. Enumerate common failure modes (single point of failure in storage, network partitions, node crashes).  
b. For each, identify how it breaks the ML workflow (e.g., data loss → model drift).  
c. Apply a pattern: e.g., use multi‑AZ object store for persistence; add circuit breakers around inference services; implement automated scaling with health probes.  
d. Quantify impact: calculate MTTR reduction, cost of additional replicas.

**4. Beware of common traps**  
- Assuming “more replicas = better” ignores network congestion and consistency overhead.  
- Neglecting *stateful* components (e.g., model checkpoints) can lead to data loss even with redundant nodes.  
- Over‑engineering monitoring (too many metrics) may mask real alerts.

**5. Sanity‑check & communicate**  
- Run a mental “failure scenario” through each solution: does it still meet latency SLAs? Does it introduce new bottlenecks?  
- Summarize findings in a table or diagram, then verbalize the logic: “We chose X because it preserves Y while keeping cost within Z.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
