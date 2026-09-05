---
qid: ing_4caaa8b55a__star__local
question: 'Explain: Part #2: The Illustrated Self-Attention — The Illustrated GPT-2
  (Visualizing Transformer Language Models) \u2013 Jay Alammar \u2013 Visualizing
  machine learning one concept at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 272
output_tokens: 329
total_tokens: 601
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:01:35-05:00'
sources: []
---

**Situation**  
While leading the NLP sub‑team on our next‑gen chatbot, I noticed that our devs were struggling to grasp why GPT‑2’s outputs varied so wildly across contexts. The team needed a concrete way to see how the model was “attending” to past tokens.

**Task**  
My goal was to demystify self‑attention for non‑technical stakeholders and help them tune hyperparameters like `num_heads` and `hidden_size` with real visual feedback.

**Action**  
I built an interactive Jupyter notebook that re‑implemented the core of Jay Alammar’s “Illustrated GPT‑2” diagram. Using PyTorch, I extracted query, key, value matrices from a frozen GPT‑2 checkpoint, computed scaled dot‑product attention scores, and plotted them as heatmaps for each head. I added sliders to adjust temperature and dropout, showing live changes in the attention maps. I also scripted a quick demo where the model generated text after masking certain tokens; the notebook highlighted which past tokens were most influential.

**Result**  
Within two sprint cycles, the team could predict that increasing `num_heads` from 12 to 24 would sharpen focus on syntactic dependencies, reducing perplexity by ~8% on our validation set. The visual tool cut debugging time by 40 %, and senior product managers now confidently discuss attention‑based trade‑offs during roadmap planning.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
