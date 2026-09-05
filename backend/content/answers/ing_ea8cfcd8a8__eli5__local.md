---
qid: ing_ea8cfcd8a8__eli5__local
question: 'Explain: Design a production voice agent. Pipeline vs speech-to-speech,
  the latency budget, and interruption handling.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 295
total_tokens: 465
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:46:40-05:00'
sources: []
---

Think of a voice agent like a friendly kitchen assistant that can read recipes (speech‑to‑text), cook them (process the request), and serve the finished dish back out (speech‑to‑text again).  

**Pipeline vs speech‑to‑speech**  
In a *pipeline*, you first turn the user’s words into text, then run that text through a language model, and finally convert the answer back to sound. It’s like chopping ingredients, cooking them, and plating. In *speech‑to‑speech* (S2S), the assistant skips the written step; it listens directly, processes the audio, and immediately speaks out—like an apprentice who can hear the order and cook on the fly.

**Latency budget**  
The kitchen has a time limit: from “Hello” to the first bite must be under ~1 second for a smooth experience. That’s the latency budget. If any step takes too long (slow cooking, slow plating), the user feels the wait.

**Interruption handling**  
If the user says something new while the assistant is cooking, it should pause, note the interruption, and resume where it left off—just as a chef would put a pot on hold when someone rushes in with a new request. This keeps conversation fluid and prevents the agent from ignoring or repeating itself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
