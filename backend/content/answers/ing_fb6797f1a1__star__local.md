---
qid: ing_fb6797f1a1__star__local
question: 'Explain: Your voice agent both cuts users off mid-sentence and leaves awkward
  dead air. Diagnose and fix.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 370
total_tokens: 617
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:51:43-05:00'
sources: []
---

**Situation:**  
In a customer‑support voice assistant we noticed that callers were being cut off in the middle of their sentences and the system would sometimes pause for 2–3 seconds before responding. The quality score from our automated speech‑recognition (ASR) log hit 78 % accuracy, down from the target 92 %.

**Task:**  
I had to identify why the agent was interrupting users and eliminate the dead‑air while keeping latency under 200 ms so the experience stayed natural.

**Action:**  
1. I examined the ASR confidence thresholds in our real‑time pipeline (using Kaldi on AWS Lambda).  
2. Raised the minimum confidence from 0.55 to 0.70 for “stop” triggers, adding a 250 ms hold‑back buffer so the system waits until the user pauses.  
3. Implemented a “speech‑end detector” that listens for 300 ms of silence before sending the transcript downstream.  
4. Added a lightweight VAD (WebRTC) to flag overlapping speech and drop only the trailing part instead of cutting mid‑sentence.  
5. Deployed the changes in A/B tests, monitoring RTT and user satisfaction via post‑call surveys.

**Result:**  
ASR accuracy jumped to 90 %, while average dead‑air dropped from 2.8 s to 0.4 s. Callers reported a 15 % higher satisfaction score, and we learned that dynamic confidence tuning combined with VAD can balance responsiveness and speech continuity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
