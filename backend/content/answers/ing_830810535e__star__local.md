---
qid: ing_830810535e__star__local
question: 'Explain: Streaming summarisation within token limits'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 329
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:55:15-05:00'
sources: []
---

**Situation:** In my last role at a fintech startup, we launched a real‑time analytics dashboard that streamed millions of transaction logs per minute. Our customers needed concise daily summaries but the language model we used had a strict 4,096‑token limit.

**Task:** I was tasked with designing a streaming summarisation pipeline that could ingest live data streams, keep summaries within token constraints, and still deliver actionable insights each hour.

**Action:** First, I implemented chunking: every 10 seconds of log data was batched into 512‑token segments. Using Python’s `asyncio` and Kafka, I fed these chunks to the model via a sliding window approach. To stay under limits, I applied a two‑stage summarisation—an initial lightweight rule‑based reduction (drop duplicates, strip timestamps) followed by a transformer‑based summariser that capped output at 300 tokens per chunk. I stored intermediate summaries in Redis and used attention masking to avoid re‑processing already summarised content.

**Result:** The final system produced accurate hourly summaries with an average latency of 2 seconds and kept token usage below 4,000 across all streams. Customer satisfaction scores rose from 68% to 92%, and we reduced server costs by 35% because the summariser consumed far fewer compute resources. I learned that careful chunking and hybrid summarisation can turn a token‑bounded model into a scalable streaming solution.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
