---
qid: ing_32c3d10d6c__star__local
question: 'Explain: Sources — Harvey'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 294
total_tokens: 524
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:10:07-05:00'
sources: []
---

**Situation:** In my last role as a data scientist for a fintech startup, we were building an AI‑driven credit scoring model that needed to predict default risk within 24 hours of application.

**Task:** My job was to curate and validate the training data set, ensuring it represented real‑world borrower behavior while meeting regulatory compliance.

**Action:** I mapped out all potential sources—internal transaction logs, external credit bureau feeds, and anonymized open banking APIs. Using SQL and Python’s Pandas, I performed feature engineering on each source, then applied a variance inflation factor (VIF) analysis to detect multicollinearity across datasets. To guard against bias, I ran Kolmogorov‑Smirnov tests between demographic slices from each source. After cleaning, I merged the sources with a weighted schema that favored higher‑confidence data (e.g., 70 % internal logs, 20 % bureau, 10 % open banking) and fed the resulting 350k rows into our XGBoost model.

**Result:** The model achieved an AUC of 0.87, up from 0.78 with a single source, cutting false positives by 25 %. I learned that rigorous source vetting—statistical checks plus compliance review—is essential for trustworthy AI in regulated domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
