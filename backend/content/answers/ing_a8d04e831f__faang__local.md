---
qid: ing_a8d04e831f__faang__local
question: Design barge-in for a voice agent. What breaks if you get it wrong?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 590
total_tokens: 829
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:17:10-05:00'
sources: []
---

**Clarify**  
We’re building *barge‑in* (interruption) for a voice assistant that runs on a smart speaker or phone. The user can speak over the agent’s speech or pause it, and the system must detect the interrupt, stop playback, buffer the new input, and resume after processing.  
Assumptions:  
- Continuous streaming audio with background noise;  
- Speech‑to‑text (STT) runs on-device or via a low‑latency API;  
- The agent’s TTS output is streamed as PCM;  
- We need < 200 ms end‑to‑end latency for a natural feel.

**Approach**  
1. **Audio demultiplexing**: split the input stream into *agent* and *user* tracks using a channel‑aware mixer.  
2. **Voice activity detection (VAD)** on the user track to detect speech onset.  
3. **Cross‑fade logic**: when VAD triggers, pause TTS output, buffer the incoming audio, run it through STT, then resume TTS after response generation.  
4. **State machine** to manage modes: `PLAYING`, `BARGE_IN_PENDING`, `PROCESSING`.

**Depth**  
- Use a lightweight VAD (e.g., WebRTC‑VAD) tuned to 30 ms windows for < 200 ms detection.  
- Buffer user audio up to 2 s to handle quick follow‑ups without data loss.  
- On interruption, flush the TTS buffer and send an *interrupt* flag to the dialogue manager; it must discard or pause any pending utterances.  
- Complexity: O(1) per frame for VAD; buffering is linear in buffered duration.  
- Trade‑offs: tighter VAD threshold reduces false positives but may miss soft starts.

**Edge Cases**  
- Background noise triggers false VAD → unwanted barge‑in.  
- User speaks during a pause → system must decide whether to treat as a new request or continuation.  
- Network lag in STT causing delay > 200 ms → user perceives unresponsiveness.  
- Multiple simultaneous microphones (e.g., room mic + headset) → channel confusion.

**Optimize & Communicate**  
To improve robustness, incorporate *confidence‑weighted VAD* using the acoustic model’s energy and spectral features; add a fallback “quiet period” before committing to barge‑in. Explain that the design balances latency with accuracy: low‑latency VAD for immediate interruption, but a buffered confirmation step prevents accidental cuts. This structure shows clear problem framing, systematic solution planning, technical depth, and awareness of failure modes—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
