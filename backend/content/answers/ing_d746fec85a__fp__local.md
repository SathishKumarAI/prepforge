---
qid: ing_d746fec85a__fp__local
question: 'Explain: Latency — Serverless Architecture - by Neo Kim'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 416
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:37:58-05:00'
sources: []
---

**Latency in Serverless Computing – a First‑Principles View**

At its core, serverless is *just another way of scheduling compute*: an event triggers a function that runs on a pool of machines, scales automatically, and bills per execution time. The latency we observe—the time from event arrival to response—arises from three deterministic sources:

1. **Cold‑start cost** – the operating system and language runtime must be booted, containers provisioned, and code deserialized. This is essentially a *resource‑allocation problem*: the scheduler has to place a fresh VM in a region with sufficient capacity. Because the scheduler can’t predict demand perfectly, it keeps a minimal “warm pool,” but every new instance incurs the full cold cost.

2. **Execution time** – once warm, the function executes on an isolated CPU core. Here latency is bounded by *algorithmic complexity* and *I/O contention*. Even optimal code cannot beat the physical limits of memory bandwidth or network latency to external services.

3. **Network hop** – serverless functions are often in a different subnet or availability zone from the client. The round‑trip time (RTT) over the Internet, plus any service mesh routing, adds a fixed geometric delay that scales with distance.

The non‑obvious insight: *cold starts are not purely a “startup” overhead but a manifestation of the **trade‑off between elasticity and consistency**.* To guarantee instant scaling, the system must keep a cache of ready instances. However, maintaining this cache consumes resources that could otherwise be allocated to other workloads, violating cost‑efficiency. Thus latency in serverless is fundamentally a balance between *resource amortization* (keeping warm) and *elastic provisioning* (spinning up on demand). Understanding this trade‑off lets architects design better pre‑warm strategies or use lighter runtimes to shave milliseconds off the inevitable cold start.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
