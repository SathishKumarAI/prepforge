---
qid: ing_dc13b75546__star__local
question: Your chat agent is moving to the phone. What actually changes?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 333
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:48:06-05:00'
sources: []
---

**Situation**  
At my last startup we had a web‑based AI chatbot that handled customer support via text. The product roadmap required us to launch a native iOS/Android app so users could talk to the agent on their phones, especially in regions where mobile data is cheaper than broadband.

**Task**  
I was tasked with redesigning the user flow and backend to support real‑time voice interactions while keeping latency under 200 ms, preserving battery life, and ensuring GDPR compliance for recorded calls.

**Action**  
First, I replaced the WebSocket text channel with a low‑latency gRPC stream that compressed audio using Opus. On the device side I implemented a speech‑to‑text pipeline with Whisper on-device to keep user data local until transcription was needed. To save battery, I used adaptive sampling: only sending frames when voice activity was detected. For privacy, all recordings were encrypted at rest and deleted after 24 h unless the user opted in for longer retention. Finally, I added a fallback text UI for users on low‑bandwidth networks.

**Result**  
The launch saw a 35 % increase in daily active sessions, and call completion rates rose from 78 % to 92 %. Latency stayed below 180 ms for 95 % of interactions. I learned that mobile constraints demand both smarter network protocols and on-device processing to balance performance, cost, and privacy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
