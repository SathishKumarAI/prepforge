---
qid: ing_b9633942c5__eli5__local
question: 'Explain: Powers of Two — Back of the Envelope - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 162
output_tokens: 234
total_tokens: 396
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:31:13-05:00'
sources: []
---

Imagine you’re planning a party and want to know how many tables you’ll need if every table can seat exactly two guests. You don’t count each person one by one; instead, you look at powers of two—1, 2, 4, 8, 16, …—because doubling is the simplest way to double capacity. In system design this trick lets engineers estimate resources (CPU cores, memory slots, network links) quickly: if a component can handle 2 units, 4 units, 8 units, etc., you just pick the next power of two that’s big enough for your users. “Power of two” means any number that equals 2 raised to an integer exponent (2⁰ = 1, 2¹ = 2, 2² = 4, …). By using this back‑of‑the‑envelope method you avoid over‑engineering and keep scaling predictable—just like picking the right table size for your party.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
