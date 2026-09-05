---
qid: ing_48a0a55a46__star__local
question: 'Explain: Bitmap Indexes — Indexing | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 321
total_tokens: 558
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:53:43-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup we built an anomaly‑detection pipeline that ingested millions of transaction records per day. The data warehouse had dozens of high‑cardinality categorical columns (merchant ID, device type, region) and our queries were choking on the sheer volume.

**Task** – I was tasked with reducing query latency for real‑time scoring while keeping storage overhead low enough to fit on a single node cluster.

**Action** – I introduced bitmap indexes for each of the top 20 categorical fields. Using PostgreSQL’s `btree_gin` extension, we compressed each column into a bitset per distinct value. For example, the “merchant ID” field became a 10 MB bitmap array instead of a 200 GB table of raw IDs. During scoring I performed bitwise AND operations across relevant columns to filter candidate transactions in milliseconds, bypassing the full scan. I also wrote an automated pipeline that refreshed the bitmaps every hour, ensuring consistency with new merchants.

**Result** – Query latency dropped from ~12 s to under 200 ms for our critical fraud‑score API, a 60× improvement. Storage usage fell by 85%, freeing up space for additional features. I learned how bitmap indexing trades off memory for speed and the importance of periodic refreshes in streaming environments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
