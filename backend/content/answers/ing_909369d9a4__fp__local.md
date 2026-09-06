---
qid: ing_909369d9a4__fp__local
question: What is domain name resolution? — What Happens When You Type a URL Into
  Your Browser? - System Design
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 181
output_tokens: 398
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:12:28-05:00'
sources: []
---

### Domain‑Name Resolution: The *“Where is the Server?”* Problem

When you type a URL, your browser must translate a human‑readable hostname (e.g., `example.com`) into an IP address that routers can use to forward packets.  This is a **lookup problem** on a massive distributed key–value store: *given a name, find its current network location*.

Why must it be distributed?  
1. **Scale** – the DNS namespace contains billions of records; no single server could hold all of them.  
2. **Latency & reliability** – queries travel across continents; redundant resolvers reduce failure probability and keep response times low.  
3. **Staleness** – IPs change (e.g., CDN edge nodes).  Caching with Time‑To‑Live (TTL) balances freshness against network load.

The protocol solves this by a *hierarchical* search: the resolver first asks a root server for the TLD zone, then the appropriate registry, and finally the authoritative name server.  Each step is a simple dictionary lookup, but the hierarchy guarantees that each query touches only logarithmically many servers relative to the namespace size.

**Non‑obvious insight:**  
Caching is not merely a performance trick; it’s an *information‑theoretic* compression of the network graph.  By storing recent answers locally, resolvers implicitly learn traffic patterns and reduce entropy in subsequent queries, thereby lowering the average number of hops needed to reach the destination.

In short, DNS turns the global Internet into a scalable, fault‑tolerant key–value lookup that balances latency, consistency, and load through hierarchy and caching.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
