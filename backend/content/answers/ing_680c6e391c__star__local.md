---
qid: ing_680c6e391c__star__local
question: What is Error Analysis? — Ai Evals Complete Guide Langwatch Langfuse
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 345
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:55:35-05:00'
sources: []
---

**Situation** – In my last role, our NLP model for intent classification on the customer support chatbot had a precision drop from 92 % to 85 % after we rolled out a new language pack for Spanish. The support team flagged that many “refund” intents were being misclassified as “billing,” causing frustration.

**Task** – I was tasked with diagnosing the root cause of this regression and proposing a fix that wouldn’t hurt performance on the existing English data.

**Action** – First, I ran an automated error analysis pipeline using Langfuse to collect all misclassifications, grouping them by label pair. I plotted confusion matrices and extracted the top 200 false‑positive samples per class. Then, I performed a token‑level attribution with SHAP to see which words were driving the model’s decisions. The analysis revealed that the Spanish word “reembolso” was being mapped to an older embedding cluster associated with billing terms. To correct this, I updated the embedding layer with fresh multilingual embeddings from HuggingFace’s `sentence-transformers/paraphrase-multilingual-MiniLM-L12-v2`, retrained only the last two layers, and fine‑tuned on a balanced Spanish subset.

**Result** – Precision for the “refund” intent jumped back to 91 %, overall model accuracy increased by 3.5 %. I learned that systematic error analysis—combining confusion matrices, attribution, and targeted data augmentation—is essential before any large-scale retraining, saving time and avoiding regressions on other languages.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
