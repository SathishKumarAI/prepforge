---
qid: ing_59234227ac__star__local
question: 'Explain: The Two Architectures — Realtime Voice Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 369
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:26:03-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we were tasked with launching a real‑time voice assistant for our mobile banking app. The user base was already demanding instant responses to balance checks and transaction requests, so latency had to be under 200 ms.

**Task:**  
I needed to design the system architecture that would support low‑latency speech recognition, natural language understanding, and text‑to‑speech synthesis while scaling to thousands of concurrent users during peak hours.

**Action:**  
I chose a two‑layer approach:  
1. **Edge inference layer** – deployed on-device models (PocketSphinx for wake‑word detection, a lightweight BERT variant for intent classification) so that the first pass of processing happened locally, eliminating round‑trip latency.  
2. **Cloud orchestration layer** – used gRPC with HTTP/2 to stream audio to a Kubernetes cluster running TensorFlow Serving for the heavy NLP pipeline (entity extraction, dialogue management). I integrated Redis Streams for real‑time message queuing and OpenTelemetry for distributed tracing. To keep costs low, I auto‑scaled the inference pods based on CPU usage thresholds and cached frequent responses in Memcached.

**Result:**  
The end-to-end response time dropped from 1.2 s to 140 ms, achieving a 95% success rate under load. User satisfaction scores rose by 18 points in the post‑launch survey, and we cut server costs by 22% through efficient scaling. I learned that combining edge inference for low‑level tasks with cloud orchestration for complex reasoning is key to building truly realtime voice agents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
