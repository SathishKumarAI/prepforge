---
qid: vq_7b4563ca0f__faang__local
question: What is the definition of accuracy?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 418
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:18:40-05:00'
sources: []
---

**1️⃣ Clarify**  
The interview asks for *accuracy* in an AI/ML context. I’ll interpret it as a performance metric that measures how often the model’s predictions match the true labels. Key assumptions: we’re dealing with classification (binary or multi‑class) and the dataset is balanced enough that accuracy alone makes sense.

**2️⃣ Approach**  
Define the metric formally, give its formula, then illustrate with an example. Mention common pitfalls (imbalanced data) and related metrics.

**3️⃣ Depth**  

> **Accuracy = (TP + TN) / (TP + FP + FN + TN)**  

Where:  
- *TP* – true positives  
- *TN* – true negatives  
- *FP* – false positives  
- *FN* – false negatives  

For a binary classifier on 100 samples, if it correctly labels 90 (80 TP + 10 TN) and mislabels 10, accuracy = 90/100 = **0.9**.

Accuracy is an intuitive, easy‑to‑compute metric but can be misleading when classes are imbalanced; e.g., a model that always predicts the majority class may achieve high accuracy yet be useless for minority cases. In such scenarios we use precision, recall, F1, or area‑under‑curve instead.

**4️⃣ Edge Cases**  
- *All predictions wrong* → accuracy = 0%.  
- *All predictions correct* → accuracy = 1.  
- *Imbalanced data* → high accuracy despite poor minority performance.  
Test with synthetic datasets that vary class ratios to see the metric’s sensitivity.

**5️⃣ Optimize & Communicate**  
Explain that while accuracy is a quick sanity check, engineers should pair it with confusion‑matrix analysis and domain‑specific metrics. When presenting results, highlight both overall accuracy and per‑class breakdowns so stakeholders understand where the model truly excels or fails.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
