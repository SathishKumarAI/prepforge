---
qid: ing_d0a5a57a71__fp__local
question: 'Explain: Content delivery network — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 207
output_tokens: 314
total_tokens: 521
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:24:17-05:00'
sources: []
---

A **content delivery network (CDN)** is a distributed caching system that solves the *latency‑throughput* trade‑off inherent in delivering static or dynamic content over the Internet.  
At its core it implements a simple optimization: for each user request, pick the server that minimizes the sum of
1. network distance (round‑trip time) and
2. content size × transfer cost.

Because network latency is largely determined by physical distance and the number of hops, moving copies of content closer to users reduces RTT dramatically. The CDN therefore pre‑replicates data on edge servers in strategic locations, using a *geographic partitioning* scheme that approximates the Voronoi diagram of user density versus server placement.

The non‑obvious insight is that **caching is not just about hit rates**; it also shapes the *information flow graph*. By placing replicas at nodes that are bottlenecks in the underlying topology, a CDN reduces contention on core links and turns a single long‑haul path into many short‑haul paths. This transforms a high‑variance latency distribution (due to congestion) into a low‑variance one, which is far more valuable for real‑time applications than raw throughput.

Thus, a CDN is fundamentally an *optimization of network topology under capacity constraints*, leveraging geometry and probability to deliver content with predictable performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
