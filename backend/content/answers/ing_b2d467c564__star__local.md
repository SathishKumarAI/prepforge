---
qid: ing_b2d467c564__star__local
question: 'Explain: A journey up the Stack — The Illustrated GPT-2 (Visualizing Transformer
  Language Models) \u2013 Jay Alammar \u2013 Visualizing machine learning one concept
  at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 292
total_tokens: 559
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:29:31-05:00'
sources: []
---

**Situation**  
During my senior capstone, we were tasked to build a demo that could explain how GPT‑2 generates text to non‑technical stakeholders in our university’s AI showcase.

**Task**  
I had to translate the dense mathematics of transformers into an intuitive visual narrative that would keep a 30‑minute audience engaged while still conveying the core concepts: tokenization, self‑attention, and positional encoding.

**Action**  
I followed Jay Alammar’s “Illustrated GPT‑2” as a blueprint. First, I recreated his attention heatmaps using TensorFlow’s `tf.linalg.einsum` to compute dot‑products between query, key, and value matrices. Then I built an interactive Jupyter widget that let users step through each layer, watching how the weights shift when a new token is added. For positional encoding, I plotted sinusoidal waves over time steps and animated them sliding into the embedding matrix. Finally, I bundled the visuals into a Streamlit app, adding explanatory captions in plain English.

**Result**  
The demo attracted 150+ attendees at the showcase; post‑event surveys showed a 78% increase in participants’ confidence understanding transformer internals. I learned how to distill complex ML pipelines into accessible stories and that visual tools like heatmaps can bridge the gap between theory and practice.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
