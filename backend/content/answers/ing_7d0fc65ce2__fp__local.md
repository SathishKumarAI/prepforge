---
qid: ing_7d0fc65ce2__fp__local
question: 'Explain: Introduction — Tools vs. Subagents: Building Effective AI Agents
  Without Over-Engineering'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 409
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:31:43-05:00'
sources: []
---

**Why “Tools” beats “Subagents” for building practical AI**

The core problem any AI system must solve is *goal‑directed decision making under uncertainty*.  
A naïve solution is to hand‑craft a *subagent*—a mini‑pipeline that takes an observation, runs a model, and outputs an action. Each subagent is a black box with its own internal parameters and training data.

From a **probabilistic perspective**, the joint distribution over observations, actions, and hidden states can be factorised as  
\(P(o,a) = \sum_{z} P(z|o)\,P(a|z,o)\).  
Here \(z\) is an *intermediate tool* (e.g., a language parser or visual detector) that supplies the minimal sufficient statistics for the policy. The subagent approach forces us to learn the entire conditional \(P(a|o)\) in one shot, which requires exponentially more data and makes it brittle when contexts shift.

**Tools** are *factorised latent variables* that capture reusable structure (e.g., grounding language, mapping vision to coordinates). They can be trained once and recombined arbitrarily, yielding a modular policy that generalises without retraining the whole system. Moreover, tools expose an interpretable interface; we can debug by inspecting \(z\), not the opaque subagent.

**Non‑obvious insight:**  
When you treat each tool as a *probabilistic inference step*, you automatically inherit the *optimality* of Bayesian decision theory: any policy that conditions on the true posterior over \(z\) is optimal. Subagents, lacking this explicit conditioning, can never achieve that theoretical ceiling unless they approximate it perfectly—an impractical requirement.

Thus, building AI agents with a *tool‑based modular architecture* aligns with fundamental statistical principles and avoids the curse of over‑engineering.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
