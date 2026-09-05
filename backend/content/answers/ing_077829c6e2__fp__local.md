---
qid: ing_077829c6e2__fp__local
question: How do you design a good rubric for model-graded evals, and where does chain-of-thought
  fit?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 481
total_tokens: 663
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:21:38-05:00'
sources: []
---

**Designing a model‑graded rubric is an optimization problem over the space of *evaluation fidelity* and *computational cost*.**  
At its core we want a function \(R(\mathbf{x})\) that maps a model’s raw outputs \(\mathbf{x}\) (e.g., a text answer) to a scalar score. The objective is to make \(R\) as close as possible to the “ground‑truth” human score, while keeping inference tractable.

1. **Decompose the task into sub‑criteria** that are *independent* and *monotonic*: correctness, completeness, coherence, style, etc.  
   - Independence ensures the loss surface is convex in each dimension; monotonicity guarantees that improving any criterion never hurts overall score.

2. **Parameterise each sub‑criterion with a lightweight probe** (e.g., a classifier or regression head). Train these probes on a small annotated set; they become differentiable approximations of human judgment.

3. **Aggregate via a weighted sum with learned weights** \(\mathbf{w}\) that encode the trade‑off between criteria. Optimise \(\mathbf{w}\) by minimizing a calibration loss (e.g., mean squared error against human scores).

4. **Regularise the probes** to prevent overfitting: penalise large gradients and enforce sparsity so each probe focuses on its intended signal.

---

### Where chain‑of‑thought (CoT) fits

CoT is not an evaluation criterion; it’s a *latent representation* that makes the score function more tractable. By conditioning each probe on the CoT, we:

- **Reduce entropy**: the model’s internal reasoning provides explicit evidence for correctness and completeness, tightening the posterior over scores.
- **Enable interpretability**: probes can be inspected against the CoT to diagnose misalignments (e.g., a correct answer with flawed reasoning).

Non‑obvious insight: *CoT acts as an implicit regulariser on the probes.* Because the probes must explain the same chain, they are forced into a shared latent space that captures causal dependencies between sub‑criteria. This aligns the model’s internal logic with human evaluation standards, improving both fidelity and fairness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
