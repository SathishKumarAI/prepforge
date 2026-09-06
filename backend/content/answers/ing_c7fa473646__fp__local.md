---
qid: ing_c7fa473646__fp__local
question: 'Explain: The fundamental purpose of GSLB — Why DNS Based Global Server
  Load Balancing (GSLB) Doesn\u2019t Work'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 399
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:06:35-05:00'
sources: []
---

**Why DNS‑based GSLB is fundamentally fragile**

The core problem GSLB tries to solve is *dynamic routing of users to the best data center* under changing traffic, latency, and failure conditions. A naïve solution would be to let every DNS query choose a server; but DNS itself is an *immutable name→IP cache* system governed by TTLs, caching hierarchies, and asynchronous updates.

1. **Temporal decoupling** – The decision that the GSLB controller makes (e.g., “send me to DC‑A”) is baked into a single IP record that remains in every resolver’s cache for its TTL. In contrast, network conditions can change in seconds; the cache hides those changes until the TTL expires, potentially routing millions of users to a failed or overloaded site.

2. **Statelessness and lack of feedback** – DNS replies contain no per‑client context (no session ID, no path information). The GSLB cannot observe whether a chosen server actually served the client successfully; it only sees aggregated metrics from upstream probes. This mismatch between control (DNS) and observation (application traffic) breaks closed‑loop optimization.

3. **Propagation delay** – Even if the controller updates records instantly, the change propagates through recursive resolvers at unpredictable speeds, sometimes hours, so a global “instantaneous” load balance is impossible.

A non‑obvious insight: *the TTL itself is an implicit control variable.* Shortening TTL improves responsiveness but inflates resolver query traffic and can overwhelm authoritative nameservers. Lengthening TTL stabilizes the network but sacrifices adaptability. Thus DNS‑based GSLB cannot satisfy both “instantaneous” routing and low overhead simultaneously—an inherent trade‑off rooted in the very design of the Internet’s name resolution architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
