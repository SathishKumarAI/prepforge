---
qid: ing_6664db7369__fp__local
question: 'Explain: Now it doesn''t query Third Party Data — Google Maps System Design
  Interview Question'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 377
total_tokens: 553
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:42:47-05:00'
sources: []
---

In a system‑design interview the interviewer asks you to build a scalable “Google Maps” service that must serve many users with low latency and high availability.  
The **first principles** of this problem are:

1. **Consistency vs. Availability (CAP)** – The map data is static for most operations; we can tolerate eventual consistency from a CDN or cache, but we cannot afford the *latency* that would come from an external HTTP call to a third‑party API on every request.
2. **Cost & Rate Limits** – External APIs impose quotas and monetary costs per query. A design that relies on them will hit limits under traffic spikes, breaking the service.
3. **Data Governance** – Third‑party data may change format or become unavailable; your architecture should be resilient to such churn.

Hence you **must not query third‑party services in real time** for each request.  
Instead:

* **Pre‑fetch & cache** the entire map tile set (or at least the most frequently used tiles) into a distributed CDN and a local read‑only database.  
* Use *cache‑aside* or *read‑through* patterns so that the first hit populates the cache, subsequent hits are served instantly.  
* Periodically **refresh** from the third‑party source in a background job rather than on demand.

**Non‑obvious insight:** Even if you store all tiles locally, you still need an external source for *updates* (e.g., new roads). Treat that as a separate *write path* with controlled batch ingestion. This keeps read traffic isolated from the third‑party dependency, preserving performance while ensuring data freshness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
