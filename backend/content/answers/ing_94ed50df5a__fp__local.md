---
qid: ing_94ed50df5a__fp__local
question: 'Explain: An Axiom — Why DNS Based Global Server Load Balancing (GSLB) Doesn\u2019t
  Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 185
output_tokens: 431
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:21:53-05:00'
sources: []
---

**Why DNS‑based Global Server Load Balancing (GSLB) Fails – A First‑Principles Argument**

At its core, load balancing seeks *optimal* request routing: every client should hit the least loaded, most proximate server to minimize latency and cost while keeping resources within capacity.  
DNS, however, is a *caching, name‑resolution protocol* designed for static resolution, not dynamic traffic steering.  

1. **State‑less, time‑delayed feedback** – A DNS resolver caches answers for the TTL specified by the authoritative server. If a backend becomes overloaded or fails, the change propagates only after the cached record expires (often minutes). During that window clients keep hitting the bad node, violating the optimality principle.

2. **Lack of per‑request metrics** – DNS cannot observe real‑time load, queue length, or network congestion; it can only return a list of IPs. The decision function is thus *offline* and based on stale telemetry, which contradicts the information‑theoretic requirement that routing decisions be made with up‑to‑date state.

3. **Multipath ambiguity** – Clients may receive multiple IPs and choose arbitrarily (or in order). Without a deterministic policy, load becomes *unpredictable*, undermining fairness and violating the geometric principle of equal resource distribution across nodes.

4. **Propagation delays and partial failures** – DNS updates are eventually consistent; during split‑brain or network partitions different resolvers may serve divergent records, creating inconsistent routing that can lead to cache poisoning attacks—an overlooked security side effect.

**Non‑obvious insight:** The *TTL* is not a tunable load‑balancing knob but a trade‑off between DNS query overhead and response freshness. Setting TTL too low inflates traffic; setting it high defeats the purpose of dynamic balancing. Thus, DNS‑based GSLB inherently sacrifices the very information needed for optimal routing.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
