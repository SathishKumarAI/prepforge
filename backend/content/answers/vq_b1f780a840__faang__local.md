---
qid: vq_b1f780a840__faang__local
question: What is the definition of precision?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 341
total_tokens: 570
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:28:48-05:00'
sources: []
---

**Clarify**  
The interviewer asks for *precision*—a statistical metric used in classification and information retrieval. We’ll assume a binary‑label setting (positive vs. negative) unless otherwise specified.

**Approach**  
Define the confusion matrix, derive precision mathematically, explain its intuition, and note typical use cases and pitfalls.

**Depth**  

| Term | Definition |
|------|------------|
| **True Positives (TP)** | Positive instances correctly predicted as positive |
| **False Positives (FP)** | Negative instances incorrectly predicted as positive |

Precision = \( \displaystyle \frac{TP}{TP + FP} \)

It measures the proportion of *predicted positives* that are actually correct. A high precision indicates few false alarms, critical in domains like medical diagnosis or spam filtering where false positives carry heavy costs.

**Edge Cases**  
- If **TP + FP = 0** (no positive predictions), precision is undefined; conventionally set to 0 or handled as “not applicable.”  
- Extremely imbalanced data can inflate precision while overall performance remains poor—hence precision is often paired with recall.

**Optimize & Communicate**  
In practice, we compute precision from a validation set and plot it against the decision threshold to find an operating point that balances precision‑recall. I’d explain that improving precision usually means tightening the classifier’s positive criterion, which may hurt recall—highlighting the trade‑off. This clear, concise explanation shows structured thinking, depth, and awareness of practical concerns—all key signals for a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
