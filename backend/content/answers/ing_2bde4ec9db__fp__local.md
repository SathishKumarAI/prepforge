---
qid: ing_2bde4ec9db__fp__local
question: Which retrieval metrics would you use - recall@k, MRR, nDCG - and when does
  each matter?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 488
total_tokens: 671
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:37:57-05:00'
sources: []
---

When we evaluate an information‑retrieval system that feeds a downstream AI model, we are really measuring *utility* under two opposing constraints: **coverage** (did the system surface every relevant item?) and **ranking quality** (how well did it order items for the user or learner?).  

1. **Recall@k** is a *coverage* metric. It answers “what fraction of all truly relevant documents appear within the first *k* results?” This is derived from the combinatorial definition of recall, \(R = \frac{|{relevant∩retrieved}|}{|{all relevant}|}\). Use it when the downstream AI must see *every* useful example—e.g., training data augmentation or compliance audits. A high Recall@k guarantees that no potential signal is missed.

2. **Mean Reciprocal Rank (MRR)** focuses on *first‑hit quality*. It originates from probability theory: \(MRR = \frac{1}{N}\sum_{i=1}^N \frac{1}{rank_i}\). When the AI only needs a single best answer—such as a question‑answering system or chatbot—the rank of the first correct item directly impacts user satisfaction. MRR is sensitive to early failures but ignores later relevant items.

3. **Normalized Discounted Cumulative Gain (nDCG)** blends both aspects via a logarithmic discount: \(nDCG_k = \frac{DCG_k}{IDCG_k}\), where \(DCG_k=\sum_{i=1}^k\frac{2^{rel_i}-1}{\log_2(i+1)}\). It assumes relevance is graded and that higher positions contribute more (information‑theoretic gain). Use nDCG when the AI’s loss depends on a *weighted* set of retrieved items—e.g., ranking news for summarization, where earlier headlines matter but later ones still help.

**Non‑obvious insight:** Recall@k alone can be misleading if the relevance distribution is skewed; an algorithm that pulls many low‑relevance documents may achieve high recall yet provide little utility. Pairing Recall@k with a discounted metric like nDCG gives a more holistic view of both breadth and depth—essential for training robust AI models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
