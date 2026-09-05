---
qid: ing_19dca24961__fp__local
question: 'Explain: Tier-selection table — Agent Memory And State'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 508
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:01:20-05:00'
sources: []
---

### Why a *tier‑selection* table is needed

An autonomous agent must decide **what** to remember and **how** to use it while operating under limited compute and storage.  
The fundamental problem is *bounded rationality*: the agent can’t keep every observation forever, yet discarding useful information hurts performance.  
We therefore formalise memory as a set of **tiers** \(T_1,\dots,T_n\), each tier corresponding to a different retention cost (time‑to‑access, storage size, energy).  

### Deriving the selection rule

Let \(c_i\) be the cost per unit of data in tier \(i\) and let \(v(x)\) denote the *value* (expected future reward contribution) of datum \(x\).  
The agent’s objective is to maximise total expected value under a budget constraint \(\sum_i c_i|S_i|\le B\), where \(|S_i|\) is the number of items kept in tier \(i\).

Using Lagrange multipliers, the optimal allocation satisfies  

\[
v(x)=\lambda\,c_{\tau(x)}\quad\forall x,
\]

where \(\tau(x)\) is the chosen tier for datum \(x\).  
Thus, a datum should be stored at the *cheapest* tier whose cost satisfies \(c_i\le v(x)/\lambda\).

### Connection to information theory

The ratio \(v(x)/c_i\) is precisely an **information‑gain‑per‑cost** metric: it measures how much expected reward we obtain per unit of resource spent.  
This mirrors the *rate–distortion* trade‑off in lossy compression, where one balances fidelity against bandwidth.

### Non‑obvious insight

Most designs treat memory tiers as static (e.g., cache vs. disk). The table shows that **value should drive tier placement**, not just recency or frequency.  
Consequently, an agent can *promote* a rarely accessed but highly valuable datum to fast memory—something conventional caching misses because it only considers hit‑rate.

In practice, the tier‑selection table is simply a lookup of the threshold \(v(x)/c_i\) for each tier; updating \(\lambda\) online keeps the agent’s memory budget automatically respected.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
