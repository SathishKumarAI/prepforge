---
qid: ing_a0efb04498__fp__local
question: 'Explain: The tax you pay to run multiple agents (Partner)'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 439
total_tokens: 612
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:47:55-05:00'
sources: []
---

**Why a “tax” appears when we run many learning agents**

The *tax* is the unavoidable extra loss that any learning system incurs because it must maintain several hypotheses in parallel instead of a single one.  
From the outset, each agent consumes **capacity**—memory, computation, and most importantly *statistical sample*.  In statistical learning theory, the expected generalisation error grows with model complexity (VC‑dimension, Rademacher complexity).  When we have \(k\) agents, the total capacity is roughly \(k\) times that of one agent.  To keep the overall risk bounded, each agent must be trained on a proportionally larger data set; otherwise its empirical risk will overfit.

Mathematically, for a loss \(\ell\), the expected excess risk satisfies  

\[
\mathbb{E}[R(\hat f_k)]-R(f^*) \;\lesssim\; 
\frac{\mathrm{complexity}(\mathcal H)}{\sqrt{n/k}},
\]

where \(n\) is the total number of samples.  The factor \(1/\sqrt{k}\) shows that, holding \(n\) fixed, the risk per agent increases like \(\sqrt{k}\).  This is the *tax*: each extra agent pays a price in terms of higher variance and poorer generalisation unless we inflate the data budget.

**Non‑obvious insight:**  
The tax is not just about more parameters; it’s fundamentally a *resource‑allocation* problem.  In multi‑agent settings (e.g., ensemble learning, multi‑task learning), an optimal strategy is to **share representations**—train a common backbone and fine‑tune small heads for each agent.  This reduces the effective complexity per agent, lowering the tax while preserving diversity.  Thus, careful architectural sharing can turn a linear cost into a sublinear one, turning the tax from a liability into an asset.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
