---
qid: ing_f9fae80d7f__star__local
question: 'Explain: 1.11.1.1.4. Categorical Features Support'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 350
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:48:24-05:00'
sources: []
---

**Situation**  
At my previous role I was building a churn prediction model for a telecom client. The training set had over 1 M rows and 48 features, but more than half of them were categorical (plan type, region, device brand). The baseline logistic regression with simple one‑hot encoding blew up the feature matrix to 35 k columns, causing memory errors and slow training.

**Task**  
I needed to create a scalable representation for these high‑cardinality categories that preserved predictive signal while keeping the model fast enough for weekly retraining on a single GPU.

**Action**  
First I dropped irrelevant columns and used a frequency‑based target encoding with smoothing (α = 10) to reduce dimensionality. For a few critical categories (device brand, plan type) I trained low‑dimensional embeddings in a shallow neural network and concatenated them with the encoded features. I also added a small regularization term to avoid overfitting. The pipeline was built in Scikit‑Learn’s `ColumnTransformer` wrapped in a `Pipeline`, ensuring reproducibility.

**Result**  
The new model trained 4× faster, used only 2 GB of RAM, and increased AUC from 0.72 to 0.81 on the hold‑out set—an absolute lift of 9 %. I learned that thoughtful encoding (smoothing + embeddings) can turn a computational bottleneck into a performance win without sacrificing interpretability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
