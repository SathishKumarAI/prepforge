---
qid: ing_b8a477cd42__fp__local
question: 'Q114: Design a skill system for a fleet of internal agents using Agent
  Skills. How do skills differ from MCP tools and from fine-tuning?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 468
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:36:37-05:00'
sources: []
---

**Why a skill system is needed**

A fleet of autonomous agents must *decide* what to do in any state, not just produce a next token.  
If we give each agent only a language model (LM) and let it learn by gradient descent, the policy space explodes: every training example rewrites weights for *all* downstream tasks.  
Instead we separate **what** an agent can do (**skills**) from **how** it is instructed to use them (**MCP tools**).  

**Skills as modular policies**

1. **Definition** – a skill is a closed‑loop controller:  
   \( \pi_s(a_t|s_{0:t}) = f_\theta(s_t) \), with parameters \(\theta\) trained on a *single* objective (e.g., “plan a route”).  
2. **Why it works** – the policy gradient theorem guarantees that optimizing the expected return for this objective yields a stationary point of the skill’s value function.  
3. **Independence** – skills are orthogonal because their loss functions involve disjoint data and rewards; they can be updated in parallel without interference (no catastrophic forgetting).  

**Contrast with MCP tools**

- MCP tools are *interfaces*: a prompt that tells an LM to “use skill X”.  
- They do not learn; they merely invoke pre‑trained skills.  
- The tool’s policy is deterministic: \( \text{invoke}(s) = s' \).  

**Contrast with fine‑tuning**

Fine‑tuning retrains the entire LM on a new dataset, mixing objectives and collapsing modularity.  
A skill system keeps the base LM frozen; only the small policy head changes, preserving prior knowledge.

**Non‑obvious insight**

Because each skill is trained *on its own reward*, we can *compose* them arbitrarily at inference time (e.g., “first search, then summarize”) without re‑optimizing. This compositionality turns a single LM into an *executable program*—a true AI stack where the planner chooses which small neural modules to run, not just which token to output.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
