---
qid: ing_f484f0bf5a__faang__local
question: 'Explain: Build a multilingual voice assistant — Models | Sarvam API Docs'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 521
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:08:38-05:00'
sources: []
---

**Clarify**  
We need to design a voice‑assistant that can understand spoken queries in multiple languages, generate natural responses, and expose its functionality via the Sarvam API (speech‑to‑text, intent extraction, response generation). I’ll assume we have access to Sarvam’s SDK, compute budget for real‑time inference, and target 5–10 major languages.

**Approach**  
1. **Speech‑to‑Text (STT)** – use Sarvam’s multilingual ASR models; fine‑tune on domain‑specific corpora if needed.  
2. **Intent & Slot Extraction** – a shared Transformer encoder trained on labeled utterances across all target languages, with language tags as additional tokens.  
3. **Response Generation** – a multi‑lingual LLM (e.g., mT5 or XGLM) fine‑tuned on conversational data; the output language is inferred from the intent or user preference.  
4. **API Layer** – Sarvam endpoints handle audio ingestion → STT → NLP pipeline → response generation → TTS back to audio, all orchestrated in a microservice.

**Depth**  
- **STT latency**: <200 ms per utterance using 8‑bit quantized models; batch inference on GPU for high traffic.  
- **NLP**: Encoder with 12 layers, 768 hidden units; fine‑tune on 1M multilingual intents → ~2 s/utterance inference.  
- **Response LLM**: 6B parameters, served via TensorRT for <500 ms generation.  
Complexity: O(n) in utterance length; memory ~4 GB per service instance.

**Edge Cases**  
- Code‑switching: embed language detection layer to split tokens.  
- Low‑resource languages: fallback to rule‑based NLU or cross‑lingual transfer.  
- Noisy audio: apply Sarvam’s denoising preprocessor and confidence thresholds before NLP.

**Optimize & Communicate**  
Future improvements include federated fine‑tuning on user devices for personalization, dynamic model scaling based on request volume, and integrating a knowledge graph for factual consistency. I’d present this as a modular pipeline, highlight latency budgets, and emphasize the use of Sarvam’s unified API to simplify deployment across platforms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
