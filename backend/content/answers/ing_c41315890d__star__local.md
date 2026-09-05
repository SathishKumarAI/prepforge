---
qid: ing_c41315890d__star__local
question: 'Q: How do you keep eval results honest against data contamination?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 333
total_tokens: 571
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:02:11-05:00'
sources: []
---

**Situation** – In my last role I was leading the validation of a new image‑classification model for medical diagnostics. The training set had 12,000 scans, and our internal test set accidentally included 15% of those images due to a mis‑labeling script that copied from the training folder.

**Task** – I needed to guarantee that the reported accuracy reflected true generalization performance and not leakage from the training data, while still meeting a one‑month deadline for regulatory submission.

**Action** – First, I reconstructed a completely separate test split by re‑parsing the original archive with strict path checks. Then I implemented a checksum audit: every image’s SHA‑256 hash was compared against the training set hashes to confirm no overlap. For any duplicates found, I removed them from both sets and re‑trained a small calibration model to estimate the impact of contamination on our metrics. I also introduced stratified cross‑validation with nested hyperparameter tuning to reduce variance. Finally, I documented all steps in an audit trail that could be reproduced by external reviewers.

**Result** – The cleaned evaluation yielded a 3.2% drop in top‑1 accuracy (from 94.5% to 91.3%), but the model still met the required sensitivity threshold of 92%. The rigorous audit was praised during regulatory review, and I learned that systematic hash checks combined with transparent documentation are essential for trustworthy AI evaluations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
