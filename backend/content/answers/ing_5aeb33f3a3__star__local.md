---
qid: ing_5aeb33f3a3__star__local
question: 'Explain: System APIs — Twittersearch'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 319
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:29:28-05:00'
sources: []
---

**Situation:**  
In my last role I was tasked with building a real‑time sentiment dashboard for a client’s marketing team. They wanted to see how their brand was being discussed on Twitter during product launches, but the existing data pipeline only pulled tweets once a day from a legacy scraper.

**Task:**  
I needed to replace that approach with a live feed that could ingest, filter, and store relevant tweets in real time while keeping API usage within Twitter’s rate limits.

**Action:**  
I switched to the Twitter Search API v2, using its “filtered stream” endpoint. I first defined a set of match rules (keywords, hashtags, and user IDs) to limit traffic. Then I wrote an async Go service that opened a WebSocket connection, parsed each tweet JSON payload, extracted fields (text, author_id, created_at), and pushed them into a Kafka topic for downstream processing. To stay under the 450 requests per minute cap, I implemented exponential backoff and a rotating set of bearer tokens. Finally, I built a lightweight Flask app that queried the Kafka stream to serve live sentiment scores via a WebSocket to the dashboard.

**Result:**  
The new pipeline delivered tweets with <2 seconds latency, increased the client’s real‑time insights by 4×, and reduced API calls by 70% through efficient filtering. I learned how to balance throughput and rate limits while designing scalable streaming architectures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
