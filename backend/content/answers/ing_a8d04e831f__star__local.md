---
qid: ing_a8d04e831f__star__local
question: Design barge-in for a voice agent. What breaks if you get it wrong?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 306
total_tokens: 548
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:10:39-05:00'
sources: []
---

**Situation:**  
In my last role at a fintech startup, we were launching a new mobile banking assistant that needed to interrupt users during phone calls to offer real‑time credit offers. The feature had to be seamless and compliant with telecom regulations.

**Task:**  
I was tasked with designing the barge‑in logic: when to cut into the user’s conversation, how loud to play the prompt, and ensuring no violation of privacy or call quality standards.

**Action:**  
First I mapped out the call flow using Twilio’s REST API and built a state machine in Node.js that monitored audio level thresholds via WebRTC. I implemented a dynamic volume scaler so the barge‑in tone never exceeded 70 dB SPL, preventing user discomfort. To avoid legal issues, I added a “Do Not Disturb” flag that silenced prompts if the caller’s phone was muted or in airplane mode. Finally, I wrote unit tests with Jest to simulate edge cases like overlapping media streams and integrated them into our CI pipeline.

**Result:**  
The barge‑in feature launched on schedule, increasing user engagement by 18 % during promotional periods while maintaining a 0.3 % drop in call quality scores. I learned that precise audio level handling and regulatory checks are as critical as the UI design when interrupting live conversations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
