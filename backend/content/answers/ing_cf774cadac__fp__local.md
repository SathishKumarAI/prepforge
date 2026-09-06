---
qid: ing_cf774cadac__fp__local
question: 'Explain: Planner-Based Tool Selection — The Complete Guide to Tool Selection
  in AI Agents'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 411
total_tokens: 586
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:21:27-05:00'
sources: []
---

**Planner‑Based Tool Selection: a principled design**

At its core an *AI agent* solves a decision problem: given state \(s\) and goal \(G\), choose an action sequence \(\pi\) that maximizes expected utility \(U\).  
When the agent’s “action set” is heterogeneous—text generation, database query, image synthesis, web‑scraping—the planner must decide **which tool to invoke at each step**.  

1. **Model the tools as stochastic operators**: each tool \(T_i\) has a probability distribution over outputs conditioned on input and context, \(P(o|i,s)\).  
2. **Define a cost–benefit trade‑off**: each invocation incurs latency \(c_i\), computational budget \(b_i\), and success probability \(p_i\). The planner solves  
   \[
   \max_{\pi} \mathbb{E}\!\left[\sum_t U(o_t) - \lambda c_{i_t}\right]
   \]
   where \(\lambda\) balances utility against cost.  
3. **Dynamic programming over a *tool graph***: nodes are tool states, edges weighted by expected marginal gain; optimal policy emerges from Bellman equations.  

**Why it works** – The planner turns heterogeneous capabilities into a single Markov decision process (MDP), leveraging the principle of *optimal substructure* from dynamic programming.  
**Non‑obvious insight**: The *entropy* of a tool’s output distribution is as informative as its mean success rate. A low‑entropy, high‑cost tool may be preferable when precision matters; a high‑entropy, cheap tool can be used for exploratory steps that reduce overall uncertainty faster than deterministic alternatives. Thus, effective tool selection hinges on both expected utility *and* the reduction of epistemic uncertainty.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
