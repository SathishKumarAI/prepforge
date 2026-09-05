---
qid: ing_be79cb7590__eli5__local
question: 'Explain: Concept drift vs. Target drift — What is concept drift in ML,
  and how to detect and address it'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 390
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:39:09-05:00'
sources: []
---

Imagine you’re a chef who has perfected a recipe for a signature soup. **Concept drift** is like the taste of that soup gradually changing because the ingredients in the market shift—maybe tomatoes become sweeter or onions grow milder. The core “recipe” (the relationship between ingredients and flavor) stays the same, but its *expression* changes over time.

In machine‑learning terms, a concept drift occurs when the statistical link between your input features (ingredients) and the output you’re trying to predict (taste score) slowly evolves. Your model still needs the same kind of data, but what counts as “good” or “bad” has shifted.

**Target drift**, by contrast, is like suddenly deciding that the soup’s goal has changed: now you want it spicy instead of mild. The *definition* of the target variable itself changes (the label flips), not just its relationship to inputs.

---

### Detecting concept drift

1. **Monitor performance** – if accuracy or loss starts rising on new data, something is shifting.
2. **Statistical tests** – compare distributions of features and predictions over time; significant differences hint at drift.
3. **Drift detectors** (e.g., Page‑Hinkley, ADWIN) flag when the model’s error rate deviates from a baseline.

### Addressing it

- **Retrain regularly** on recent data so the model learns the new relationship.
- **Incremental learning** – update weights gradually as new examples arrive.
- **Ensemble methods** – keep older models for stability while newer ones adapt.
- **Feature engineering** – add variables that capture changing conditions (e.g., time stamps).

By watching how well your “recipe” predicts and updating it when the market changes, you keep your model tasty and reliable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
