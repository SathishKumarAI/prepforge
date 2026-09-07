---
qid: ing_8c71aa5216__faang__local
question: 'Explain: Telephony realities — Realtime Voice Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 526
total_tokens: 758
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:10:49-05:00'
sources: []
---

**Clarify**  
You’re asking how a real‑time voice agent (e.g., IVR with speech‑to‑text, intent detection, and text‑to‑speech) works in practice. I’ll assume: 1) the call is streamed to our servers; 2) we need sub‑200 ms latency from utterance to response; 3) reliability ≥99.9 % across a global PSTN network.

**Approach**  
1. Capture audio → edge gateway (VoIP/SIP).  
2. Stream chunks to a low‑latency STT service (WebRTC + gRPC).  
3. Feed ASR output into intent/NLU pipeline (BERT‑based or RNN) and decide action.  
4. Generate response via TTS, synthesize, stream back.  
5. Use stateful session manager for dialog context.

**Depth**  
- **STT**: use a streaming Whisper/DeepSpeech model on GPU; 50 ms per 1‑second audio chunk, batching reduces overhead.  
- **NLU**: lightweight transformer (DistilBERT) fine‑tuned on call logs; inference <30 ms.  
- **TTS**: Tacotron2 + WaveRNN for natural voice; pre‑buffering 0.5 s to hide jitter.  
- **Latency budget**: 50 ms (STT) + 30 ms (NLU) + 20 ms (logic) + 50 ms (TTS) = 150 ms, leaving margin for network jitter.  
- **Scalability**: autoscale via Kubernetes with a global CDN of edge nodes; use gRPC multiplexing to keep connections alive.

**Edge Cases**  
- Noisy background → noise‑robust STT or fallback to DTMF.  
- Network drop → graceful reconnection and session persistence.  
- Unrecognized intent → escalation to human agent after 3 failed attempts.  
- Regulatory compliance (GDPR, HIPAA) → on‑prem encryption and data retention controls.

**Optimize & Communicate**  
We can reduce cost by quantizing models (INT8), using serverless inference for low‑volume periods, and caching frequent responses. I’d present a latency histogram to stakeholders, showing 95th percentile <200 ms, and outline the failover diagram to assure reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
