---
qid: ing_48ed4cd078__eli5__local
question: 'Explain: Pitfall 17: Not Drawing — Common Pitfalls'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 241
total_tokens: 401
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:32:39-05:00'
sources: []
---

**Pitfall 17: “Not Drawing” – Forgetting to Visualize the Problem**

Imagine you’re planning a road trip but never look at a map. You just jump into the car, hoping you’ll find your way. In AI, *not drawing* means skipping that first step of sketching out what the data looks like and how it should behave. A quick diagram or chart can reveal hidden patterns, impossible values, or gaps in the data—like noticing a missing bridge on the map.

If you skip this visual check, your model might learn nonsense: it could treat “yes” as 0 and “no” as 1 because you never saw the label distribution. Drawing forces you to ask questions early: Are there outliers? Do classes balance? Is the feature space crowded or sparse? By mapping it out, you spot mistakes before they cost time and compute power.

So next time you start a project, pause, grab paper (or a digital canvas), and sketch the data. It’s the map that keeps your AI journey on track.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
