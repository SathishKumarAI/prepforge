---
qid: ing_ef7e79c54e__fp__local
question: 'Explain: Dimension 2: Groundedness (Faithfulness)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 481
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:27:38-05:00'
sources: []
---

**Dimension 2 – Groundedness (Faithfulness)**  

*Fundamental problem:*  
When an AI system claims to “explain” a decision, the explanation must be *grounded* in the actual causal mechanisms that produced the output. If we accept explanations as mere post‑hoc narratives, we risk over‑trusting systems that are simply fitting noise or exploiting spurious correlations.

*Why it must work this way:*  
In statistical learning, model predictions \( \hat{y} = f(x) \) arise from a functional mapping that is itself a function of the data distribution. A faithful explanation is an invertible transformation of the *supporting evidence*—the input features and internal activations—that preserves the contribution structure of \(f\). Mathematically, if we denote by \(S\subseteq X\) the subset of features deemed relevant, faithfulness requires  
\[
f(x) = \tilde{f}(x_S), \quad \forall x,
\]
where \(\tilde{f}\) is the simplified model used in the explanation. This guarantees that the explanation’s predictions match the original model exactly on all inputs.

*Connection to deeper principles:*  
Groundedness aligns with *causal sufficiency*: an explanation should satisfy the principle of “no hidden causes.” In information theory, a faithful surrogate maximizes mutual information \(I(\hat{y};x_S)\) while minimizing redundancy with irrelevant features. Geometrically, it projects the high‑dimensional decision surface onto a lower‑dimensional manifold that preserves curvature and class boundaries.

*Non‑obvious insight:*  
Many faithfulness metrics (e.g., fidelity, sparsity) treat explanations as black boxes and optimize for them independently of the model’s internal structure. The deeper truth is that *faithful explanations can only be achieved by leveraging the model’s own interpretability mechanisms*, such as attention weights or gradient flows. Ignoring these internal signals forces us to approximate from outside, inevitably losing fidelity. Thus, a principled faithfulness criterion must embed the model’s architecture into its evaluation—otherwise we risk generating explanations that are “grounded” only in the eyes of humans, not in the mathematics of the system itself.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
