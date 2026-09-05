---
qid: ing_0a97e77701__star__local
question: 'Explain: Step 2: Create Test Set — Capability Assessment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 374
total_tokens: 611
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:49:57-05:00'
sources: []
---

**Situation** – While leading a fraud‑detection model at a fintech startup, our production accuracy had dipped from 94% to 88% after a recent data drift event. The engineering lead asked me to build a robust test set that would accurately gauge the model’s current capabilities before we rolled out any fixes.

**Task** – I needed to assemble a representative, unbiased test set that covered all transaction types and edge cases, so that our evaluation metrics reflected real‑world performance and could be used to benchmark improvements.

**Action** – First, I extracted 1 million recent transactions from the data lake, then stratified them by fraud probability buckets (high, medium, low) using the existing model’s scores. Next, I applied a time‑based split: 70% for training, 15% for validation, and 15% for final testing to avoid look‑ahead bias. I also sampled manually verified cases from the compliance team to seed hard fraud examples. Using PySpark, I engineered feature distributions and confirmed they matched the live data distribution within a 2% tolerance. Finally, I packaged the test set into an MLflow experiment artifact with versioned schema for reproducibility.

**Result** – The new test set revealed that our model was over‑predicting fraud in the medium bucket, prompting targeted retraining. After re‑engineering and re‑training, accuracy rose to 92% on the same test set—an improvement of 4 percentage points—and we reduced false positives by 30%, saving $120k annually. I learned the value of rigorous stratification and version control for reliable capability assessment in production AI systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
