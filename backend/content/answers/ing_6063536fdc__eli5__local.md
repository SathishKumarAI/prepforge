---
qid: ing_6063536fdc__eli5__local
question: 'Explain: Availability in parallel vs in sequence — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 190
total_tokens: 388
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:09:17-05:00'
sources: []
---

Imagine a busy kitchen where orders come in at once. **Parallel availability** is like having several chefs each cooking different dishes simultaneously. If one chef stumbles, the others keep working, so the whole kitchen stays open and customers still get food quickly.

**Sequential availability** is like a single chef who must finish one dish before starting the next. The kitchen’s output depends on that one chef; if they pause or break down, the entire line stops until they’re back at work.

In system design, parallel components (multiple servers, micro‑services) keep services up even when some fail—high availability. Sequential components (a single database, a linear workflow) can become bottlenecks: one failure blocks everything else. Thus, building systems with many independent parts running in parallel makes them more resilient and always available.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
