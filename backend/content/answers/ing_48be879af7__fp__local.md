---
qid: ing_48be879af7__fp__local
question: 'Explain: DNS resolution — Why DNS Based Global Server Load Balancing (GSLB)
  Doesn\u2019t Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 363
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:40:02-05:00'
sources: []
---

**Why DNS‑based GSLB is fundamentally brittle**

The goal of a global load balancer is to route a client’s request to the *best* server at that moment (low latency, high capacity).  
A DNS resolver only hands out an IP address; it has no visibility into the *state* of the target machine after the reply leaves the network.  
Consequently:

1. **State‑less routing** – The decision is made once per DNS query and remains fixed for the TTL that the client caches. If a server becomes overloaded or fails, all clients still holding the old address will continue to hit it until their cache expires.

2. **Client diversity** – Clients are not uniform; they differ in network path, ISP peering, and even local routing tables. A single DNS answer cannot capture this heterogeneity. The deeper principle here is *information asymmetry*: DNS gives a coarse, global view while the optimal route depends on fine‑grained, per‑client information.

3. **Propagation delay** – Any change in load or topology must traverse the recursive resolver chain before it reaches end users. Even with 1 s TTLs, the system can oscillate (the “herd effect”) as many clients switch simultaneously, causing a new imbalance.

*Non‑obvious insight:* DNS caching turns a *dynamic* resource into a *static* one for minutes; this staticity is the root of GSLB’s failure. A truly optimal global balancer would need per‑client state (e.g., via Anycast or application‑layer routing) rather than a single cached IP.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
