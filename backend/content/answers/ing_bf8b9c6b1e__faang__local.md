---
qid: ing_bf8b9c6b1e__faang__local
question: 'Explain: Real-time access checks — The five laws of cloud-native authorization'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 600
total_tokens: 837
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:07:40-05:00'
sources: []
---

**Clarify**  
You’re asking for the *five laws* that govern how a modern, cloud‑native system should perform real‑time authorization checks (e.g., in an API gateway or policy engine).  I’ll assume:  
- “Real‑time” means sub‑millisecond latency, not batch evaluation.  
- The environment is microservices‑based, often using service meshes and distributed tracing.  
- Authorization decisions are driven by policies that may be dynamic (e.g., ABAC, RBAC with attributes from external sources).

**Approach**  
1. Enumerate each law as a concise principle.  
2. For each, explain the *why* (problem it solves), the *how* (typical implementation pattern), and any trade‑offs.  
3. Keep the total length within 200 words to match FAANG interview brevity.

**Depth**

| Law | Essence | Typical Pattern | Trade‑off |
|-----|---------|-----------------|-----------|
| **1️⃣ Policy‑First** | Define a declarative policy model (e.g., Open Policy Agent) before coding. | Store policies in Git, versioned, and serve via a fast read‑only store. | Extra maintenance but prevents hard‑coded checks. |
| **2️⃣ Contextual Evaluation** | Decisions must consider request context (user, resource, environment). | Pass full context to the policy engine; use side‑cars or local caches for attributes. | Slight latency increase; requires secure attribute sources. |
| **3️⃣ Cache & Pre‑compute** | Avoid hitting a central engine on every call. | Use per‑service local cache of recent decisions, with TTL and invalidation hooks. | Risk of stale decisions; need robust cache‑eviction logic. |
| **4️⃣ Observable & Auditable** | Every decision must be logged for compliance and debugging. | Emit structured events to a log aggregator (e.g., Loki) and tag them with correlation IDs. | Adds minimal overhead but essential for traceability. |
| **5️⃣ Fail‑Safe Deny** | In any uncertainty, deny access rather than risk exposure. | Default policy = “deny”; enforce strict validation of inputs before evaluation. | May reduce usability if policies are misconfigured. |

**Edge Cases**  
- *Attribute source latency*: fallback to cached attributes or temporary denial.  
- *Policy drift*: automated tests should catch inconsistent states.  
- *Scaling*: shard caches per service instance; use a distributed lock for policy reloads.

**Optimize & Communicate**  
Explain that these laws together reduce complexity, improve security posture, and keep latency low. Emphasize the iterative loop: write policies → test in CI → deploy to gateway → monitor decisions → refine. This narrative shows structured thinking, clear communication, and depth—exactly what a FAANG interviewer looks for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
