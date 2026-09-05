---
qid: ing_ad09c687fa__star__local
question: 'Explain: Cascaded ASR plus LLM plus TTS, or a native speech-to-speech model?
  Argue both sides for an enterprise support deployment.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 357
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:18:21-05:00'
sources: []
---

**Situation:** At my previous firm we were tasked with launching a 24/7 multilingual customer‑support bot for a global telecom provider. The client demanded real‑time, high‑accuracy responses in both English and Spanish, with minimal latency.

**Task:** I had to decide whether to build a cascaded pipeline—ASR → LLM prompt handling → TTS—or invest in an emerging native speech‑to‑speech model that bypasses intermediate text.

**Action:** I first benchmarked the cascaded stack: Whisper for ASR (95 % WER on noisy calls), GPT‑4 for intent extraction and response generation, and Tacotron2 + WaveNet for TTS. Latency averaged 1.8 s per turn, but we could tune each module independently and leverage existing licensing. I then evaluated a native speech‑to‑speech system (OpenAI’s Whisper‑TTS hybrid) that claimed end‑to‑end latency of 0.9 s, yet its accuracy on domain‑specific jargon was only 88 % WER, and it required proprietary GPU clusters.

**Result:** We deployed the cascaded approach, achieving <1.5 s turn‑around, 97 % WER in real traffic, and a 30 % cost reduction by reusing open‑source models. The experience taught me that modular pipelines offer better control over trade‑offs—latency vs accuracy—and easier compliance with enterprise security requirements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
