---
qid: ing_447fd46974__faang__local
question: 'Explain: Case Study 09: Real-Time Voice Agent (Phone Reservations and Helpline)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 528
total_tokens: 768
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:23:43-05:00'
sources: []
---

**Clarify**

> *Problem:* Build a real‑time voice agent that handles phone reservations and a customer helpline.  
> *Assumptions to confirm:* (1) Users dial a single number; (2) The system must recognize spoken intents (reserve, cancel, ask info); (3) It should persist state across turns; (4) Calls are time‑critical (< 3 s latency).  

**Approach**

1. **Telephony Layer:** SIP/VoIP gateway → media server (e.g., Asterisk or Twilio).  
2. **Speech Processing:** Real‑time STT with a low‑latency model (Vosk, Whisper‑tiny).  
3. **Intent & Slot Extraction:** Lightweight transformer (DistilBERT) fine‑tuned on reservation data; use rule‑based fallback for robustness.  
4. **Dialogue Manager:** Finite‑state machine + policy network to track slots and decide next action.  
5. **Backend Integration:** REST/GraphQL calls to booking database, with optimistic updates and retry logic.  
6. **TTS & Voice:** Neural TTS (Tacotron2 + WaveRNN) for natural responses; fallback to pre‑recorded prompts.

**Depth**

- *Latency:* STT ≈ 0.5 s per utterance, intent inference < 50 ms, DB roundtrip ≤ 200 ms → total < 1 s.  
- *Scalability:* Stateless microservices behind a load balancer; horizontal scaling via container orchestration (K8s).  
- *Reliability:* Circuit breaker pattern for external APIs; state persistence in Redis for session recovery.

**Edge Cases**

- Mis‑recognition → confirm intent (“Did you say reserve?”).  
- Network jitter → buffer audio and replay.  
- High call volume → auto‑queue with estimated wait time.  
- GDPR: record consent before capturing voice data.

**Optimize & Communicate**

- Profile each component; replace the transformer with a custom NLU model if > 5 % latency budget is hit.  
- Use CDN for static TTS assets to reduce load on backend.  
- Log every turn with metadata (confidence, intent) for continuous improvement.  

*Result:* A low‑latency, highly available voice agent that can handle reservations and support queries in real time, meeting FAANG expectations for performance, scalability, and maintainability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
