---
qid: ing_e57e983d0f__eli5__local
question: 'Explain: Step 3: Split Data (Train / Dev / Test) — Ai Evals Complete Guide
  Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 230
total_tokens: 403
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:38:18-05:00'
sources: []
---

Imagine you’re training a new chef. First, you give them a big pot of soup (the whole dataset). To make sure they learn well and don’t just memorize the recipe, you split that soup into three bowls:

1. **Training bowl** – the chef tastes most of it to learn flavors (train set).
2. **Development bowl** – a smaller portion lets you taste as they cook, adjusting seasoning on the fly (dev set). It’s like a rehearsal kitchen where you tweak ingredients.
3. **Test bowl** – the final tasting panel, blind and independent, judges how good the dish truly is (test set).

In AI terms, the *train* data trains the model, the *development* data tunes its hyper‑parameters, and the *test* data gives an unbiased verdict of real performance. This split prevents the model from “cheating” by memorizing the test set and ensures it generalizes to new, unseen examples.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
