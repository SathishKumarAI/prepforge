---
qid: ing_e08f451c09__eli5__local
question: 'Explain: Latency Budgets — Realtime Voice Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 221
total_tokens: 379
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:31:11-05:00'
sources: []
---

Imagine you’re in a kitchen where a chef must serve a dish to a guest every time they order. The “latency budget” is the maximum amount of time the chef has from when the guest says, “I’d like soup,” until the soup arrives at the table. If the chef spends too long chopping or boiling, the guest gets impatient and the meal feels stale.  

For realtime voice agents (like a smart speaker answering questions), that budget is tiny—often less than 200 milliseconds for each spoken response. The system must quickly listen, understand, generate an answer, and speak it back before the user’s mind moves on. If any step takes longer than the allotted budget, the interaction feels laggy or broken. Thus, engineers design every part of the voice pipeline—audio capture, speech‑to‑text, language model inference, text‑to‑speech—to stay within this strict time window, just as a chef keeps each cooking step on schedule to keep diners satisfied.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
