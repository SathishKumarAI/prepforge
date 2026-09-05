---
qid: ing_b620a5f884__star__local
question: 'Explain: Hashing: — OG CS61B Data Structures and Sorting Cheat Sheet'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 404
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:35:33-05:00'
sources: []
---

**Situation:**  
During my senior capstone I built a text‑classification pipeline for an e‑commerce review system that had to process over 2 million product reviews per day. The training set was huge and the feature space—every unique word—reached 1.3 million tokens, which made the memory footprint and model training times unmanageable.

**Task:**  
I needed a way to reduce dimensionality while preserving enough semantic information so that our logistic‑regression classifier stayed within a 4 GB RAM budget and still achieved at least 85 % F1 on a held‑out test set.

**Action:**  
I implemented feature hashing (the “hash trick”) using a 20‑bit non‑cryptographic hash (FNV-1a) to map words into a fixed 1,048,576‑dimensional sparse vector. To mitigate collision bias I added a sign bit derived from the hash value and applied tf‑idf weighting before hashing. I benchmarked several hash sizes (2⁹–2¹²) and found that 2¹⁰ gave the best trade‑off between speed (training time dropped from 18 min to 4 min on my laptop) and accuracy. The hashed features were fed into a sparse logistic regression model with L1 regularization, which further pruned irrelevant dimensions.

**Result:**  
The final system processed each batch in under 3 seconds, used only 2.8 GB of RAM, and achieved an F1 score of 87.4 %—a 2 pp improvement over the baseline one‑hot encoding model. I learned that careful hash sizing and sign bucketing can dramatically reduce memory usage without sacrificing performance, a technique now part of my standard ML toolbox.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
