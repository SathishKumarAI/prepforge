---
qid: ing_5c059a7107__star__local
question: You have 10M unlabelled examples and budget for 20k labels. How do you spend
  it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 382
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:31:33-05:00'
sources: []
---

**Situation:**  
At my last company I was tasked with building a high‑accuracy intent classifier for a customer support chatbot. We had 10 million unlabeled utterances from live chat logs but could afford only 20 000 human labels.

**Task:**  
Maximize model performance within that labeling budget while ensuring coverage of rare intents and reducing annotation time.

**Action:**  
1. **Active Learning Loop:** I started with a small seed set (2 k random samples) labeled by the team, trained an initial BERT‑base model, and used uncertainty sampling to pick the next 5 k examples where the model’s confidence was lowest.  
2. **Cluster‑Based Sampling:** For the remaining budget I ran K‑means on sentence embeddings from a multilingual Sentence‑BERT model, selected one representative per cluster (≈ 10 clusters), and had annotators label these “cluster centroids.”  
3. **Human‑in‑the‑Loop Review:** After each round, I evaluated precision/recall on a held‑out validation set; if the improvement plateaued I stopped sampling that strategy to avoid diminishing returns.  
4. **Cost‑Efficient Annotation Tooling:** Integrated a web UI with pre‑filled candidate intents and auto‑suggestions from the model to speed up annotators, cutting labeling time by ~30 %.

**Result:**  
The final model achieved 93 % F1 on unseen data—up 12 points over the baseline trained on random labels—and covered 95 % of the rare intents. The active‑learning strategy saved us $4k in annotation costs and taught me that a hybrid sampling approach can stretch limited budgets while keeping the model robust to edge cases.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
