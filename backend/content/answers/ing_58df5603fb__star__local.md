---
qid: ing_58df5603fb__star__local
question: 'Explain: may not get the most recent put — AWS re:Invent 2018: Amazon DynamoDB
  Under the Hood: How We Built a Hyper-Scale Database (DAT321)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 263
output_tokens: 322
total_tokens: 585
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:25:17-05:00'
sources: []
---

**Situation** – In a real‑time ad bidding platform, we had to process millions of bid updates per second and serve ad impressions with sub‑millisecond latency. Our data store was Amazon DynamoDB because it offered single‑digit millisecond reads and writes at scale.

**Task** – I needed to guarantee that every user’s most recent click or conversion event was reflected in the next impression decision, but we also had to keep read throughput high enough for our traffic spike of 10 M requests per second.

**Action** – I chose DynamoDB’s *eventual consistency* mode for most reads and implemented a small “shadow” table with *strongly consistent* reads only on the critical path (the impression decision). When a write arrived, we used conditional writes (`IF NOT EXISTS`) to avoid lost updates and leveraged DynamoDB Streams to trigger an asynchronous Lambda that updated the shadow table. This split‑traffic approach kept the majority of reads fast while still ensuring that the latest put could be retrieved when it mattered most.

**Result** – The system handled 12 M RPS with <5 ms latency on average, and the probability of serving stale data dropped from 3% to <0.01%. I learned how to balance consistency guarantees against throughput by selectively applying strong consistency only where business impact is highest.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
