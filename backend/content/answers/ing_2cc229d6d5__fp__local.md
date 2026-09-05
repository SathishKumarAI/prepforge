---
qid: ing_2cc229d6d5__fp__local
question: 'Explain: A customer asks: "Should we fine-tune, use RAG, or just prompt
  better?" Give me your decision framework.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 558
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:39:47-05:00'
sources: []
---

**Decision Framework for “Fine‑Tune vs. Retrieval‑Augmented Generation (RAG) vs. Prompt Engineering”**

| Question | Why it matters | Guiding Principle | Practical Rule |
|----------|----------------|-------------------|----------------|
| **What is the target task?** | Different tasks have different *information requirements* (e.g., zero‑shot classification vs. domain‑specific summarisation). | *Task complexity ≈ model capacity needed.* | If the task can be solved with a few examples, start with prompt engineering. |
| **How much high‑quality data do we own?** | Fine‑tuning needs *labeled* data; RAG only needs *documents*. | *Data volume → model generalisation vs. specificity trade‑off.* | ≥ 1k labeled samples → fine‑tune; 100–1000 documents → RAG; < 100 → prompt tuning. |
| **What are latency & compute budgets?** | Fine‑tuned models are static, but inference is fast; RAG adds retrieval cost. | *Latency ≈ model size + retrieval time.* | Real‑time applications → fine‑tune or optimized prompts; batch jobs with rich context → RAG. |
| **How dynamic is the knowledge base?** | If facts change often, a static fine‑tuned model becomes stale. | *Staleness ∝ update frequency / retraining cost.* | Rapidly evolving domains → RAG; stable domains → fine‑tune. |
| **What about interpretability & auditability?** | Fine‑tuned weights are opaque; prompts and retrieval steps can be inspected. | *Explainability ≈ transparency of data flow.* | Regulatory settings → prompt + RAG over fine‑tuning. |

**Non‑obvious Insight:**  
*Retrieval acts as a **dynamic regulariser**:* by feeding the model fresh context at inference time, RAG reduces the need for exhaustive fine‑tuning and mitigates catastrophic forgetting—something even sophisticated prompts cannot emulate.

---

**Bottom line:**  

1. **Prompt Engineering** – when data is scarce or you need quick, low‑cost iterations.  
2. **Fine‑Tuning** – when you have ample labeled data, stable knowledge, and strict latency constraints.  
3. **RAG** – when the domain is large, evolving, or unlabelled, and you can afford a modest retrieval overhead.  

Apply the table’s thresholds to decide; iterate on the smallest change that improves performance before scaling up.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
