---
qid: ing_76c4a85fe0__eli5__local
question: You have one on-device base model but a dozen features - summarization,
  rewriting, reply suggestions, tone adjustment. How do you specialise without shipping
  a dozen models?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 192
total_tokens: 372
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:44:35-05:00'
sources: []
---

Think of the base model as a Swiss‑army knife: it has one blade that can cut, slice, and pry. Each feature—summarization, rewriting, reply suggestions, tone adjustment—is like a different tool you need to use the knife for a specific job. Instead of shipping a separate knife for every task, you keep the single base blade and add tiny “attachments” (tiny extra layers or prompts) that tell the knife exactly how to act.

So you ship one powerful model and, when a user wants summarization, you load a small “summary‑module” on top of it; for tone adjustment you swap in a different tiny module. These modules are lightweight, share most of the base’s knowledge, and can be swapped or updated independently. The result is a single, efficient package that behaves like many specialized tools without bloating the app.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
