---
qid: ing_03174b50da__star__local
question: 'Explain: The Residuals — The Illustrated Transformer \u2013 Jay Alammar
  \u2013 Visualizing machine learning one concept at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 257
output_tokens: 332
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:34:29-05:00'
sources: []
---

**Situation** – In my last role I was tasked with improving the interpretability of our NLP model for a client that needed to explain predictions to non‑technical stakeholders. The team had been using a standard transformer but struggled to convey why certain tokens were emphasized.

**Task** – My goal was to create an intuitive visual explanation that highlighted how residual connections in the transformer helped preserve context while allowing deep layers to focus on new features, and then demonstrate this with real data.

**Action** – I built a lightweight Python notebook using PyTorch and Matplotlib. First, I extracted the hidden states from each encoder layer for a sample sentence. Then I computed the residuals by subtracting the output of each sub‑module (attention + feed‑forward) from its input, visualizing them as heatmaps over the token embeddings. To make it concrete, I plotted the residual magnitude alongside the attention weights for the word “economy” across layers. I also added a simple animation that showed how the residuals evolved as we moved deeper, reinforcing the idea of incremental refinement.

**Result** – The client’s product manager could now explain to executives that each transformer layer builds on the previous one without discarding information—thanks to residuals. Internally, our documentation usage rose by 45 % and we reduced model‑explainability tickets by 30 %. I learned how a clear visual narrative can turn abstract deep‑learning concepts into actionable insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
