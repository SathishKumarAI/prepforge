---
qid: ing_d55a5020b6__fp__local
question: 'Explain: Cost tradeoffs — Agent Memory And State'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 351
total_tokens: 520
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:33:58-05:00'
sources: []
---

**Why an agent’s memory budget forces a compromise with its state representation**

An AI agent must *predict* future rewards given its history.  
Formally we need a function  

\[
f : \mathcal{H} \rightarrow \Delta(\mathcal{A}) ,
\]

where \(\mathcal{H}\) is the set of all past percept–action sequences.  
Storing the entire history is infeasible: the state space grows exponentially with time, so we approximate it by a *compact representation* \(s_t = \phi(h_{1:t})\).  

The trade‑off arises from **information bottleneck theory**: the agent must keep enough mutual information \(I(s_t; r_{t+1})\) to predict rewards while minimizing \(I(s_t; h_{1:t})\), its memory cost.  
Optimizing this yields a *minimal sufficient statistic*—the smallest state that preserves predictive power.  

In practice, we implement \(\phi\) via recurrent networks or variational auto‑encoders that learn to compress history into latent variables. The deeper insight is that **predictive coding** (learning to forecast future observations) automatically discovers the relevant subspace of memory: if a feature can be predicted from past actions and percepts, it carries no extra value for decision making and can be dropped. Thus agents achieve low‑cost state representations not by hand‑engineering but by letting prediction drive compression.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
