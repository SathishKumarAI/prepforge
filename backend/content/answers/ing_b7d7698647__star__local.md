---
qid: ing_b7d7698647__star__local
question: 'Explain: 1- Create Query, Key, and Value Vectors — The Illustrated GPT-2
  (Visualizing Transformer Language Models) \u2013 Jay Alammar \u2013 Visualizing
  machine learning one concept at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 274
output_tokens: 364
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:39:01-05:00'
sources: []
---

**Situation:**  
While leading the NLP team on our internal chatbot upgrade, we noticed that the model’s responses were too generic and often missed contextual nuance. The product manager set a target to improve relevance scores by 15% before the next release.

**Task:**  
I needed to redesign how the transformer handled attention so it could better capture user intent—specifically by re‑engineering the Query, Key, and Value projections used in self‑attention layers of GPT‑2.

**Action:**  
I started with a clean Python notebook, loading the pre‑trained GPT‑2 weights from Hugging Face. Using PyTorch, I extracted the linear layers that map hidden states to Q/K/V vectors (the weight matrices `W_q`, `W_k`, `W_v`). I visualized their shapes (768×768) and then experimented with adding a learned scaling factor to the queries to sharpen attention distribution. Next, I implemented a custom attention mask to prevent the model from attending to future tokens during fine‑tuning on our domain corpus. Finally, I benchmarked several variants—baseline, scaled Q, masked K/V—using perplexity and BLEU scores on a held‑out test set.

**Result:**  
The scaled‑query variant reduced perplexity by 12% and boosted BLEU by 9%, surpassing the 15% relevance target. Deployment to production saw user satisfaction rise from 78% to 85%. I learned that subtle tweaks in Q/K/V projections can dramatically affect model focus, and that visualizing these matrices early prevents costly downstream errors.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
