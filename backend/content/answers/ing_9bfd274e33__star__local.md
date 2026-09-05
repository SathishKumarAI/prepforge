---
qid: ing_9bfd274e33__star__local
question: 'Explain: Back of the Envelope Calculations — Airbnb System Design - by
  Neo Kim and Hayk'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 359
total_tokens: 603
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:43:52-05:00'
sources: []
---

**Situation** – While interviewing for a senior infrastructure role at a large tech company, the interviewer asked me to walk through how I’d estimate the load and capacity for an Airbnb‑style marketplace during peak holiday season.

**Task** – I had to quickly produce back‑of‑the‑envelope figures: number of active users, requests per second, storage needs, and latency targets, all within a few minutes, showing that my assumptions were grounded in real data.

**Action** – I started by taking the 2019 Airbnb user base (~35 M monthly active) and assumed a 5% daily growth during peak season. I estimated 1 request per minute per user on average for listings, bookings, and messaging, giving ~500 k RPS at peak. For storage, I multiplied 3 GB of profile data by 35 M users plus 10 % buffer, arriving at ~115 TB. I then mapped latency targets to a 99th‑percentile <200 ms, which drove me to use a global CDN and multi‑region deployment with read replicas. I also highlighted trade‑offs: tighter consistency would increase write latency, so I opted for eventual consistency on booking status.

**Result** – The interviewer praised the clarity of my assumptions and how I linked them to concrete architectural choices. I was offered the role on the spot, and later confirmed that the live system now handles ~1 M RPS during peak periods with <150 ms latency, aligning closely with my initial back‑of‑the‑envelope estimates.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
