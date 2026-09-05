---
qid: ing_c6152d5da1__star__local
question: 'Explain: Critical frontend decision: Streaming — ChatGPT System Design
  - by Neo Kim and Hayk'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 363
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:06:09-05:00'
sources: []
---

**Situation**  
At my last role I was tasked with redesigning the UI for our internal AI chat platform so that users could see responses in real time instead of waiting for a full turn to finish. The existing request‑response model caused an average 3 s delay and led to a 12 % drop in user satisfaction.

**Task**  
I needed to implement a low‑latency, scalable streaming interface that would push partial text chunks to the browser while still handling error recovery and token rate limiting.

**Action**  
I chose React with Hooks for state management and WebSocket for bi‑directional streams. On the server I wrapped the OpenAI API in an async generator that yielded tokens as they arrived, exposing them through a FastAPI endpoint backed by Uvicorn workers behind an Nginx reverse proxy. To keep the UI responsive I debounced updates every 200 ms and displayed a “typing” indicator when no token had been received for 500 ms. For fault tolerance I implemented exponential back‑off reconnection logic and cached the last partial message so users could resume seamlessly after transient drops.

**Result**  
The streaming feature cut average perceived latency from 3 s to under 600 ms, boosting user engagement by 18 % and reducing support tickets related to “slow responses” by 35 %. I learned that a well‑engineered WebSocket layer combined with thoughtful client‑side buffering can dramatically improve the feel of conversational AI without compromising reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
