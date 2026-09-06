---
qid: ing_d0a5a57a71__think__local
question: 'Explain: Content delivery network — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 886
total_tokens: 1112
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:44:19-05:00'
sources: []
---

The user asks: "Explain: Content delivery network — GitHub - donnemartin/system-design-primer: Learn how to design large-scale systems. Prep for the system design interview. Includes Anki flashcards." They likely want an explanation of CDN concept, perhaps referencing that repository. Provide structured answer.### What is a Content Delivery Network (CDN)?

A **Content Delivery Network** (CDN) is a geographically distributed network of servers designed to deliver web content—HTML pages, images, videos, CSS/JS bundles, API responses, etc.—to end‑users with high speed and low latency. The core idea is *proximity*: by caching copies of assets closer to where users request them, CDNs reduce round‑trip time, relieve origin servers from heavy traffic, and improve resilience.

---

## Key Concepts

| Concept | Why it matters |
|---------|----------------|
| **Edge Servers** | Physical machines (often in large data centers) that sit near user ISPs. They serve cached content directly to clients. |
| **Origin Server** | The authoritative source of the original assets (e.g., a web app, CDN‑aware S3 bucket). Edge servers pull from it only when needed. |
| **Caching Strategy** | Determines how long an asset stays in edge caches (`Cache-Control`, `ETag`, `Last-Modified`). |
| **Global Load Balancing** | DNS or anycast routing directs users to the nearest healthy edge node. |
| **Content Invalidation / Purge** | When content updates, the CDN must remove stale copies so fresh data is served. |

---

## Typical Flow

1. **Client Request** – A browser requests `/images/logo.png`.  
2. **DNS Anycast** – DNS resolves to the nearest edge IP (often same as the CDN’s global IP).  
3. **Edge Lookup** – Edge server checks cache:
   * If cached & fresh → serve directly.  
   * If not cached or stale → fetch from origin, store locally, then respond.  
4. **Response Delivery** – Asset is streamed back to client via a fast local link.

---

## Benefits for Large‑Scale Systems

| Benefit | Example Impact |
|---------|----------------|
| **Latency Reduction** | Users in Asia get content served from an edge node in Singapore instead of a US origin, cutting RTT by ~100 ms. |
| **Bandwidth Savings** | Origin sees fewer hits; e.g., 70% of traffic can be satisfied from caches. |
| **Scalability** | Edge nodes handle bursts (e.g., viral content) without overloading the core network. |
| **Reliability** | If an origin fails, edge servers may still serve stale or cached data until purged. |

---

## Common CDN Features

- **Dynamic Content Acceleration** – For API responses that change per request, CDNs use techniques like TCP optimization, HTTP/2 multiplexing.
- **Security** – TLS termination at the edge, WAF rules, bot protection.
- **Analytics** – Real‑time metrics on cache hit rates, bandwidth usage.

---

## Relation to *system-design-primer*

The GitHub repo `donnemartin/system-design-primer` includes a section on CDNs in its **“Large Scale System Design”** chapter. It covers:

1. **Use Cases** – Static vs dynamic content.
2. **Design Questions** – How to choose cache TTL, edge location strategy, purge mechanisms.
3. **Anki Flashcards** – Quick recall of CDN terminology and trade‑offs.

Studying those resources helps you articulate CDN design decisions in interviews—e.g., why use anycast DNS, how to handle invalidation for frequently updated assets, or balancing cost vs performance when selecting edge locations.

---

### Takeaway

A CDN is the frontline layer that brings content closer to users. By understanding its architecture—edge servers, caching policies, routing, and fail‑over—you can design highly available, low‑latency systems that scale globally. The *system-design-primer* repo’s CDN material gives you concrete questions and flashcards to master these concepts for interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
