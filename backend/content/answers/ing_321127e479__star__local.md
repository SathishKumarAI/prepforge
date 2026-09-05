---
qid: ing_321127e479__star__local
question: 'Explain: Routing Tables — IP Address | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 373
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:08:38-05:00'
sources: []
---

**Situation**  
When I joined a startup building a multi‑tenant edge AI platform, our data pipeline was bottlenecked by slow model inference requests routed through a single gateway. The service had to serve up to 5 k concurrent users across three regions while keeping latency under 100 ms.

**Task**  
I needed to redesign the request routing layer so that traffic would automatically distribute to the nearest edge node, reduce round‑trip time, and provide graceful failover without manual intervention.

**Action**  
First, I mapped each edge server’s public IPs into a central Redis‑backed routing table keyed by region. Using BGP‑like longest‑prefix matching, the gateway queried this table for the best next hop based on client IP geolocation (via MaxMind). I added a lightweight HTTP/2 proxy that cached these lookups in memory and refreshed them every 30 s to handle node churn. For redundancy, each edge ran an instance of the same routing logic; if a node went down, its entry was removed from Redis, triggering immediate rerouting. I also instrumented latency metrics per hop and set up alerts for any >10 % increase.

**Result**  
Post‑deployment, average inference latency dropped from 180 ms to 75 ms (a 58 % improvement). The system handled a 120 % traffic spike during a product launch with zero outage. I learned that treating routing tables as programmable data structures and integrating them with real‑time metrics can turn a static network into an adaptive, high‑performance service layer.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
