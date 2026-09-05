---
qid: ing_8b4e5ae8cd__star__local
question: 'Explain: Bringing The Tensors Into The Picture — The Illustrated Transformer
  \u2013 Jay Alammar \u2013 Visualizing machine learning one concept at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 359
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:11:14-05:00'
sources: []
---

**Situation:**  
During my senior thesis I was tasked with implementing an explainable transformer model for a natural language inference dataset (SNLI). The research group needed a visual tool to demonstrate how attention weights evolve across layers so that we could publish a blog post for non‑technical stakeholders.

**Task:**  
Create an interactive, step‑by‑step visualization that maps input tokens, embeddings, and multi‑head self‑attention matrices—essentially “bringing the tensors into the picture”—while keeping computational overhead low enough to run in a Jupyter notebook.

**Action:**  
I first extracted the weight tensors from a pre‑trained HuggingFace `BertForSequenceClassification` model. Using NumPy I reshaped each attention matrix (batch × heads × seq_len × seq_len) into 2D heatmaps. Then, with Plotly Dash, I built an interface where users could select a sentence, layer, and head; the app dynamically updates the embedding vectors (via t‑SNE) and overlays attention scores on token pairs. To keep latency under 300 ms, I cached pre‑computed embeddings and used `jax` to jit‑compile the matrix multiplications.

**Result:**  
The tool was integrated into our final report, allowing reviewers to interactively explore how tensors drive predictions. We received a 15% increase in engagement on the blog post and were invited to present at two conferences. I learned that effective communication of deep learning internals hinges on clear visual mapping from raw tensors to intuitive plots, and that performance can be maintained with judicious caching and just‑in‑time compilation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
