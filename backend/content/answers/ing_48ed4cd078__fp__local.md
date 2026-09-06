---
qid: ing_48ed4cd078__fp__local
question: 'Explain: Pitfall 17: Not Drawing — Common Pitfalls'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 388
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:40:35-05:00'
sources: []
---

### Pitfall 17: **Not Drawing** – the silent loss of insight

When an analyst builds a model, the *only* thing that guarantees that the mathematics is correct is that the underlying relationships are visible.  
Without a visual representation—whether a scatterplot, a decision‑tree diagram, or a heatmap—the algorithm becomes a black box.  

1. **Fundamental problem**: Machine learning optimises a loss function over a high‑dimensional space; but humans reason geometrically. If the geometry is invisible, we cannot detect whether the model has converged to a true optimum or a spurious local minimum.  
2. **Why it must work this way**: The optimization landscape contains many valleys. A plot of the loss versus parameters lets us see these valleys and verify that the gradient descent path actually descends into a global basin, not just a shallow dip.  
3. **Deeper principle**: Information theory tells us that every model compresses data; visualisation is the *entropy* audit. By drawing feature correlations or decision boundaries we expose redundancy or over‑fitting—otherwise we cannot quantify the effective information retained.  
4. **Non‑obvious insight**: Even a simple 2‑D projection of a high‑dimensional embedding can reveal *entanglement* between classes that a confusion matrix alone will miss. Such entanglement often explains why a seemingly accurate model fails on edge cases.

In short, “not drawing” removes the geometric scaffold that turns abstract optimisation into actionable understanding. Visualisation is not an optional embellishment; it is the bridge that lets us verify, debug, and trust AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
