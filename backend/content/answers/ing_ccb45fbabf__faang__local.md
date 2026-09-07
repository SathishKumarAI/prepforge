---
qid: ing_ccb45fbabf__faang__local
question: 'Explain: Turn taking — Realtime Voice Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 524
total_tokens: 755
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:36:24-05:00'
sources: []
---

**Clarify**  
The interviewer asks for a design of a *turn‑taking* component in a real‑time voice assistant (e.g., Alexa/Google Assistant). Key assumptions:  
1. Speech input is streamed via ASR; we receive partial hypotheses.  
2. The agent must decide when to stop listening and start speaking, minimizing user interruption and latency.  
3. Constraints: limited CPU on edge devices, deterministic latency (<200 ms), robust to background noise.

**Approach**  
1. **Signal‑level cues:** Voice activity detection (VAD) with confidence scores.  
2. **Content cues:** ASR confidence, presence of pause tokens, and keyword spotting (“hey assistant”).  
3. **User intent model:** Lightweight LSTM that classifies partial transcripts as *utterance complete* or *continuation*.  
4. **Decision policy:** Finite‑state machine (FSM) with thresholds on VAD silence duration (e.g., 400 ms) and confidence.  
5. **Fallbacks:** If the user pauses longer than a timeout, trigger “are you still there?”; if not answered within 1 s, end turn.

**Depth**  
- **VAD:** Uses energy‑plus‑spectral features; updates every 10 ms → O(1) per frame.  
- **ASR confidence:** Derived from beam‑search scores; threshold tuned on validation set (e.g., 0.7).  
- **FSM transitions:** `Listening → Speaking` only when *both* VAD silence >400 ms AND ASR confidence >0.7.  
- Complexity: linear in input stream length, constant memory.  

**Edge Cases**  
- Rapid speech or overlapping speakers can trigger premature speaking. Test with synthetic multi‑speaker audio.  
- Background chatter may cause false VAD triggers; validate against noisy datasets.  
- User hesitation (long pauses) could delay response; adjust timeout adaptively based on utterance length.

**Optimize & Communicate**  
- Replace LSTM with a quantized decision tree for edge deployment, reducing latency by ~30 %.  
- Log turn‑taking decisions to refine thresholds via reinforcement learning offline.  
- In an interview, explain trade‑offs: strict VAD may cut off user speech; relaxed thresholds increase lag. Conclude that a hybrid signal‑+content‑based FSM balances responsiveness and accuracy.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
