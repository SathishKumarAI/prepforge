---
qid: ing_fa8352e78e__star__local
question: 'Explain: Self-Attention in Detail — The Illustrated Transformer \u2013
  Jay Alammar \u2013 Visualizing machine learning one concept at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 306
total_tokens: 565
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:49:38-05:00'
sources: []
---

**Situation:**  
During my senior thesis I was building a sentiment‑analysis model for a large corpus of movie reviews. The baseline LSTM was slow and struggled with long sentences, so the professor suggested experimenting with transformers.

**Task:**  
I needed to implement self‑attention from scratch, understand how it captures dependencies regardless of distance, and show that it improves accuracy while cutting training time.

**Action:**  
I started by coding the scaled dot‑product attention: for each query vector \(q\), I computed dot products with all key vectors \(k\), scaled by \(\sqrt{d_k}\), applied a softmax to get weights, then multiplied by value vectors \(v\). To handle multiple relations simultaneously I added multi‑head attention—splitting the embeddings into 8 heads, projecting each head separately, and concatenating the results. I also incorporated positional encodings (sine/cosine) so the model could distinguish word order. Using PyTorch’s autograd, I trained a lightweight transformer encoder on the IMDb dataset; the self‑attention layers replaced the LSTM cells.

**Result:**  
Accuracy jumped from 81 % to 88 %, and training time dropped by ~40 %. The experiment taught me that self‑attention efficiently models long‑range context without recurrence, and highlighted the importance of proper scaling and multi‑head design for stable gradients.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
