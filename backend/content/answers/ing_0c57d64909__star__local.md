---
qid: ing_0c57d64909__star__local
question: 'Explain: Clusters & Examples — Partitioningsharding'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 301
total_tokens: 538
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:53:22-05:00'
sources: []
---

**Situation**  
At a fintech startup, our fraud‑detection model was flagging too many legitimate transactions (high false positives). The data lake held millions of transaction records with no clear labeling.

**Task**  
I needed to create an unsupervised grouping that would let us segment users into risk tiers and then harden the feature set for each tier before retraining the classifier, all within a two‑week sprint.

**Action**  
First I ran a K‑means clustering (k=4) on engineered features (transaction amount, time of day, device fingerprint). Using the elbow method, I chose k=4 and inspected centroids. I then performed silhouette analysis to validate cluster cohesion. For each cluster, I applied feature importance from a random forest trained on labeled fraud cases, pruning low‑importance attributes—effectively hardening the feature space per partition. Finally, I retrained separate gradient‑boosted models for each cluster, merging predictions with weighted voting.

**Result**  
The false‑positive rate dropped 32% (from 18% to 12%) while maintaining a fraud recall of 95%. Deployment took only 3 days after sprint review, and the team learned that hardening features per cluster can substantially reduce noise without sacrificing sensitivity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
