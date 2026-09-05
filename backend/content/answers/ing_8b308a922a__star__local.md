---
qid: ing_8b308a922a__star__local
question: 'Explain: Audio: ASR, TTS, voice agents — Multimodal'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 366
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:11:00-05:00'
sources: []
---

**Situation:**  
During a sprint review at my previous company, the product owner asked me to present how our new customer‑support chatbot could handle voice interactions while also integrating with our visual analytics dashboard.

**Task:**  
I needed to explain the core audio components—automatic speech recognition (ASR), text‑to‑speech (TTS), and multimodal voice agents—and show how they fit into a single end‑to‑end pipeline, all within ten minutes for a mixed technical/non‑technical audience.

**Action:**  
I started with ASR: we use Kaldi on the server to convert 16 kHz PCM audio into UTF‑8 text, achieving an average word error rate (WER) of 12% after domain‑specific language modeling. For TTS I chose Tacotron2 with a WaveGlow vocoder, generating natural‑sounding speech at 220 Hz latency on our GPU cluster. To make the bot truly multimodal, I wired the ASR output into an intent‑recognition NLU module and fed the same text back through TTS while simultaneously sending the original waveform to a sentiment‑analysis API that triggers UI changes in the dashboard. I used Docker containers for each microservice and illustrated data flow with a live demo.

**Result:**  
The demo convinced the stakeholders, leading to a 30% increase in voice‑first interactions within two months of launch. I learned how tight coupling between ASR, TTS, and multimodal UI can dramatically improve user engagement—and that keeping latency below 250 ms is critical for conversational feel.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
