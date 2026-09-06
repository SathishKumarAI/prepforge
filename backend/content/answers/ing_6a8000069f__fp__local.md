---
qid: ing_6a8000069f__fp__local
question: What are some disadvantages of CDNs? — tech-prep-jeremy.io/systems-design/topics/cdns.md
  at master \u00b7 jeremyyew/tech-prep-jeremy.io \u00b7 GitHub
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 209
output_tokens: 425
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:51:16-05:00'
sources: []
---

**Why CDNs can hurt rather than help**

At their core a CDN solves *latency* by placing content closer to users. That optimization presupposes two things: (1) the data is static or changes infrequently, and (2) the cost of keeping many replicas up‑to‑date is outweighed by the latency gain. When either assumption fails, CDNs backfire.

| Issue | Why it happens | Deeper principle |
|-------|----------------|------------------|
| **Stale or inconsistent data** | Replication lag means users see outdated pages. The “write‑through” model that keeps edge caches fresh is expensive; many systems trade consistency for speed (CAP theorem). | Consistency–latency trade‑off in distributed systems. |
| **Cache poisoning / security exposure** | Malicious actors can hijack a cache entry, turning the CDN into an attack vector. Edge nodes must trust origin servers, which violates end‑to‑end security assumptions. | Zero‑trust networking vs. “cached” trust boundaries. |
| **Cost explosion for dynamic content** | Every dynamic hit bypasses the cache, incurring origin bandwidth and compute costs on each request. The CDN’s pricing model (per GB, per request) turns a small spike into a large bill. | Economies of scale vs. marginal cost of edge execution. |
| **Complexity in cache invalidation** | Manual or timed purges are error‑prone; automated rules can be overkill or under‑protecting, leading to either wasted bandwidth or stale data. | Information theory: maintaining optimal entropy in a distributed cache is NP‑hard. |

A non‑obvious insight: **CDNs impose an implicit “cache coherence protocol” on every application**. Developers must architect their workloads as if they were operating a distributed shared memory system, even when only static assets are involved. This extra layer of reasoning often leads to subtle bugs that manifest only at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
