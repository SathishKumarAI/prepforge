---
qid: ing_02e863b4ee__faang__local
question: 'Explain: Functional — Realtime Voice Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 564
total_tokens: 794
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:50:45-05:00'
sources: []
---

**Functional – Real‑Time Voice Agent**

| Step | What I’d say |
|------|--------------|
| **Clarify** | *Restate*: We need a voice agent that can listen to a user’s spoken query, process it immediately, and reply with speech—no noticeable lag. <br>*Assumptions*: 1) Target devices have microphones & speakers; 2) Network latency is < 200 ms for “real‑time”; 3) We’ll use cloud ASR/STT and TTS; 4) The agent handles basic intents (weather, calendar). |
| **Approach** | 1. Capture audio in small chunks (e.g., 20–30 ms windows). <br>2. Stream to a low‑latency speech‑to‑text API (WebSocket). <br>3. While streaming, run an incremental intent recognizer that updates as more text arrives. <br>4. As soon as confidence > threshold, trigger the corresponding action and stream back text-to-speech in overlapping chunks. |
| **Depth** | - **ASR**: use a streaming model (e.g., Whisper‑Tiny or Google Speech API) with *beam search* tuned for speed. <br>- **Intent NLU**: lightweight transformer (DistilBERT) fine‑tuned on intent data; run inference on GPU/Edge for < 30 ms per chunk. <br>- **TTS**: neural vocoder like WaveRNN or FastSpeech2, streamed via a FIFO buffer to avoid pauses. <br>Complexity: O(1) per 20 ms frame; memory ~10 MB. Trade‑off between latency and accuracy—tight thresholds reduce errors but may cut off user speech prematurely. |
| **Edge Cases** | - Background noise → use beamforming or noise‑robust front‑end.<br>- Rapidly changing intent (e.g., “Turn on the lights, then set a timer”) → maintain context stack.<br>- Network hiccup → local fallback to a simple rule‑based recognizer. |
| **Optimize & Communicate** | 1) Profile each stage; use async I/O and batch inference where possible. <br>2) Compress audio with Opus (low bitrate). <br>3) Deploy on edge for latency‑critical devices, fall back to cloud when bandwidth permits.<br>During interviews, I’d narrate how incremental streaming reduces perceived lag, justify the chosen models by citing benchmark latencies, and outline fallback paths to keep the system robust. |

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
