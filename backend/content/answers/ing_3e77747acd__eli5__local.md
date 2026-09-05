---
qid: ing_3e77747acd__eli5__local
question: 'Q: Why is "Prompt Sanitization" harder than "SQL Sanitization"?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 163
output_tokens: 279
total_tokens: 442
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:15:02-05:00'
sources: []
---

Think of **prompt sanitization** like cleaning up a messy recipe before you let someone else cook it.  
You must check the recipe for every possible ingredient that could turn into a dangerous dish—an unexpected “spice” (like a malicious code snippet) hidden in the text, or a phrase that might trigger harmful behavior from the AI. The list of bad ingredients is endless: slang, obscure commands, even subtle phrasing that can mislead a smart machine.

In contrast, **SQL sanitization** is like cleaning up a grocery bill before it goes to the cashier.  
You only need to guard against a few known threats—missing quotes, extra semicolons, or a “DROP TABLE” command. The attack surface is narrow and well‑defined.

So prompt sanitization is harder because:

* The AI can interpret text in countless ways; a tiny change can shift its output drastically.  
* There’s no fixed set of “bad words”; new tricks appear all the time.  
* You must anticipate every possible misinterpretation, not just a handful of syntax errors.

In short, cleaning prompts is like trying to keep an open‑ended story safe, while SQL sanitization is like locking a specific door against a known keyhole.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
