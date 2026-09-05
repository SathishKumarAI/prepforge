---
qid: ing_8ea1fbfb06__star__local
question: 'Explain: Back-of-the-Envelope Estimation — Design Spotify | System Design
  Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 336
total_tokens: 582
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:18:05-05:00'
sources: []
---

**Situation:**  
During a system‑design interview at a fintech startup, I was asked to sketch out the architecture of a music streaming service like Spotify, focusing on how many users we could support with minimal latency.

**Task:**  
I needed to estimate key metrics—daily active users (DAU), peak concurrent streams, storage per user, and bandwidth—so I could propose an appropriate scaling strategy and cost budget.

**Action:**  
First, I assumed 10 % of a typical app’s DAU would stream music. With a target of 1 million DAU, that gives 100k concurrent streams during peak hours. Each 3‑minute track at 320 kbps averages 1.2 MB; storing 200 songs per user (historical library) yields ~240 GB total for 1 M users—≈240 TB of data. I then estimated bandwidth: 100k concurrent streams × 0.32 Mbps ≈ 32 Gbps peak, translating to roughly 10 Gbps sustained after accounting for caching and CDN. Using these numbers, I chose a sharded NoSQL DB (e.g., Cassandra) for metadata, an object store like S3 for audio files, and a CDN layer for edge delivery.

**Result:**  
The interview panel was impressed; my estimates matched their internal benchmarks within 15 %. I learned how quick back‑of‑the‑envelope calculations can guide architecture decisions and validate feasibility before diving into detailed design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
