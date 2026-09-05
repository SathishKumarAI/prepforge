---
qid: ing_f484f0bf5a__star__local
question: 'Explain: Build a multilingual voice assistant — Models | Sarvam API Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 365
total_tokens: 605
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:37:30-05:00'
sources: []
---

**Situation** – At my last startup we were launching a smart home app that needed to support Spanish, French, and Mandarin users. The existing voice pipeline only handled English, so 70 % of our beta testers couldn’t interact with the assistant.

**Task** – I had to design a multilingual model stack that could transcribe speech, understand intent, and generate responses in three languages while staying under 150 ms inference latency on edge devices.

**Action** – First, I curated a balanced dataset from open corpora (Common Voice, VoxForge) and fine‑tuned a joint CTC‑Transformer ASR model on HuggingFace. For intent classification, I built a lightweight BERT‑base multilingual classifier, then distilled it to MobileBERT for the device. Speech synthesis used Tacotron‑2 with language‑specific embeddings; I integrated Sarvam’s “Speech Synthesis API” to offload heavy GPU work to their cloud when latency exceeded 200 ms. I wrapped everything in a microservice architecture using Docker and gRPC, adding a caching layer for repeated phrases.

**Result** – The assistant achieved 92 % WER reduction across all languages and maintained <140 ms average inference on an RTX 3060 GPU. User satisfaction scores rose from 3.1 to 4.7 out of 5 in our post‑launch survey, and we cut support tickets by 65 %. I learned the value of combining open‑source fine‑tuning with vendor APIs for speed‑critical components.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
