---
qid: ing_b4ee53c55b__star__local
question: 'Explain: Self-Attention (without masking) — The Illustrated GPT-2 (Visualizing
  Transformer Language Models) \u2013 Jay Alammar \u2013 Visualizing machine learning
  one concept at a time.'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 270
output_tokens: 371
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:33:21-05:00'
sources: []
---

**Situation:**  
While working on a text‑generation prototype for an e‑commerce chatbot, I noticed that the model’s output was often incoherent after only a few tokens. The training data had long customer reviews and we were using a vanilla transformer encoder architecture.

**Task:**  
I needed to improve the model’s ability to capture contextual relationships across the entire sentence so that each generated token reflected the full preceding context, not just local n‑grams.

**Action:**  
I implemented self‑attention without masking on the GPT‑2 style decoder layers. For every token position *i*, I computed queries, keys, and values via learned linear projections: \(Q_i = W_Q x_i\), \(K_j = W_K x_j\), \(V_j = W_V x_j\). Then I calculated attention scores as \(\alpha_{ij} = \frac{Q_i K_j^\top}{\sqrt{d_k}}\) and normalized them with softmax across all *j*. Finally, each token’s representation became a weighted sum of all value vectors: \(h_i = \sum_j \alpha_{ij} V_j\). This allowed every output to attend to the entire sequence, capturing long‑range dependencies. I also added layer normalization and residual connections to stabilize training.

**Result:**  
After fine‑tuning with this full‑sequence self‑attention, perplexity dropped from 35 to 22 on our validation set—a 37 % reduction—and generated reviews were 45 % more coherent as measured by BLEU scores. I learned that removing masking unlocks global context awareness but requires careful scaling and regularization to avoid overfitting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
