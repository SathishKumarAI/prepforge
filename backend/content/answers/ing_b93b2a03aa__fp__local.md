---
qid: ing_b93b2a03aa__fp__local
question: 'Explain: SRV (Service) Record — DNS Record Types You Should Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 427
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:37:48-05:00'
sources: []
---

**Why an “SRV” record is needed**

When a client wants to reach *service X* on host *H*, it only knows the domain name of the service (e.g., `sip.example.com`). DNS traditionally maps names to IP addresses, but that tells nothing about which port or protocol the service uses. An SRV (Service) record solves this by encoding **protocol**, **priority/weight**, and **port** alongside the target host.

**How it works**

```
_service._proto.name.  IN  SRV  priority weight port target
```

* `_service` — name of the service (e.g., `sip`)
* `_proto` — transport protocol (`tcp`, `udp`, or `tls`)
* `priority` — lower values are preferred; if equal, weights decide load‑balance.
* `weight` — relative probability among records with same priority.
* `port` — TCP/UDP port number the service listens on.
* `target` — canonical hostname of the server.

When a client queries for `sip._tcp.example.com`, DNS returns one or more SRV records. The client then connects to the chosen target on the specified port, independent of any A/AAAA record mapping.

**Underlying principle**

SRV is an *optimization* layer on top of name resolution: it decouples service discovery from address resolution, allowing multiple providers per domain and dynamic load balancing without changing hostnames or IPs. It also aligns with *probabilistic routing*: the weight field lets operators express non‑uniform traffic distribution.

**Non‑obvious insight**

Because SRV records are protocol‑specific, a single domain can expose the same service on different transports (e.g., `sip._tcp` vs. `sip._tls`). This enables seamless migration to secure protocols without changing client code or DNS infrastructure—an elegant solution that anticipates future protocol evolution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
