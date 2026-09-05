---
qid: ing_31fe76f49a__star__local
question: 'Explain: Cache Keys — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 395
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:08:14-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with redesigning the image serving layer for a global e‑commerce site that had just launched a new product line. The traffic spike from marketing campaigns pushed our CDN hit ratio down to 68 % and latency spiked to 350 ms on average, hurting conversion rates.

**Task:**  
I needed to build a cache‑key strategy that would lift the CDN hit ratio above 90 %, reduce per‑request latency below 150 ms, and keep the origin load manageable while still supporting dynamic query parameters (size, format, user‑specific overlays).

**Action:**  
1. **Analyzed request patterns** with real‑time logs to identify the most common query combinations.  
2. Created a **canonical cache key** that strips volatile params (e.g., session IDs) and normalizes size/format into a single “variant” token (`{image_id}-{size}-{format}`).  
3. Implemented a **hash‑based key prefix** using MurmurHash on the canonical string to distribute keys evenly across CDN edge nodes, reducing hot‑spot pressure.  
4. Added a **stale‑while‑revalidate policy** so that stale content could be served while a background refresh updated the origin cache, keeping users fast and origins light.  
5. Configured **cache‑control headers** with a 12‑hour TTL for static variants and a 1‑hour TTL for dynamic overlays, balancing freshness against hit ratio.

**Result:**  
The CDN hit ratio jumped to 92 %, average latency dropped to 120 ms, and origin requests fell by 60 %. We saw a 3.5 % lift in conversion during the campaign period. I learned that thoughtful key normalization coupled with smart TTLs can dramatically improve performance without sacrificing content freshness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
