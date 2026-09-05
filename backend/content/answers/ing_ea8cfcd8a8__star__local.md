---
qid: ing_ea8cfcd8a8__star__local
question: 'Explain: Design a production voice agent. Pipeline vs speech-to-speech,
  the latency budget, and interruption handling.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 386
total_tokens: 634
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:17:19-05:00'
sources: []
---

**Situation** – In my last role I was tasked with launching a voice‑first customer support agent for a telecom provider that already had an AI chatbot on web and mobile. The user base expected instant, natural conversations, so the latency budget had to stay under 300 ms from utterance end to response start.

**Task** – Build a production‑grade pipeline that could switch between a lightweight speech‑to‑text (STT) + text‑to‑speech (TTS) flow and an end‑to‑end speech‑to‑speech (S2S) model, while gracefully handling interruptions such as a user saying “stop” or “I need help”.

**Action** – I implemented a dual‑pipeline architecture: a low‑latency Kaldi STT + Tacotron 2 TTS stack for quick queries, and an ONNX‑exported S2S Whisper‑style model for complex requests. A state machine monitored the ASR confidence; if it dropped below 0.6 or the user utterance matched an “interruption” intent (via a tiny NLU classifier), the pipeline would abort the current generation, flush buffers, and return an immediate “Sure, how can I help?” prompt. We also added a 50 ms pre‑buffer to capture partial inputs, reducing perceived latency.

**Result** – The combined system achieved an average round‑trip latency of 240 ms on production traffic, with a 92% success rate for interruption handling. User satisfaction scores rose by 18 points in the post‑launch survey, and we reduced server costs by 15% through dynamic pipeline selection. I learned how to balance model complexity against real‑world latency constraints while keeping user experience smooth.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
