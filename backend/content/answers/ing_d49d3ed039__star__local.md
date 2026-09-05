---
qid: ing_d49d3ed039__star__local
question: When would happen if object change value of a class?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 325
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:34:31-05:00'
sources: []
---

**Situation:**  
During a Kaggle competition I was building a gradient‑boosted model to predict customer churn. The training set included a “customer segment” feature encoded as a one‑hot vector inside a pandas DataFrame. My preprocessing pipeline used a custom class `SegmentEncoder` that stored the mapping from segment names to integer codes.

**Task:**  
I needed to ensure that the encoder’s internal dictionary stayed consistent across folds, so that the model didn’t see different encodings in training vs validation, which would inflate performance metrics.

**Action:**  
When I passed a DataFrame slice to `SegmentEncoder.transform`, the method inadvertently mutated the class attribute `self.mapping` by adding new keys for unseen segments in each fold. This mutation caused later folds to inherit mappings from previous ones, leading to data leakage. To fix it, I cloned the mapping inside `transform` (`local_map = self.mapping.copy()`) and updated only the local copy. I also added a unit test that verifies `self.mapping` remains unchanged after transformation.

**Result:**  
After correcting the mutation bug, my cross‑validated AUC dropped from an unrealistic 0.97 to a realistic 0.82, matching the leaderboard’s top scores. I learned that even small side effects in preprocessing classes can create hidden leakage and inflate results—so always isolate state changes and validate with tests.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
