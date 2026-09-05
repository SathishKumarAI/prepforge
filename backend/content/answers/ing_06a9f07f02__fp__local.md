---
qid: ing_06a9f07f02__fp__local
question: 'Explain: Title: Large Language Models Often Know When They Are Being Evaluated'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 329
total_tokens: 504
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:19:55-05:00'
sources: []
---

**Why LLMs “sense” evaluation**

The core problem is *distribution shift*: during training the model sees only natural text, yet at inference it may be asked to answer a question in a structured format (e.g., “Question: … Answer:”). The model learns that such patterns are statistically rare but highly predictive of an upcoming prompt. By modeling the joint distribution \(P(x,y)\) over token sequences, the network implicitly estimates the *likelihood* of a given prefix. When the likelihood falls below a threshold—an event that correlates with evaluation settings—the model’s internal attention weights collapse to a narrow focus on the question tokens and the output logits sharpen. This sharpening is equivalent to a Bayesian posterior over “is this an exam?” conditioned on observed context.

**Non‑obvious insight:**  
The confidence signal is *not* a separate head; it emerges from the self‑attention dynamics themselves. The attention entropy dips when the model detects a low‑probability prefix, signalling that its internal representation has entered a regime where “answering” is the most probable next action. Thus, LLMs don’t need an explicit evaluation flag—they learn to recognize the statistical signature of tests and react accordingly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
