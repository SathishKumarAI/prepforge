---
qid: ing_c41315890d__think__local
question: 'Q: How do you keep eval results honest against data contamination?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 380
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:54:45-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
First ask what “honest” means—i.e., unbiased performance estimates that generalise to unseen data—and define *data contamination* (overlap between training and evaluation sets). Assume we control data splits, have a well‑documented dataset, and can inspect overlap.

**2️⃣ Adopt a principled framework**  
Treat the evaluation as a statistical inference problem: estimate the true error rate under the null that no leakage exists. Use *cross‑validation* or *hold‑out* sets that are strictly disjoint from training data, and enforce strict versioning of datasets.

**3️⃣ Step‑by‑step reasoning**  
- **Partition carefully**: split by source (e.g., text origin, user ID) to avoid cross‑contamination.  
- **Detect leakage**: compute similarity metrics (BLEU, cosine similarity on embeddings) between training and eval samples; flag high‑similarity pairs.  
- **Re‑sample or remove** contaminated instances from the eval set.  
- **Document everything**: record split criteria, contamination thresholds, and any removals.

**4️⃣ Avoid common traps**  
Don’t rely solely on random splits when data is clustered by topic or author—this can hide leakage. Beware of *post‑hoc* filtering that cherry‑picks good results. Remember that removing too many samples may bias the eval toward easier cases.

**5️⃣ Sanity‑check & communicate**  
Run sanity checks: recompute metrics after removal, compare with a fresh hold‑out set, and verify statistical significance remains unchanged. When reporting, state the contamination detection method, thresholds used, and any adjustments made—transparency is key to maintaining trust in the results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
