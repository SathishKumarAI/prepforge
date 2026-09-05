---
qid: ing_a8948177ab__eli5__local
question: 'Explain: Design a red-teaming programme for an LLM product: manual vs automated,
  pre-launch vs continuous, and how findings feed back.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 263
total_tokens: 439
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:05:19-05:00'
sources: []
---

Think of the LLM as a new kitchen in a busy restaurant. A **red‑team** is like a “taste‑tester” squad that deliberately tries to trick the chef into making bad dishes, so the kitchen can fix them before opening and keep improving after.

- **Manual vs automated**: Manual testers are chefs who walk through recipes, tasting each step and writing notes (slow but deep insight). Automated tests are kitchen gadgets that run every recipe quickly on a schedule (fast, repeatable, but may miss subtle flavors).

- **Pre‑launch vs continuous**: Before the restaurant opens, you do a full “soft launch” with both chefs and gadgets to catch big bugs. Once open, red‑teamers keep sampling menus daily, spotting new problems that customers might encounter.

- **Feedback loop**: Every taste note—whether from a human or gadget—is logged into a shared cookbook. Developers read the cookbook, patch the recipes, then re‑test. Over time the kitchen becomes safer and tastier because each round of testing informs the next.

In short, mix hands‑on probing with quick scripts, start early, keep going, and always feed findings back to the recipe book.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
