---
qid: ing_b59bd128b7__eli5__local
question: 'Explain: Breaking Redlock with bad timings — How to do distributed locking
  \u2014 Martin Kleppmann\u2019s blog'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 292
total_tokens: 467
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:24:35-05:00'
sources: []
---

Imagine a group of friends trying to bake a cake in a shared kitchen that only has one oven. They agree: “If I’m baking, no one else can use the oven.” That’s a lock. In a computer system, many servers (friends) must coordinate so only one uses a resource at a time.

Redlock is like giving each friend their own tiny oven in separate rooms and asking them to pick one that’s free. It works if every friend checks all ovens quickly and chooses the same one. But “bad timings” happen when friends look at different ovens at slightly different moments, or some ovens fail to report back on time. Then two friends may think they’ve got the oven and both bake—overlap, leading to corrupted cake (data).

The trick is to use a single, reliable “master” oven that everyone asks first. If it’s busy, they wait; if it’s free, they lock it for a short period and confirm with other ovens only after the master says OK. This way, even if some ovens lag or fail, the master keeps the order, preventing two friends from baking simultaneously. The analogy shows why timing matters: you need a quick, consistent check‑in point (the master oven) before relying on many slower, independent checks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
