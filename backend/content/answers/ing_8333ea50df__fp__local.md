---
qid: ing_8333ea50df__fp__local
question: Classify support tickets into 40 categories. LLM API, fine-tuned small model,
  or classical classifier - how do you decide?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 553
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:44:12-05:00'
sources: []
---

**From the problem to the solution**

A support‑ticket classification task is a *multiclass text categorization* problem: given a short natural‑language description, we must map it to one of 40 labels. The core objective is **information transfer**—the model should capture the semantic signal that discriminates classes while being robust to noise and domain drift.

1. **Model capacity vs. data scale**  
   * Classical ML* (SVM, logistic regression) with TF‑IDF or fastText embeddings scales linearly in training time but struggles when class boundaries are highly non‑linear or when label frequencies vary wildly.  
   * A *small fine‑tuned LLM* (e.g., DistilBERT) brings contextual embeddings and a shared representation that generalizes across unseen phrasing, yet its per‑token cost is higher.  
   * The *LLM API* offers the largest capacity without local training, but inference latency and privacy constraints become bottlenecks.

2. **Optimization principle**  
   Choose the model that minimizes expected loss under deployment constraints: \( \min_{\theta} \mathbb{E}_{(x,y)}[L(f_\theta(x),y)] + \lambda C(\theta) \).  
   Here, \(C\) captures compute and cost; \(\lambda\) trades accuracy for efficiency. Empirically, a fine‑tuned DistilBERT usually achieves the lowest loss with manageable \(C\).

3. **Geometric insight**  
   The 40 classes form a *hierarchical* space (e.g., “billing” → “refund”). A small LLM can learn this structure implicitly through its attention heads, whereas classical models require hand‑crafted hierarchical features.

4. **Non‑obvious point**  
   **Label sparsity matters more than overall data size.** When a few categories dominate, the model learns to overfit them unless regularized. Use *class‑balanced loss* or *label smoothing* regardless of which architecture you pick.

**Decision rule**

- If latency < 50 ms and compute budget is tight → classical classifier with calibrated class weights.  
- If you need robust generalization across varied phrasing and can afford moderate inference cost → fine‑tune a small transformer (DistilBERT or similar).  
- Reserve the LLM API for rapid prototyping or when data privacy prohibits local training.

By framing the choice as an optimization over loss and computational cost, you systematically pick the architecture that best satisfies both performance and operational constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
