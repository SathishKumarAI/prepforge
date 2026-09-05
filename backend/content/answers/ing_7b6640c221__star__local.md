---
qid: ing_7b6640c221__star__local
question: 'Explain: Interview Follow-Up Questions — Document Intelligence'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 328
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:40:44-05:00'
sources: []
---

**Situation:**  
During a product‑launch sprint for our new contract‑review tool, the QA team flagged that our NLP model was misclassifying “material breach” clauses in over 18% of documents, jeopardizing the release deadline.

**Task:**  
I had to pinpoint why the entity extraction was off, refine the model, and demonstrate a drop below 5% error within two days so we could ship on schedule.

**Action:**  
First, I pulled a sample set into Jupyter, visualized embeddings with UMAP, and noticed that “breach” was being conflated with “breach of contract” due to tokenization. I switched from spaCy’s default tokenizer to the HuggingFace BERT‑base‑uncased model, fine‑tuned it on a curated 2k clause subset, and added a custom post‑processing rule that normalizes synonymous terms. Then I ran an A/B test against our production pipeline, measured precision/recall with scikit‑metrics, and iterated the rule set until the F1 score hit 0.92.

**Result:**  
The updated model reduced misclassifications to 3%, a 15% absolute improvement. We launched on time, and the feature now supports 50+ contract types with confidence scores above 90%. I learned that combining transformer fine‑tuning with domain‑specific rule layers can dramatically boost precision in legal NLP tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
