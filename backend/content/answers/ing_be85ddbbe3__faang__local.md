---
qid: ing_be85ddbbe3__faang__local
question: 'Explain: Storage (Per Day) — Design WhatsApp | System Design Interview
  | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 581
total_tokens: 823
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:05:41-05:00'
sources: []
---

**Clarify**

> *Goal:* Estimate daily storage needed for a WhatsApp‑like service that handles messages, media, and metadata.  
> *Assumptions to confirm:*  
> – Number of users (e.g., 2 B).  
> – Avg. messages per user/day.  
> – Media mix: images, videos, voice notes, documents.  
> – Retention policy (messages kept for 30 days, media for 90 days).  
> – Compression ratios and deduplication.

**Approach**

1. **Quantify traffic** → users × avg. messages/day = total messages.  
2. **Break down payloads** → text ≈ 200 B, image ~ 500 KB, video ~ 5 MB, voice ~ 100 KB, doc ~ 2 MB.  
3. **Compute daily bytes** for each type and sum.  
4. **Apply retention multipliers** to estimate storage footprint.  
5. **Add overhead** (metadata, indexes, replication).

**Depth**

| Media | Avg size | Daily count | Bytes/day |
|-------|----------|-------------|-----------|
| Text | 200 B | 10 M | 2 GB |
| Image | 500 KB | 3 M | 1.5 TB |
| Video | 5 MB | 0.5 M | 2.5 TB |
| Voice | 100 KB | 2 M | 200 GB |
| Doc | 2 MB | 0.2 M | 400 GB |

Total ≈ **6.4 TB/day**.  
Retention: 30 days for text → +60 GB, media 90 days → +≈ 2.7 TB.  
Add ~10 % overhead → final ~**9 TB**.

Complexity: O(1) arithmetic; trade‑off is the accuracy of assumptions vs. scalability (sharding, tiered storage).

**Edge Cases**

* Sudden spike in media uploads (e.g., viral event).  
* High loss‑rate leading to re‑uploads.  
* Different regional data‑center capacities.

Test by simulating varied user distributions and media ratios.

**Optimize & Communicate**

Explain that we can reduce storage via deduplication (shared thumbnails), lossy compression, or archiving older messages to cheaper cold storage. In an interview, I’d narrate: “We first estimate raw throughput, then apply retention multipliers, and finally discuss how architectural choices (e.g., CDN caching, object storage tiers) influence the final footprint.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
