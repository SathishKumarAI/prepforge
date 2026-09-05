---
qid: ing_5234d2b69f__star__local
question: How is a system prompt for a long-running agent different from one for a
  single-shot feature?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 334
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:12:38-05:00'
sources: []
---

**Situation**  
At my last job I built an AI‑driven customer support bot that ran continuously on our helpdesk, versus a separate one‑time FAQ generator we had to deploy for a product launch.

**Task**  
I needed to craft system prompts that would keep the long‑running agent coherent over hours of dialogue while ensuring the single‑shot model stayed precise and concise for instant answers.

**Action**  
For the persistent bot I wrote an evolving prompt: it included a “memory” section that appended each user turn, a “role” directive emphasizing empathy and escalation rules, and a “context window” clause limiting how far back to look. I also added a “fallback policy” so if the model drifted, it would reset to a neutral stance. For the one‑shot FAQ tool I kept the prompt static: a clear instruction to produce a short answer, no memory tokens, and a “tone” flag set to formal. I used OpenAI’s chat API with different temperature settings (0.2 for the bot, 0.6 for the FAQ) and monitored token usage.

**Result**  
The long‑running agent maintained user context over 15+ turns with only 3% error in intent detection, while the single‑shot model delivered accurate answers in under 200 ms per request. I learned that continuous agents require a memory‑aware prompt structure, whereas one‑time prompts benefit from simplicity and tight constraints to avoid drift.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
