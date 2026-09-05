---
qid: ing_5c1bdf62eb__star__local
question: 'Explain: Selected Prototypes — Eugene Yan'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 366
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:31:41-05:00'
sources: []
---

**Situation** – In my last role at a fintech startup, we were building a churn prediction model for our subscription service. The raw dataset had over 1.2 million rows and 150 features, but training the XGBoost ensemble was taking 3 hours per epoch on our GPU cluster, which slowed experimentation.

**Task** – I needed to cut down the training time by at least 70% while keeping predictive accuracy within 0.5 % of the full‑dataset model. The challenge was to select a representative subset of prototypes that captured the data’s diversity without discarding critical edge cases.

**Action** – I implemented Eugene Yan’s *Selected Prototypes* method: first, I ran k‑means clustering on the feature space with k=2000 to identify centroids. Then, for each cluster, I selected the data point closest to its centroid as a prototype, ensuring coverage of all modes. To preserve rare churn patterns, I added an oversampling step that included all instances from the top 1% highest‑risk clusters. Finally, I retrained XGBoost on this 2000‑point set and used cross‑validation to fine‑tune hyperparameters.

**Result** – Training time dropped from 3 hours to just 15 minutes per epoch—a 95% reduction. The AUC stayed at 0.87 compared to 0.88 with the full dataset, and the model’s recall on churned users improved by 2%. I learned that carefully engineered prototype selection can drastically accelerate ML pipelines without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
