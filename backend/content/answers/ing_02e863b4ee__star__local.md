---
qid: ing_02e863b4ee__star__local
question: 'Explain: Functional — Realtime Voice Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 378
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:34:07-05:00'
sources: []
---

**Situation** – In early 2023 I was leading a sprint for an on‑site customer support chatbot that needed to handle live calls instead of just text. Our KPI was to reduce average first‑contact resolution time from 5 minutes to under 2 minutes, and we had only eight weeks before the product launch.

**Task** – Build a functional real‑time voice agent that could understand spoken queries, route them to the right knowledge base article, and hand off to a human if needed—all while keeping latency below 200 ms and maintaining an 85 % accuracy rate on intent detection.

**Action** – I chose Whisper for low‑latency ASR, fine‑tuned it with our domain transcripts. For intent classification I built a lightweight Transformer in PyTorch and wrapped it in FastAPI for sub‑50 ms inference. We integrated WebRTC on the frontend to stream audio directly to the server via gRPC. To handle hand‑offs we used Twilio’s programmable voice API, passing the last utterance as context. Continuous integration pipelines ran unit tests on each model update, and I set up a real‑time monitoring dashboard in Grafana to flag latency spikes.

**Result** – The final agent cut first‑contact resolution time to 1.8 minutes (a 64 % improvement), achieved 88 % intent accuracy, and maintained sub‑200 ms latency under load. Post‑launch feedback showed a 30 % drop in customer churn for the support channel. I learned that marrying lightweight models with edge‑first streaming APIs is key to delivering smooth real‑time voice experiences.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
