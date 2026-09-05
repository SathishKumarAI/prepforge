---
qid: ing_00435d47dd__star__local
question: 'Explain: Assumptions — Design Instagram | System Design Interview | AlgoMaster.io'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 366
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:29:08-05:00'
sources: []
---

**Situation** – In my junior‑year capstone we were asked to sketch a scalable social media platform like Instagram. The client wanted a prototype that could handle millions of daily photos and real‑time feeds without breaking.

**Task** – I had to surface the key assumptions about user behavior, data volume, latency, and cost before writing any code, so the design would be realistic and defensible in an interview setting.

**Action** – First, I defined a “critical path” metric: 99th‑percentile feed load time under 2 s for 10 M active users. I assumed each user uploads ~5 photos/day, each photo averages 2 MB compressed, so we’d ingest ~100 GB/day. I then mapped out the data flow: an upload API → S3 object store + Lambda transcoder → DynamoDB metadata + Redis cache for hot feeds. For real‑time updates I assumed a Pub/Sub pattern with Kinesis and a fan‑out to user feed queues in Redis Streams, backed by a write‑through cache. I also set cost assumptions: 1 $ per GB stored/month and $0.01 per 10K read/write ops, which kept the projected monthly bill under $200k.

**Result** – The interviewers approved the assumption framework; I received full marks for clarity. In production, my prototype handled 2 M uploads/day with <1.5 s feed latency, and we stayed within budget. I learned that articulating precise assumptions turns a vague design into a measurable, defensible architecture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
