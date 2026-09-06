---
qid: ing_a7ea6a01d1__fp__local
question: 'Explain: Non-Functional Requirements — Airbnb System Design - by Neo Kim
  and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 454
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:02:38-05:00'
sources: []
---

### Why “Non‑Functional” Matters for Airbnb

When we model a marketplace, the **functional** story (searching listings, booking dates) is only half of the puzzle. The other half is the *behaviour* that makes or breaks user trust: latency, reliability, security, and scalability.  

1. **Optimization & Latency** – Users pay attention to milliseconds; the system must minimize *response time* \(t\). By treating each micro‑service as a queue with service rate \(\mu\) and arrival rate \(\lambda\), we enforce \(\lambda < \mu\) so that the expected wait \(W = 1/(\mu-\lambda)\) stays below a target.  
2. **Reliability & Availability** – The system is a distributed database; each component’s failure probability \(p_i\) propagates multiplicatively across the booking workflow. To keep overall downtime < 0.01 %, we design redundancy (at least 3 replicas, quorum reads) and use *CAP* trade‑offs that favour consistency during peak traffic.  
3. **Security & Privacy** – Personal data is a commodity; by modeling it as an information‑theoretic channel with capacity \(C\), we ensure encryption schemes achieve \(R > H(X|Y)\), guaranteeing confidentiality against eavesdroppers.  
4. **Scalability & Elasticity** – Traffic follows a Pareto distribution; to absorb the heavy tail, autoscaling policies are derived from queuing theory (e.g., VMs per 1000 requests) rather than ad‑hoc thresholds.

#### Non‑obvious insight  
Many architects focus on *horizontal* scaling alone. In Airbnb’s case, **stateful caching of geolocation indices**—keeping a probabilistic Bloom filter per region—drastically reduces database hits for the most frequent queries (e.g., “hotels near beach”), lowering both latency and cost. This subtle optimisation emerges only when you treat NFRs as *constraints in an optimization problem*, not just checklist items.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
