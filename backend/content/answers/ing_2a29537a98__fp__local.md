---
qid: ing_2a29537a98__fp__local
question: 'Explain: Step 2. Start using an LLM — How Do AI Agents Work - by Neo Kim
  and Fran Soto'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 417
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:34:36-05:00'
sources: []
---

### Step 2 – “Start Using an LLM”  
In the Neo Kim & Santos framework the second phase is to **attach a language model (LLM) to the agent’s decision pipeline**. The fundamental problem this solves is *semantic grounding*: raw sensory data or high‑level goals are expressed in natural language, but an agent must act in a discrete action space. An LLM serves as a *universal translator* that maps between these two worlds.

#### Why it must be a “large” model
1. **Capacity for world knowledge** – The LLM’s parameters encode billions of facts and causal relations learned from text corpora; this external knowledge replaces the need to hand‑craft every rule.
2. **Few‑shot generalisation** – Large models can extrapolate from a handful of demonstrations, allowing an agent to adapt to new tasks with minimal fine‑tuning.

#### Core principle: *Probabilistic inference over latent plans*  
The agent frames each action as a sample from the posterior \(P(a \mid s, c)\), where \(s\) is the current state and \(c\) a concise “plan” prompt. The LLM provides this distribution by conditioning on both the prompt and the observed context, effectively performing *Bayesian reasoning* over symbolic plans.

#### Non‑obvious insight
Most people treat the LLM as an oracle that spits out actions. In reality, **the agent learns to shape the prompt**—adding constraints, iteratively refining “why” questions—to steer the model’s distribution toward safer, more efficient actions. Prompt engineering thus becomes a *policy optimisation* problem in its own right.

By integrating an LLM this way, the agent gains rapid access to external knowledge and flexible reasoning without explicit programming of every rule, enabling scalable deployment across diverse domains.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
