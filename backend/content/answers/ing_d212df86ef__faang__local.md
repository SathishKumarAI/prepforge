---
qid: ing_d212df86ef__faang__local
question: 'Explain: Centralized decision logs — The five laws of cloud-native authorization'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 501
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:49:00-05:00'
sources: []
---

**Clarify**  
We’re asked to explain *centralized decision logs* and the *five laws of cloud‑native authorization*. I’ll assume we’re dealing with a multi‑tenant SaaS platform that uses fine‑grained access control (e.g., ABAC) and wants auditability across all services.  

**Approach**  
1. Define what a decision log is in this context.  
2. Outline the five laws—principles that guide how those logs should be stored, queried, and secured.  
3. Show why each law matters for compliance, observability, and troubleshooting.  

**Depth**  
A *centralized decision log* records every authorization decision (grant/deny) made by any policy engine in the stack. Each entry contains: user/principal ID, resource, action, context (IP, device), policy rule matched, timestamp, and outcome.  
The **five laws** are:  

1. **Immutable** – once written, entries cannot be altered or deleted to preserve audit integrity.  
2. **Append‑Only** – all writes go to a single stream; no in‑place updates to avoid race conditions.  
3. **Time‑Ordered** – logs are strictly ordered by wall‑clock time so replaying decisions is deterministic.  
4. **Encrypted at Rest & In Transit** – protects sensitive context (e.g., PII) and satisfies regulatory requirements.  
5. **Queryable/Indexable** – the log must support efficient filtering on principal, resource, action, and policy ID for real‑time alerting and forensic analysis.  

These laws enable a single source of truth for security teams, simplify compliance reporting, and let us reconstruct any decision path during incident investigations.  

**Edge Cases**  
*Clock skew across services* can violate time order; use NTP or logical clocks. *High throughput* may exhaust storage – shard by tenant or use tiered storage (hot vs cold). *Policy churn* can create duplicate rule IDs; enforce unique identifiers.  

**Optimize & Communicate**  
We could add a *deduplication layer* to collapse identical decisions within a short window, reducing volume without losing auditability. In talking with stakeholders, I’d emphasize that these laws turn authorization into observable, tamper‑proof telemetry—critical for trust in cloud‑native systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
