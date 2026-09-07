---
qid: ing_81e1a727f8__faang__local
question: 'Explain: Caching and Conditional Requests — HTTP/HTTPS | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 524
total_tokens: 761
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:46:41-05:00'
sources: []
---

**Caching & Conditional Requests – HTTP/HTTPS (System‑Design Lens)**  

| Step | What to do | Why it matters |
|------|------------|----------------|
| **Clarify** | *Problem:* Reduce latency and bandwidth for repeated GETs on immutable or rarely‑changed resources while preserving freshness. Assume we’re serving static assets (images, CSS) or API data with ETags/Last‑Modified headers. | Clear scope: cacheable vs non‑cacheable, client vs CDN vs proxy. |
| **Approach** | 1️⃣ Use **Cache-Control** (`public`, `max-age`, `s-maxage`) to dictate freshness. <br>2️⃣ For resources that change infrequently, emit an **ETag** or **Last-Modified** header. <br>3️⃣ On subsequent requests, send `If-None-Match`/`If-Modified-Since`. If unchanged → 304 Not‑Modified; client reuses cached body. | Keeps data consistent without full retransmission. |
| **Depth** | - Cache key = URL + relevant query params + request headers (e.g., Accept). <br>- Invalidation: on update, change ETag (hash of content) or bump a version number in the filename/URL (cache‑busting). <br>- Complexity: O(1) lookup in CDN edge; 304 reduces payload to header size (~200 B). | Trade‑off: heavier CPU for hash generation vs network savings. |
| **Edge Cases** | • Sensitive data → `private`, no caching.<br>• Varying `Accept-Encoding` → cache separate variants.<br>• Clock skew → use `Last-Modified` with server‑time sync.<br>• Long‑lived resources → set `immutable`. | Test: hit same URL, observe 304; change content, ensure new ETag triggers full download. |
| **Optimize & Communicate** | • Combine CDN edge caching with origin validation to avoid “cache stampede.” <br>• Use a versioned CDN key (e.g., `/v1/…`) for zero‑downtime rollouts. <br>• Explain: “We let the network do the heavy lifting, only sending diffs when necessary, so latency drops from ~200 ms to ~20 ms on repeat hits.” | End with metrics: hit ratio ↑ 90%, bandwidth ↓ 70%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
