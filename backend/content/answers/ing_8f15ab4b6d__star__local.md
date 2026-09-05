---
qid: ing_8f15ab4b6d__star__local
question: 'Explain: Listen Mode — Course Introduction | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 370
total_tokens: 606
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:19:10-05:00'
sources: []
---

**Situation** – While leading the architecture of a new e‑learning platform, we discovered that students were dropping off within the first minute of each course introduction video. The analytics dashboard showed a 35 % drop‑rate and low engagement scores.

**Task** – I was tasked with designing a “listen mode” feature: a lightweight, real‑time audio transcription service that would allow learners to watch subtitles or switch to an audio‑only stream without buffering, thereby improving accessibility and reducing early abandonment.

**Action** – First, I set up a Kafka topic to ingest video chunks as they streamed from the CDN. Using Apache Flink for low‑latency processing, I fed each chunk into a pre‑trained Whisper model on GPU instances to generate captions within 200 ms. The captions were stored in Redis Streams and served via a WebSocket API so the front‑end could overlay subtitles instantly or toggle to an audio‑only playback that bypassed the video decoder entirely. To keep costs down, I employed spot instances for inference and throttled transcription frequency during peak load.

**Result** – After rolling out listen mode, drop‑rate fell from 35 % to 18 %, and average watch time on introductions rose by 22 %. The team learned that real‑time, low‑latency transcription can be scaled cost‑effectively with streaming pipelines, and that providing multiple consumption modes significantly boosts engagement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
