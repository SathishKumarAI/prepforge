---
qid: ing_948872966e__eli5__local
question: 'Explain: API-level Context Caching (Prompt Caching)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 212
total_tokens: 371
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:33:10-05:00'
sources: []
---

Imagine you’re at a coffee shop that makes custom drinks. The first time you order a latte with extra foam and a dash of cinnamon, the barista notes your exact preferences in a small card (that’s the “prompt”). The next day, you come back for the same drink. Instead of asking all the questions again, the barista flips to the card, reads your saved request, and immediately starts brewing—this is **API‑level context caching**, or **prompt caching**.

In AI terms, when a user sends a prompt (a question or instruction) to an API, the system stores that prompt along with its generated answer in a cache. If the same prompt comes again, the system pulls the stored response instead of recomputing it, saving time and computational resources. Think of it as re‑using a recipe card so you don’t have to write the instructions from scratch every visit.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
