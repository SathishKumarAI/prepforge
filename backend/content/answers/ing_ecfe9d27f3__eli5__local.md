---
qid: ing_ecfe9d27f3__eli5__local
question: Serving real-time TTS is a different capacity problem from serving a text
  LLM. Why, and how do you plan capacity?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 241
total_tokens: 414
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:50:28-05:00'
sources: []
---

Imagine two chefs in the same kitchen.  
One chef (the **text‑LLM**) prepares a huge pot of soup that can be ladled out slowly to many diners; it needs big pots and slow simmering time but can serve thousands at once because each spoonful is almost identical.  
The other chef (the **real‑time TTS** voice synthesizer) must speak each sentence aloud on demand, like a live radio host. Each “voice bite” requires instant mixing of sound waves, precise timing, and low latency—just one mic drop matters.  

Because the TTS has to finish every utterance in milliseconds, it needs many more small‑scale, ultra‑fast servers (low CPU per request) than the LLM, which can batch requests and tolerate a few seconds of delay.  
So we plan capacity by estimating how many “mic drops” we’ll get per second, adding a safety margin for peaks, and provisioning dedicated low‑latency instances—while the LLM gets larger, slower machines that can handle bulk text in parallel.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
