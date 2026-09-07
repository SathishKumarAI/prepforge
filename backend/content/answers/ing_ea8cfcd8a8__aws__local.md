---
qid: ing_ea8cfcd8a8__aws__local
question: 'Explain: Design a production voice agent. Pipeline vs speech-to-speech,
  the latency budget, and interruption handling.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 405
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:08:28-05:00'
sources: []
---

**Situation & Task (S)**  
While leading a cross‑functional team at my previous company, we were asked to launch a **production voice agent** for an e‑commerce app. The requirement was a *speech‑to‑speech* pipeline with <200 ms total latency and graceful interruption handling (e.g., user says “stop” mid‑response).  

**Action (A)**  
I chose an end‑to‑end architecture:  
1. **Amazon Transcribe Streaming** → real‑time ASR, low CPU cost.  
2. **AWS Lambda + Amazon Lex** for intent extraction and dialog management.  
3. **Amazon Polly** with a custom neural voice for TTS.  
4. A lightweight **API Gateway** front‑end feeding the stream to a **WebSocket** that pushes synthesized audio back to the client.  

To stay under 200 ms, I *dive deep* into each component’s latency profile, added an edge caching layer (CloudFront) for Polly responses, and throttled Lambda concurrency to avoid cold starts.  
Interruption handling was implemented by listening to a “stop” intent in Lex; on detection the Lambda immediately signals the WebSocket to flush any queued audio and stops further synthesis.

**Result (R)**  
The pilot achieved **95 %** of utterances within 180 ms, a 30 % reduction vs. baseline. User satisfaction scores rose from 3.8/5 to 4.6/5 in A/B testing.  

**Leadership Principles Highlighted**  
- *Customer Obsession* – prioritized user‑centric latency and interruption experience.  
- *Ownership* – took full responsibility for the end‑to‑end pipeline, cost, and failure recovery.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
