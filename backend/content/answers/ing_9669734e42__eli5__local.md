---
qid: ing_9669734e42__eli5__local
question: 'Explain: How do you evaluate an LLM feature online? Design the A/B test
  and name the implicit feedback signals you''d use.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 261
total_tokens: 434
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:36:13-05:00'
sources: []
---

Imagine a new recipe is being tested in a cooking show that streams online. To see if viewers love it, you split the audience into two groups: one sees the original recipe (A) and the other sees the updated version with a fancy garnish (B). After they finish watching, you watch how they react without asking them directly.

For an LLM feature you do the same A/B test. Randomly serve users either the old or new language model in real‑time chats. Then collect *implicit feedback*—signals that show engagement without explicit ratings:

- **Click‑through**: did they click a suggested link?  
- **Time on page**: how long did they stay chatting?  
- **Scroll depth / scrolling speed**: did they scroll through the answer fully?  
- **Follow‑up questions**: did they ask more after the first reply?  
- **Re‑engagement**: did they return to chat later?

By comparing these signals between groups, you can tell if the new feature truly improves user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
