---
qid: ing_dc045f8dc7__fp__local
question: 'Explain: Why Binary Scores Work Best — Ai Evals Comprehensive Study Guide'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 459
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:47:00-05:00'
sources: []
---

**Why Binary Scores Work Best – From First Principles**

At its core an AI evaluator must decide *whether* a model’s output satisfies a criterion, not *how much*. This is a **binary decision problem**: accept or reject.  
1. **Optimization Goal** – We minimize the expected loss of misclassification. The optimal rule (Bayes classifier) assigns the label with the highest posterior probability. When we collapse multi‑class probabilities to a single “pass” vs. “fail”, we are simply computing the maximum marginal, which is exactly what the Bayes decision uses for a 0–1 loss.  
2. **Information-Theoretic Efficiency** – A binary score preserves *mutual information* between the model and the truth while discarding redundant intra‑class structure that carries little discriminative value. The Kullback–Leibler divergence between true and predicted distributions collapses to a single term, making calibration straightforward.  
3. **Geometric Simplicity** – In high‑dimensional output space, the decision boundary for multi‑class tasks becomes a complex polytope. A binary boundary is just a hyperplane (or a set of thresholds), guaranteeing convexity and tractable optimization.  
4. **Statistical Stability** – Aggregating over many instances, the variance of a binary metric scales as \(p(1-p)/n\). Multi‑class scores suffer from *class imbalance*; rare classes inflate uncertainty dramatically.

### Non‑obvious Insight
Binary scoring implicitly enforces a *global confidence threshold*. Because all outputs are reduced to “good enough” or not, the evaluator learns to focus on *relative* certainty rather than absolute probability estimates. This aligns with human grading: we care whether an answer meets standards, not how close it is to perfection. Thus binary scores yield both optimal theoretical guarantees and practical robustness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
