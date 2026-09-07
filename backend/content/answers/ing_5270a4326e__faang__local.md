---
qid: ing_5270a4326e__faang__local
question: 'Explain: Serving Thumbnails — YouTube\u00a0Architecture - High Scalability
  -'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 468
total_tokens: 709
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:56:07-05:00'
sources: []
---

**Serving Thumbnails – YouTube Architecture (High‑Scalability)**  

| # | Section | Key Points |
|---|---------|------------|
| **1. Clarify** | *Problem:* Deliver video thumbnails to millions of requests per second with < 50 ms latency, while handling 100 k+ concurrent viewers and continuous upload churn. *Assumptions:* 1) Thumbnails are immutable post‑generation; 2) Requests are read‑heavy; 3) We can cache globally. |
| **2. Approach** | 1️⃣ Generate thumbnails in a background worker (e.g., Cloud Functions). 2️⃣ Store in a CDN‑backed object store (S3/Cloud Storage) with versioning. 3️⃣ Use edge caching via a global CDN (Edge locations). 4️⃣ Route requests through a load balancer that picks the nearest edge. 5️⃣ Invalidate cache only on update, using signed URLs or ETags. |
| **3. Depth** | *Data Flow:* Upload → transcoder → thumbnail generator → object store ↔ CDN → client. <br>*Scalability:* Object store scales horizontally; CDN caches at edge nodes, reducing origin hits to ~0.1 %. <br>*Latency:* 10–20 ms from CDN cache; 100–200 ms for cold‑start. <br>*Complexity:* O(1) request time, amortized cost per thumbnail generation. |
| **4. Edge Cases** | • Thumbnail missing → fallback to default placeholder.<br>• Rapid successive uploads → versioned URLs avoid stale cache.<br>• CDN outage → direct S3 fetch (fallback). <br>Test with load‑test tools (Locust) and cache hit ratio monitoring. |
| **5. Optimize & Communicate** | • Use signed cookies to restrict access, reducing public exposure.<br>• Pre‑warm edge caches during low traffic periods.<br>• Monitor latency SLA; auto‑scale workers based on queue depth.<br>Explain trade‑offs: higher cache hit → lower origin cost vs. stale data risk. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
