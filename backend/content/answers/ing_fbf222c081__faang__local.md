---
qid: ing_fbf222c081__faang__local
question: 'Explain: The latency budget is the design — Realtime Voice Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 495
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:25:41-05:00'
sources: []
---

**Clarify**  
You’re asking how a *latency budget* drives the architecture of a real‑time voice agent (e.g., Siri or Alexa). I’ll assume:  
1) End‑to‑end latency must stay below ~200 ms for a natural user experience.  
2) The system consists of ASR → NLU → Dialogue Manager → TTS, all running on edge/cloud with network hops.

**Approach**  
1. Break the budget into per‑component slices.  
2. Quantify each slice (CPU, I/O, model inference).  
3. Optimize where variance is highest—typically ASR and network jitter.  
4. Iterate with end‑to‑end profiling to catch hidden bottlenecks.

**Depth**  
| Component | Target Latency | Typical Implementation |
|-----------|----------------|------------------------|
| Audio capture & pre‑processing | 10 ms | Microphone buffering, VAD |
| ASR inference (edge) | 70 ms | Tiny‑BERT or Whisper‑tiny on GPU/CPU |
| NLU + intent extraction | 30 ms | Light transformer or rule‑based fallback |
| Dialogue planning | 20 ms | Finite state machine + caching |
| TTS synthesis | 50 ms | Tacotron‑lite + WaveRNN on edge |

Total ≈ 200 ms. Use *pipeline parallelism* (ASR starts before full utterance ends) and *model quantization* to shave milliseconds. Network latency is hidden by batching requests or pre‑fetching models.

**Edge cases**  
- *Network drop*: fallback to local NLU/ASR; degrade gracefully.  
- *Background noise spikes*: increase VAD threshold, trigger re‑capture.  
- *Model drift*: periodic retraining and A/B testing without downtime.

**Optimize & Communicate**  
Start with a baseline 300 ms profile, then iteratively cut the largest contributors (often ASR). Communicate trade‑offs: e.g., lower‑precision models reduce latency but increase word error rate; we balance user experience against cost. Finally, document the budget in a live dashboard so ops can see when the system is near its limits and trigger auto‑scaling or fallbacks automatically.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
