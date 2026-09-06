---
qid: ing_dbbe2bea72__fp__local
question: 'Explain: Optimising prompts — Prompt Engineering And Context'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 460
total_tokens: 629
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:46:19-05:00'
sources: []
---

**Prompt engineering is the design of a *conditional distribution* over model outputs that satisfies a user‑specified objective.**  
At its core we ask: *Given a language model \(p_\theta(\text{output}\mid\text{prompt})\), how do we choose \(\text{prompt}\) so that the induced output maximises some reward function \(R(\cdot)\)?*  

1. **Formulation as constrained optimisation**  
   \[
   \max_{\text{prompt}}\; \mathbb{E}_{y\sim p_\theta(y|\text{prompt})}[R(y)]\quad
   \text{s.t.}\;\text{prompt length}\leq L.
   \]
   The constraint encodes the model’s token budget, turning prompt design into a *resource‑constrained* problem.

2. **Context as a regulariser**  
   Adding context \(C\) shifts the posterior:
   \[
   p_\theta(y|C,\text{prompt}) \propto p_\theta(C,y|\text{prompt}),
   \]
   effectively reweighting the model’s prior beliefs. Context thus *biases* the sampling distribution toward regions of higher reward without altering the underlying policy.

3. **Geometry of the latent space**  
   Prompts act as coordinates in a high‑dimensional embedding; small lexical changes can move the token vector across decision boundaries defined by the model’s attention patterns. Optimising prompts is therefore a *local search* on this geometry, often requiring discrete perturbations (synonym swaps) that respect syntactic constraints.

**Non‑obvious insight:**  
Because context and prompt jointly determine the *joint* distribution \(p(C,y|\text{prompt})\), you can sometimes achieve higher rewards by **reducing context length** rather than expanding it. A succinct, well‑structured context forces the model to focus its capacity on the prompt’s core instruction, mitigating catastrophic forgetting of prior tokens. This counterintuitive “less is more” principle often yields cleaner, more reliable outputs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
