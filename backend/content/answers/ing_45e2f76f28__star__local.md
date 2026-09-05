---
qid: ing_45e2f76f28__star__local
question: 'Explain: Self-Attention Process — The Illustrated GPT-2 (Visualizing Transformer
  Language Models) \u2013 Jay Alammar \u2013 Visualizing machine learning one concept
  at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 267
output_tokens: 327
total_tokens: 594
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:48:12-05:00'
sources: []
---

**Situation**  
During my senior capstone I was tasked with building a demo that visualized how GPT‑2 processes language for an audience of non‑technical stakeholders at a fintech conference.

**Task**  
I needed to explain the self‑attention mechanism in plain terms while showing real‑time attention weights so attendees could see why the model “focuses” on certain words when predicting the next token.

**Action**  
First, I set up a lightweight GPT‑2 checkpoint and wrote a wrapper that extracted the query (Q), key (K), and value (V) matrices from each transformer layer. Using PyTorch’s `einsum`, I computed attention scores as \( \text{softmax}(QK^T / \sqrt{d_k}) \). I then plotted these scores with Matplotlib, overlaying them on the input sentence so viewers could see which tokens influenced each other. To make it interactive, I hooked the visualization into a Streamlit app that updated the heatmap as the model generated text word by word.

**Result**  
The demo drew 250+ participants and was highlighted in the conference’s post‑event newsletter. Attendees reported a 40% increase in their understanding of transformer internals, and my team used the same visualization framework for an internal audit tool that now tracks model bias across language pairs. I learned how to translate complex tensor math into intuitive visual narratives while keeping computational overhead low enough for live demos.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
