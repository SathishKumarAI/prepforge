---
qid: ing_5f4d41c36c__faang__local
question: Budget the end-to-end latency for a real-time voice agent. Why is time-to-first-audio
  a different problem from an LLM's time-to-first-token?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 531
total_tokens: 786
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:25:51-05:00'
sources: []
---

**Clarify**  
You’re asked to budget *end‑to‑first‑audio* latency for a real‑time voice agent and explain why it differs from an LLM’s *time‑to‑first‑token*.  
Assumptions:  
- Client device captures microphone audio, streams to server via WebRTC/RTMP.  
- Server runs ASR → intent model → LLM or retrieval → TTS.  
- End‑to‑first‑audio = time from user start speaking until first audible speech output.

**Approach**  
1. Decompose the pipeline into: capture → network → ASR → semantic inference → generation → synthesis → playback.  
2. Identify per‑stage latencies (DSP, packetization, RTT, model inference).  
3. Sum them to obtain worst‑case and average bounds.  
4. Contrast with LLM’s first‑token: only generation step after prompt.

**Depth**  
| Stage | Typical Latency | Notes |
|-------|-----------------|-------|
| Capture & chunking | 10 ms | Microphone latency, jitter buffer |
| Network (RTT) | 30–70 ms | Depends on edge location |
| ASR inference | 80–120 ms | Model size ~50 M params |
| Intent + LLM init | 60–100 ms | Tokenization + context prep |
| First‑token generation | 20–40 ms | GPU/TPU throughput |
| TTS synthesis | 30–70 ms | WaveNet / FastSpeech |
| Playback buffer | 10 ms | Audio output latency |

Total ≈ **260–410 ms**.  
LLM’s first‑token only covers the generation step (~20–40 ms), ignoring capture, ASR, and TTS.

**Edge Cases**  
- Network jitter or packet loss → retransmission delays.  
- Model quantization errors → longer inference times.  
- Voice activity detection false negatives → wasted latency.

**Optimize & Communicate**  
*Optimization*: Place ASR/LLM on edge nodes, use async pipelines (streaming TTS), pre‑warm models, and reduce chunk size.  
*Communication*: Present a latency waterfall chart to stakeholders; explain that voice agents must account for capture and synthesis overheads, unlike pure text LLMs where only generation matters. This shows holistic thinking and awareness of real‑world constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
