---
qid: ing_671a93a562__eli5__local
question: What is double descent, and how does it change the classical story about
  model size and overfitting?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 219
total_tokens: 387
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T11:19:34-05:00'
sources: []
---

Imagine you’re building a house. The first time you add rooms, the house gets better—more space, more comfort. But if you keep adding too many rooms, it starts to feel cramped and chaotic; that’s the classic “over‑fitting” story: bigger models (more parameters) can learn noise instead of useful patterns.

Now picture a second construction phase where you add a roof and foundation that make the house stronger again. Suddenly the same huge model becomes reliable once more. That final improvement is **double descent**: as model size grows, error first decreases, then rises (the over‑fit valley), but with enough capacity it drops sharply again.

So double descent shows that very large models can actually beat smaller ones, overturning the old rule that “bigger always means worse.” It’s a curve with two dips—first the familiar learning phase, then a surprising second drop when the model is huge enough to capture structure without memorizing noise.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
