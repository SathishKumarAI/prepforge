---
qid: ing_8dada5d636__star__local
question: 'Explain: Stale Content — Content Delivery Network (CDN) | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 376
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:16:03-05:00'
sources: []
---

**Situation:**  
At my previous startup we launched a global video‑streaming platform that served thousands of personalized clips. After scaling to 30 countries, our analytics showed a 12 % drop in user engagement during peak hours, and latency logs revealed that many users were receiving cached “stale” thumbnails from the CDN.

**Task:**  
I was tasked with redesigning the CDN cache strategy so that fresh content—especially dynamic thumbnails and adaptive bitrate manifests—was served within 500 ms, while keeping cache hit ratios above 85 % to avoid traffic spikes on our origin servers.

**Action:**  
First, I introduced a versioned URL scheme for thumbnails (e.g., `/thumbs/v3/…`) so that the CDN could distinguish new images from old ones. Then I configured an edge‑side includes (ESI) rule: when a request hit the CDN cache, it would fetch a “validation token” from our Redis cluster every 15 minutes to confirm content freshness. For manifests, I implemented a short TTL of 30 seconds and used HTTP `ETag` headers so browsers could revalidate quickly. Finally, I set up an automated purge pipeline that triggered on any new upload, pushing a zero‑TTL request to the CDN edge nodes via their API.

**Result:**  
Within two weeks, cache hit ratios climbed from 78 % to 92 %, and average content latency dropped by 38 %. The engagement metric rebounded to its pre‑scale level (+10 %). I learned that combining versioned URLs with short TTLs and edge‑side validation offers a balanced trade‑off between freshness and bandwidth efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
