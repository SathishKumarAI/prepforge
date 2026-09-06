---
qid: ing_ba21a01b62__fp__local
question: What is the difference between pull and push CDNs?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 410
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:39:21-05:00'
sources: []
---

**Why the distinction matters**

A CDN’s job is to deliver content with minimal latency by placing it near users.  
The *fundamental problem* is: when a user requests a resource, who decides **where** that request goes?  

|                     | **Pull CDN** | **Push CDN** |
|---------------------|--------------|--------------|
| Origin of the file  | User’s origin server   | CDN’s own origin (the “push” node) |
| Transfer trigger    | First user request initiates a fetch from the original source | Content is uploaded to the CDN in advance, before any request |
| Cache consistency   | Inherits stale/changed data until TTL expires or purged | Explicit control: you decide when to invalidate or update |

**Why it must work that way**

*Pull* is *lazy*: the network only pulls data when needed. This guarantees **up‑to‑date content** without extra bandwidth, but can incur a cold‑start latency spike for first requests and higher origin load during traffic surges.

*Push* is *eager*: you pre‑push files to every edge node (or a subset). This removes the first‑request delay and offloads the origin entirely, but it requires **bandwidth** to distribute the file and careful cache invalidation logic to avoid stale data.

Both approaches can be cast as different optimization problems:  
- Pull minimizes *origin bandwidth* subject to latency constraints.  
- Push maximizes *edge availability* while minimizing *push traffic* and *cache staleness*.  

**Non‑obvious insight**

Most people think “push = better” because it eliminates the first‑request delay, but in practice the **cost of keeping many replicas fresh often outweighs that benefit**. A hybrid strategy—pulling on demand for rarely accessed assets while pushing hot, frequently requested content—is usually the most efficient solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
