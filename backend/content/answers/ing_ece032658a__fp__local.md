---
qid: ing_ece032658a__fp__local
question: 'Explain: subtract the one from the other to — Coding Adventure: Chess'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 417
total_tokens: 591
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:23:08-05:00'
sources: []
---

### Subtracting One Model’s Prediction From Another in a “Coding Adventure” for Chess

When two neural nets are trained on the same chess‑board representation, their outputs are probability distributions over legal moves.  
**Fundamental problem:** we want to isolate *what* each model has learned that the other hasn’t—essentially the **difference function** \(f_{\Delta}=f_{A}-f_{B}\).  

#### Why subtraction works
1. **Linear response of softmax logits**: The logit vector \(z\) is linear in the network parameters; subtracting two logits yields a new vector that preserves the direction where one model scores higher.  
2. **Contrastive signal**: If \(f_{A}\) assigns high probability to a move that \(f_{B}\) deems unlikely, \(f_{\Delta}\) will be positive there, flagging an “advantage” of \(A\). This is the core idea behind *model‑difference learning* used in ensemble pruning.  
3. **Gradient interpretation**: The gradient \(\nabla f_{\Delta} = \nabla f_{A}-\nabla f_{B}\) tells us how to adjust parameters so that the models diverge only on informative moves, a form of *adversarial regularization*.

#### Deeper principle
This subtraction is an instance of **information‑theoretic contrast**: it measures the Kullback–Leibler divergence in a linearized space, revealing mutual information that one model captures but the other does not.  

#### Non‑obvious insight
Subtracting logits *before* softmax preserves the relative ordering of moves even when both models are highly confident (i.e., saturating probabilities). If you subtract after softmax, the difference can be dominated by tiny probability fluctuations, masking meaningful discrepancies. Thus, always perform subtraction on raw logits for a stable contrast signal.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
