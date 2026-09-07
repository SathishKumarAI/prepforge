---
qid: ing_4a6a723437__faang__local
question: 'Explain: You would always do sequential update in'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 553
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:37:49-05:00'
sources: []
---

**Clarify**  
The interviewer is asking why, in a machine‑learning pipeline that learns from data over time, we prefer **sequential (online) updates** rather than re‑training from scratch on the entire dataset each round. I’ll assume we’re dealing with streaming data or a scenario where new observations arrive incrementally and storage/computation for the full history is costly.

---

**Approach**  
1. Identify the benefits of online learning.  
2. Contrast with batch retraining costs.  
3. Highlight scenarios where sequential updates are essential (e.g., concept drift, memory limits).  

---

**Depth**  

| Benefit | Explanation |
|---------|-------------|
| **Computational efficiency** | Updating a model with one new sample is *O(d)* (dimension) versus *O(nd log n)* for retraining on *n* samples. |
| **Memory footprint** | Only the current parameter vector and maybe a small buffer need storage; no need to keep all past data. |
| **Adaptivity / concept drift** | Sequential updates allow the model to track non‑stationary distributions in real time, whereas batch training would be stale until the next retrain cycle. |
| **Scalability** | Enables deployment on edge devices or large‑scale streaming services (e.g., recommendation engines). |

*Complexity*: For stochastic gradient descent (SGD) the per‑sample cost is *O(d)*; overall time grows linearly with the number of samples processed, not quadratically as in batch algorithms.

---

**Edge Cases**  

1. **Highly non‑stationary data** – too rapid drift may require periodic full retraining to reset bias.  
2. **Model instability** – if learning rate is high, online updates can diverge; need adaptive schedules (e.g., Adam).  
3. **Cold start** – initial few samples might mislead the model; use a small batch pre‑train.

---

**Optimize & Communicate**  

- *Regularization*: add weight decay or proximal terms to prevent overfitting on recent data.  
- *Checkpointing*: occasionally snapshot the full model for rollback.  
- *Evaluation*: maintain a separate validation stream to monitor performance drift.

When explaining, I’d start with “In streaming scenarios, sequential updates are preferable because…” then walk through the table, finish with caveats and how I’d mitigate them. This shows structured thinking, depth of knowledge, and awareness of practical trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
