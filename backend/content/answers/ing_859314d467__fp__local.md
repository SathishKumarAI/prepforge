---
qid: ing_859314d467__fp__local
question: 'Explain: Workflow: Evaluator-optimizer — Building Effective AI Agents \\
  Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 404
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:48:47-05:00'
sources: []
---

### From First Principles

An **AI agent** is a system that perceives an environment and takes actions to achieve goals.  
The *evaluators* are the loss functions that quantify success: they map histories of perception‑action pairs into scalar scores (e.g., reward, accuracy). The *optimizers* are algorithms that adjust internal parameters so that the evaluator’s score improves.

Why must we separate them?  
1. **Modularity** – a good loss is reusable across models; a good optimizer is reusable across losses.  
2. **Generalization** – optimizers learn to follow gradients of any differentiable objective, allowing rapid experimentation.  
3. **Theoretical grounding** – the evaluator encodes an *objective function* in the language of optimization (minimizing expected loss). The optimizer implements a *search strategy* over parameter space.

### Workflow

1. **Define the evaluator** from first principles: identify constraints and trade‑offs, then formalize them as a differentiable objective.  
2. **Choose an optimizer** that respects the geometry of the parameter manifold (e.g., Adam for high‑dimensional stochastic problems).  
3. **Iterate**: compute gradients → update parameters → re‑evaluate.  

This loop converges to a local optimum because each step reduces expected loss under the evaluator’s assumptions, by virtue of *gradient descent*—the steepest descent in function space.

### Non‑obvious Insight

The *rate* at which an optimizer explores parameter space is itself a function of the evaluator’s curvature. By **preconditioning** (e.g., using Fisher information), we align step directions with the evaluator’s geometry, dramatically speeding convergence even when gradients are noisy. This geometric alignment—often overlooked—is what turns a brittle “black‑box” training into a principled, efficient design process for robust AI agents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
