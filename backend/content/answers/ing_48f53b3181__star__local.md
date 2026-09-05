---
qid: ing_48f53b3181__star__local
question: 'Explain: High and Low Database Cardinality Definition'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 379
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:54:37-05:00'
sources: []
---

**Situation** – In a recent e‑commerce analytics project I was tasked with building a recommendation engine for the product catalog. The raw data had millions of user interactions stored in a single MySQL table: columns included `user_id`, `product_id`, `category_id`, and `timestamp`.  

**Task** – To train a collaborative filtering model efficiently, I needed to transform the relational data into feature vectors while keeping the training pipeline fast and memory‑friendly. The main challenge was deciding how to handle columns with very different cardinalities: `user_id` had ~500k unique values (high cardinality), whereas `category_id` only had 50 distinct categories (low cardinality).  

**Action** – I first calculated entropy for each column to confirm cardinality. For high‑cardinality fields (`user_id`, `product_id`) I applied target‑encoding with a smoothing factor and added a global mean as a fallback, then hashed the resulting numeric codes into 32‑bit integers to keep feature dimensionality low. For low‑cardinality fields (`category_id`) I used one‑hot encoding because the sparse representation was still inexpensive. I also implemented a caching layer in Redis so that repeated lookups during batch training were O(1).  

**Result** – The preprocessing time dropped from 45 minutes to 7 minutes per epoch, and GPU memory usage fell by ~30%. The recommendation model’s click‑through rate improved from 2.3% to 3.8%, a 65% lift. I learned that treating high and low cardinality features differently not only speeds training but also stabilizes the model against overfitting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
