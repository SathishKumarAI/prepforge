---
qid: ing_a803f2f249__fp__local
question: 'Explain: A bad and a good example — Mobile System Design Interview'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 426
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:02:45-05:00'
sources: []
---

**Why the “good” example matters**

When interviewing for a mobile‑systems role, the interviewer asks you to sketch an architecture that scales from millions of users while keeping latency low and cost reasonable.  
*Fundamental problem*: **trade‑off between consistency, availability, and partition tolerance (CAP)** plus *resource constraints* (battery, data plan). A good answer explicitly models these trade‑offs: it chooses a data store that offers tunable consistency, describes how the app caches aggressively on device, and shows fallback paths when the network is flaky.  
It connects to **information theory** – you explain how differential privacy or compression reduces bandwidth without sacrificing utility. It also touches on *probabilistic load balancing* (e.g., consistent hashing) to avoid hotspots.  
A non‑obvious insight most candidates miss: **the device itself can act as a “first‑class citizen” in the consistency model**. By treating local state as a quorum node, you reduce round‑trip latency and expose a graceful degradation path that still satisfies user expectations.

**Why the “bad” example fails**

A bad answer often starts with a monolithic server, then blindly plugs in “cloud storage.”  
*It ignores CAP*: the architecture forces strict consistency at the cost of availability during network partitions.  
*It misses geometry*: it doesn’t account for edge distribution or latency per region, so users in remote zones suffer high RTTs.  
*Probability is ignored*: no discussion of request patterns (e.g., Zipf), leading to unaddressed cache miss rates and eventual database overload.  
Ultimately the candidate gives a one‑size‑fits‑all solution that looks neat but collapses under real‑world mobile constraints.

Good answers are principled, quantitatively grounded, and treat the device as an integral part of the distributed system. Bad ones look tidy but collapse on CAP, latency, or load.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
