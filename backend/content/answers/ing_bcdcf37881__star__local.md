---
qid: ing_bcdcf37881__star__local
question: 'Explain: Exact vs Approximate Search — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 355
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:48:46-05:00'
sources: []
---

**Situation:** In a recent product‑launch project I was tasked with powering a recommendation engine for a media streaming service that had to deliver top‑10 video suggestions to 50 000 concurrent users with sub‑200 ms response time.

**Task:** I needed to decide between an exact nearest‑neighbour search and an approximate method, ensuring we met latency targets while keeping recall above 95 % for the user experience.

**Action:** I benchmarked Faiss’s brute‑force index (exact) against its HNSW graph (approximate). Using a 128‑dimensional embedding from a pre‑trained transformer, I measured cosine similarity. For exact search, latency per query was ~3 ms but required ~1.5 GB RAM for the full index; recall@10 hit 99 %. Switching to HNSW with 32 neighbors reduced latency to 0.4 ms and memory to 350 MB, while recall@10 stayed at 96 %. I added a fallback: if an approximate query returned similarity <0.75, we ran a quick exact lookup on that subset.

**Result:** The service met the sub‑200 ms SLA for all users, cut memory usage by 77 %, and maintained user satisfaction (CTR up 12 %). I learned that choosing the right trade‑off hinges on workload size, acceptable recall loss, and resource constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
