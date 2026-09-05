---
qid: ing_5234d2b69f__eli5__local
question: How is a system prompt for a long-running agent different from one for a
  single-shot feature?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 166
output_tokens: 231
total_tokens: 397
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:47:27-05:00'
sources: []
---

Think of an AI as a kitchen chef.

**Single‑shot feature (one‑time dish)**  
The chef gets a recipe card that says, “Make a chocolate cake.” The prompt is short: it tells the chef exactly what to cook and stops once the cake is done. The system only needs to know *what* to produce and nothing else.

**Long‑running agent (ongoing menu)**  
Now imagine the chef has to run a whole restaurant for a week. A “system prompt” here is like a master menu that says, “You’re running a cafe: greet guests warmly, keep track of orders, remember customers’ preferences, update inventory, and adjust recipes as needed.” The prompt must guide behavior over time, set priorities, and keep context from one interaction to the next. It’s not just a single instruction but a continuous frame that shapes every decision.

So, the single‑shot prompt is a quick command; the long‑running prompt is a living handbook that keeps the AI on track through many steps.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
