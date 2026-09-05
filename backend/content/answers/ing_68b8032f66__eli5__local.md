---
qid: ing_68b8032f66__eli5__local
question: 'Explain: Anti-Patterns to Avoid'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 154
output_tokens: 222
total_tokens: 376
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:21:45-05:00'
sources: []
---

Imagine building a smart robot that learns from people’s voices. An **anti‑pattern** is like giving it the wrong instruction set—something that seems helpful at first but ends up making the robot slower or confused. In AI, common anti‑patterns are:

* **Data poisoning** – adding bad examples so the model learns mistakes.
* **Over‑fitting** – training so hard on a small dataset that the model only knows those few cases and fails on new ones.
* **Model drift** – letting a model keep working while its real‑world environment changes, so it becomes inaccurate.
* **Feature overload** – feeding too many irrelevant inputs, which makes learning noisy.

Avoid these by cleaning data, using diverse examples, monitoring performance over time, and keeping the feature set focused. Think of AI as a recipe: too much salt (noise) or too little variety ruins the dish, no matter how skilled the chef.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
