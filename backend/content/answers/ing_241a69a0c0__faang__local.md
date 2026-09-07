---
qid: ing_241a69a0c0__faang__local
question: 'Explain: High-level architecture — Realtime Voice Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 557
total_tokens: 789
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:08:24-05:00'
sources: []
---

**Clarify**  
You’re asking for a *high‑level* design of a real‑time voice agent (think Alexa/Google Assistant). I’ll assume the goal is to accept spoken user input, interpret intent, generate an answer, and speak it back with minimal latency (< 200 ms after utterance end). We’ll focus on cloud‑centric architecture; edge caching can be added later.

**Approach**  
1. **Capture** – microphone → local buffer → encrypted stream to the server.  
2. **ASR (Automatic Speech Recognition)** – a streaming model that emits partial transcripts in real time.  
3. **NLU (Natural Language Understanding)** – intent + slot extraction from the transcript; optionally use a language‑model decoder for disambiguation.  
4. **Dialog Manager** – state machine / RNN policy deciding next action.  
5. **Response Generation** – either rule‑based text or LLM‑driven text.  
6. **TTS (Text‑to‑Speech)** – neural vocoder that streams audio frames to the user.  
7. **Playback** – local speaker, with low‑latency codec.

All services run behind a load balancer; each component is stateless except the dialog manager which holds per‑session context in Redis or Memcached.

**Depth**  
- ASR: streaming Transformer (e.g., Whisper‑tiny) on GPU, 10 ms latency per frame.  
- NLU: BERT fine‑tuned for intent/slot; fallback to rule‑based if confidence < 0.7.  
- Dialog: finite‑state with reinforcement learning policy.  
- TTS: FastSpeech‑2 + HiFi‑GAN vocoder, 30 ms latency per utterance chunk.  
Complexity: O(1) per frame for ASR; overall system latency ≈ 150–200 ms.

**Edge Cases**  
- Noisy input → confidence drop → “I didn’t catch that” prompt.  
- Long queries → buffer overflow → truncate and ask to repeat.  
- Network jitter → local buffering + graceful degradation to text‑only fallback.

**Optimize & Communicate**  
We can reduce latency by moving ASR/ TTS to the edge (e.g., on-device inference) and keep only NLU/DL in the cloud. Profiling each hop reveals bottlenecks; we’d iterate with A/B tests on user satisfaction. I’ll present this diagrammatically, highlight trade‑offs between accuracy vs latency, and explain how observability (latency metrics, error rates) drives continuous improvement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
