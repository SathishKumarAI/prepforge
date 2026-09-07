---
qid: ing_6a6a94e16a__aws__local
question: Walk me through streaming TTS. How do you chunk input text, and how do you
  size the jitter buffer?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 409
total_tokens: 651
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:25:04-05:00'
sources: []
---

**Situation / Task**  
I was tasked to build a low‑latency streaming TTS service for an Alexa‑style skill that had to support real‑time dictation and voice‑to‑text feedback. The goal was 200 ms end‑to‑end latency while keeping CPU usage < 2 % on a spot instance.

**Action**  
*Chunking*: I split the input into **synthetic utterances of ≤ 30 characters** (≈ 1–2 seconds of audio). This size balances tokenization overhead and speech synthesis granularity.  
*Jitter buffer*: Using the “Voice Engine” API, I sized a circular buffer to hold **3 × the average packet duration** (~ 90 ms) plus a safety margin for network jitter. The buffer is dynamically adjusted by monitoring RTT; if RTT > 30 ms, we increase size by 20 % until the max threshold of 150 ms.

I implemented this with **AWS Lambda@Edge** for edge‑processing and **Amazon Polly Streaming API** for real‑time synthesis. A small Go microservice on an EC2 Spot instance orchestrated chunking, buffer sizing, and error handling.

**Result**  
Latency dropped from 400 ms to **210 ms average**, with 99.8 % of requests under the target. CPU usage stayed below 1.7 %. The solution was adopted in two flagship skills, reducing support tickets by 35 %.

**Reflection (Bar‑raiser lens)**  
I owned the end‑to‑end flow, dived deep into network jitter statistics, quantified impact with real metrics, and learned that adaptive buffer sizing is critical—initially I over‑buffered, which caused needless latency. This iteration demonstrates ownership, data‑driven decision making, and continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
