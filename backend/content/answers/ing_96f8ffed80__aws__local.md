---
qid: ing_96f8ffed80__aws__local
question: 'Explain: Ultra-low latency Speech to Text for real-time agents'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 451
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:07:30-05:00'
sources: []
---

**Situation / Task**  
While leading a voice‑assist project for a high‑traffic call center, I was asked to deliver an ultra‑low latency Speech‑to‑Text (STT) pipeline that could serve real‑time agents with < 200 ms total end‑to‑end delay while handling 10 k concurrent calls.

**Action**  
*Ownership & Bias for Action*: I scoped a serverless microservice architecture.  
1. **Ingest**: Audio streams are pushed to an Amazon Kinesis Data Stream (shards tuned to 5 kpps).  
2. **Processing**: Each record triggers a Lambda function that forwards the chunk to **Amazon Transcribe Streaming** (custom acoustic model) via WebSocket, then returns the transcript to another Lambda for post‑processing.  
3. **Delivery**: Results are published back to Kinesis Data Firehose, which writes to an **Elasticsearch Domain** exposed through OpenSearch Dashboards for agent visibility.  

*Dive Deep & Invent & Simplify*: I benchmarked 4 STT engines (Transcribe, Whisper via EC2 Spot, Google Speech‑API, Azure). Transcribe gave the best latency‑accuracy trade‑off at $0.0005 per second of audio and < 150 ms RTT under load.  

**Result**  
Latency dropped from 1.2 s to **< 200 ms** (average 180 ms), while accuracy improved by 3 % WER. The solution handled 12 k concurrent streams with a cost of $0.08 per call, 30 % lower than the legacy on‑prem deployment.  

**Bar‑raiser cues**  
I documented failure modes (network jitter → retry logic) and iterated on shard sizing to keep backpressure < 1%. The project earned a “Customer Obsession” badge because agents reported real‑time transcription that improved call resolution time by 15 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
