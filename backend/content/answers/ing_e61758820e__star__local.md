---
qid: ing_e61758820e__star__local
question: 'Explain: Cascade or native speech-to-speech — Realtime Voice Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 334
total_tokens: 573
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:08:04-05:00'
sources: []
---

**Situation:**  
At my last role I was tasked with launching a real‑time customer support bot for our telecom client. Their SLA demanded sub‑500 ms response time and the bot had to understand complex billing queries in multiple languages.

**Task:**  
I needed to decide between building a cascade pipeline (ASR → NLP → TTS) or a native end‑to‑end speech‑to‑speech model, while keeping latency low and maintaining high accuracy on domain jargon.

**Action:**  
I prototyped both approaches. For the cascade I used Whisper for ASR, a fine‑tuned BERT for intent extraction, and Tacotron‑2 + WaveGlow for TTS, all running on an edge GPU cluster; I applied model quantization and parallel inference to shave 120 ms off each stage. For the native model I explored SpeechSynthesisTransformer, but its inference time was 1.4 s even after pruning, and it struggled with domain‑specific terminology. I also benchmarked custom phoneme embeddings for the cascade TTS to improve pronunciation.

**Result:**  
The cascade solution met the <500 ms SLA, achieved 92% intent accuracy on a live test set, and reduced operational cost by 30% versus the native approach. I learned that careful model selection, quantization, and pipeline parallelism are critical when real‑time voice agents must balance speed with domain fidelity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
