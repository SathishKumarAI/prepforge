---
qid: ing_9e822a54b0__fp__local
question: 'Explain: Active-Active — Availability | System Design'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 383
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:42:18-05:00'
sources: []
---

**Active‑Active Availability – the geometry of fault tolerance**

At its core a distributed service must answer *“What is the probability that an arbitrary request will succeed at any instant?”*  
In a single‑region deployment that probability collapses to the uptime of one machine plus the chance that the network to it remains healthy.  Any outage instantly drops availability to zero.

An **active‑active** design tackles this by *reducing the dimensionality of failure space*.  
Let each region be a vector component \(r_i\).  The system is up iff at least one component is functioning:  

\[
P_{\text{up}} = 1-\prod_{i=1}^{n} (1-p_i)
\]

where \(p_i\) is the failure probability of region *i*.  
By spreading traffic across multiple regions, the joint failure probability shrinks multiplicatively.  The deeper principle is that **redundancy converts rare events into a combinatorial safety net**; the more independent paths you add, the closer you get to perfect reliability.

A non‑obvious insight: *consistency does not need to be sacrificed for availability*.  
If each region maintains its own write‑ahead log and uses an eventual‑replication protocol (e.g., CRDTs or vector clocks), a request can be served locally with zero latency, while the system guarantees that all replicas converge.  Thus **latency is bounded by local processing**, not inter‑region round trips, and *availability* is achieved without violating *CAP*’s trade‑offs in practice.

In short, active‑active design transforms availability into a low‑dimensional probability problem, leveraging independence and convergence to deliver near‑zero downtime.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
