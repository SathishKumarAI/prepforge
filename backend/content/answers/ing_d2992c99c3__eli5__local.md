---
qid: ing_d2992c99c3__eli5__local
question: 'Explain: Evaluation plan — Realtime Voice Agent'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 156
output_tokens: 281
total_tokens: 437
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:08:51-05:00'
sources: []
---

Imagine you’re coaching a live‑speech contest where the contestant is a virtual assistant that talks to people right now, not pre‑recorded. To know if it’s doing well, you set up a “practice round” and a “final round.”

**Practice round (pre‑deployment test)**  
You give the agent a handful of everyday questions—“What’s the weather?” or “Set an alarm for 7 a.m.”—and watch how fast it answers, whether it repeats itself, and if its words sound natural. You also check that it follows privacy rules: no personal data gets leaked.

**Final round (real‑time evaluation)**  
After launch you let real users chat with the agent while a team quietly records three things:
1. **Speed** – does the reply arrive within a few seconds?  
2. **Accuracy** – is the information correct and relevant?  
3. **User satisfaction** – do people smile, say “thanks,” or keep talking?

You gather these data, compare them to your goals (e.g., 95 % of answers under 1.5 s), tweak the model if needed, and repeat until the agent feels like a helpful human helper at the microphone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
