---
qid: ing_a1d4eebf6d__star__local
question: 'Explain: From your test set evaluation (Step 6 from Chapter 4)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 331
total_tokens: 572
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:56:19-05:00'
sources: []
---

**Situation** – In my last role, I was leading the fine‑tuning of a transformer model for intent classification in our customer support chatbot. After training on 1.2 M labeled tickets, we hit a plateau: validation accuracy stayed at 92% while real‑time deployment showed a sudden drop to 85%.

**Task** – My goal was to isolate whether the drop was due to overfitting or data drift and to quantify model performance under realistic conditions.

**Action** – I assembled a dedicated test set of 20 k unseen tickets collected from the past month, stratified by intent and sentiment. Using PyTorch’s `DataLoader`, I ran inference in batches of 512, recorded per‑intent precision/recall, and plotted ROC curves with scikit‑learn. I compared these metrics to the validation set, performed a statistical significance test (McNemar), and visualized confusion matrices to spot systematic misclassifications. The analysis revealed that low‑frequency intents were under‑represented in training, causing a 7% recall drop.

**Result** – After augmenting the training data with synthetic samples for those intents and re‑evaluating on the same test set, accuracy rose from 85% to 91%, precision/recall improved by 4–5 points, and the model’s deployment confidence increased. I learned that a rigorous, stratified test set evaluation is essential to detect hidden biases before production rollouts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
