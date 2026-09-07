---
qid: ing_160ac033e2__faang__local
question: 'Explain: Phone screen — OpenAI System Design Interview (2026 Guide) - Exponent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 602
total_tokens: 842
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:34:35-05:00'
sources: []
---

**Clarify**  
We’re asked to design a system that runs on phones and uses OpenAI’s models (e.g., GPT‑4) for real‑time conversational AI—think chat or voice assistant. Clarifying points:  
* Target device: Android/iOS, 64 GB RAM, 2 GHz CPU, Wi‑Fi + cellular.  
* Latency budget: < 200 ms per token for a smooth UX.  
* Data privacy: user messages must stay local unless explicitly opted in to cloud logging.  
* Scale: millions of daily active users, each making ~10 interactions/day.

**Approach**  
1. **Local‑first inference** – run a distilled model (e.g., GPT‑4o mini) on device for instant responses.  
2. **Edge‑to‑cloud fallback** – if local GPU/TPU is insufficient or the user wants higher fidelity, stream to OpenAI’s API via secure WebSocket.  
3. **Hybrid cache & prefetch** – keep recent conversation context locally; pre‑fetch next prompts based on intent prediction.  
4. **Security layer** – encrypt all payloads (AES‑256) and use hardware-backed key storage for keys.

**Depth**  
*Model*: 1B‑parameter distilled transformer, quantized to int8, ~200 MB size, inference < 10 ms per token on A12 CPU.  
*Architecture*:  
- **Client**: UI → Intent recognizer → LocalModel (inference) ↔ CloudProxy.  
- **CloudProxy**: Auth‑gateway, throttling, request bundling to OpenAI’s endpoint.  
*Data flow*: User prompt → local preprocess → tokenization → inference. If fallback needed, send encrypted prompt over WebSocket; receive streaming tokens and render incrementally.  
*Complexity*: Local inference O(n) per token; network path adds ~50 ms RTT.  

**Edge Cases**  
*No internet*: fall back to cached responses or offline model only.  
*Device overheating*: throttle GPU usage, lower precision.  
*User privacy opt‑out*: disable cloud fallback entirely.  
*Model drift*: update distill on OTA with differential patches.

**Optimize & Communicate**  
- **Performance**: Use mixed‑precision and model pruning to keep battery impact < 2%.  
- **Scalability**: Cloud side uses autoscaling pods; rate limits per user ID.  
- **Explainability**: Show token attribution UI for transparency.  
When presenting, walk through each layer, justify latency targets, and highlight how privacy is baked into the data path. This shows clear problem‑solving, technical depth, and awareness of trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
