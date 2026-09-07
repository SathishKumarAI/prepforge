---
qid: ing_8756187dc3__faang__local
question: 'Explain: Latency masking — Realtime Voice Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 560
total_tokens: 792
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:58:44-05:00'
sources: []
---

**Latency Masking – Real‑Time Voice Agent**

| Step | What I’d do |
|------|-------------|
| **1️⃣ Clarify** | *Problem:* Reduce perceived delay between a user’s spoken input and the agent’s reply while keeping CPU usage low. <br>*Assumptions to confirm:*  • Max end‑to‑end latency target (e.g., < 200 ms). <br>• Available bandwidth, network jitter profile. <br>• Speech‑recognition & TTS engine latencies. |
| **2️⃣ Approach** | 1. *Pipeline segmentation* – split speech‑to‑text and text‑to‑speech into parallel stages with minimal blocking. <br>2. *Pre‑fetching & caching* – keep a small buffer of synthesized phonemes ready for the next utterance. <br>3. *Adaptive buffering* – dynamically adjust jitter buffers based on network stats. |
| **3️⃣ Depth** | • Use a **two‑stage pipeline**: ASR runs on the first few hundred ms; NLU & response planning run concurrently in background threads, outputting a partial intent before ASR completes. <br>• TTS is streamed phoneme‑by‑phoneme via WebRTC‑style RTP packets, allowing playback to start as soon as the first packet arrives. <br>• Latency ≈ ASR latency + NLU latency + smallest TTS buffer (~30 ms). <br>• Complexity: O(1) per utterance; trade‑off is increased memory for partial buffers. |
| **4️⃣ Edge Cases** | • High jitter → fallback to a larger jitter buffer, accepting >200 ms but avoiding glitches.<br>• ASR failure mid‑stream → immediately synthesize a “sorry” apology using cached phrase. <br>• CPU spikes → drop non‑essential features (e.g., sentiment analysis) temporarily. |
| **5️⃣ Optimize & Communicate** | • Profile each stage; if NLU dominates, consider lightweight rule‑based fallback for short utterances. <br>• Explain to interviewers that latency masking is about *overlap* and *predictive buffering*, not just “speed up”. <br>• Emphasize trade‑offs: lower buffer → higher risk of underrun; larger buffer → better quality but more delay. |

**Bottom line:** By overlapping ASR, NLU, and streamed TTS with adaptive jitter buffering, a real‑time voice agent can keep perceived latency below 200 ms while gracefully handling network or CPU hiccups.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
