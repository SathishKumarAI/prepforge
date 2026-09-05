---
qid: ing_5f06c1deff__eli5__local
question: 'Explain: Looking Ahead — Constitutional Classifiers: Defending against
  universal jailbreaks \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 269
total_tokens: 434
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:07:08-05:00'
sources: []
---

Imagine your computer is a guard standing at the door of a library that holds all the knowledge you can ask for. A “jailbreak” is like someone trying to trick the guard into letting in a forbidden book by using clever wording or hidden clues. The guard’s job is to decide whether a request is allowed, and this decision rule is called a **classifier**.

A *constitutional classifier* uses a set of high‑level rules—think of them as a short “constitution” for the guard: “Never give disallowed content,” “Respect privacy,” “Avoid deception.” These rules are written in plain language that even a beginner can read, and they guide every decision the guard makes.

When a new request arrives, the classifier checks it against this constitution. If the request slips through (a jailbreak), the guard sees that it violates one of the constitutional clauses and stops it—just like how a law‑enforced library would refuse to hand out a banned book.

So, “Looking Ahead” means the guard doesn’t just react; it predicts whether a trick could work before it happens. By always comparing against its constitution, the system stays safe even if clever users try many different ways to break the rules.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
