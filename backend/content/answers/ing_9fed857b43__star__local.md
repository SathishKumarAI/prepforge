---
qid: ing_9fed857b43__star__local
question: 'Question 5: Does the Agent Need to Learn Reusable Procedures?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 310
total_tokens: 549
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:52:02-05:00'
sources: []
---

**Situation:** At my previous company we built a conversational AI for customer support that handled thousands of tickets daily. Early on, the bot struggled with repetitive queries—each time it had to re‑engineer the same response logic from scratch.

**Task:** I was tasked with reducing the time spent on developing new intents by 40% while maintaining or improving accuracy for high‑volume issues.

**Action:** I introduced a modular “procedure library” using Python classes and a lightweight rule engine. Each reusable procedure (e.g., billing verification, password reset) was encapsulated as an object exposing `execute(context)` and `validate(context)` methods. I leveraged the existing NLP pipeline to match user intents to procedures via semantic similarity scoring, then passed the context through the chosen module. To ensure consistency, I added unit tests for each procedure and integrated continuous‑integration checks that validated output against a gold‑standard dataset.

**Result:** The bot’s development cycle dropped from 10 days per new intent to under 2 days, cutting engineering effort by 70%. Accuracy on high‑volume queries improved from 78% to 92%, and we saw a 25% reduction in ticket backlog. I learned that treating procedures as first‑class objects not only speeds iteration but also enforces clear boundaries and testability for AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
