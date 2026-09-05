---
qid: ing_b83ea22e41__eli5__local
question: What is training-serving skew, and does it have an equivalent in LLM applications?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 334
total_tokens: 498
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:29:25-05:00'
sources: []
---

Imagine you’re learning to bake a cake. In the kitchen (training), you use only flour, sugar, eggs, and a small oven that can bake one slice at a time. The recipe tells you how to mix everything together perfectly. When it’s time to serve the cake, however, your friends are waiting in front of a huge banquet hall with a giant oven that can bake dozens of slices simultaneously, and they want the cake sliced differently—maybe thicker or thinner than you practiced.

That mismatch between what you trained on (small oven, specific slice size) and what you’re asked to produce later (big oven, different slice) is **training‑serving skew**. It’s a common problem for AI models: during training they see one type of input or compute pattern, but in production they face another—different data distribution, hardware, or user load.

In large language model (LLM) apps the same idea appears as “latency vs. throughput trade‑off.” A model might be tuned to give very accurate answers quickly on a single query (low latency), but when millions of users request text at once, it must also handle high throughput, often by batching or using less precise approximations. If the training didn’t account for that shift—like learning only single queries—the model will perform poorly under heavy load.

So, training‑serving skew is simply a mismatch between how an AI learns and how it’s actually used; LLMs face it when they’re trained on one type of usage but deployed in another.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
