---
qid: ing_c7f09296c6__faang__local
question: 'Explain: Example — Limit of RLVR'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 644
total_tokens: 875
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:25:26-05:00'
sources: []
---

**Clarify**  
You’re asking for the *limit* of **RLVR** – a metric that compares the value obtained by a policy to a baseline (often the optimal or Lagrangian‑optimal value). In practice RLVR = Vπ / V∗, where Vπ is the expected return under policy π and V∗ is the best achievable return. We’ll assume finite MDPs with discounted rewards and that V∗ > 0.

**Approach**  
1. Define RLVR formally.  
2. Derive its upper/lower bounds as training progresses.  
3. Discuss convergence conditions (policy improvement, exploration).  
4. Compute the limit in the asymptotic regime (π → π∗).

**Depth**  
RLVR(t) = Vπt / V∗.  
- **Upper bound:** RLVR ≤ 1 by definition; it cannot exceed the optimal value.  
- **Lower bound:** ≥ 0, but often bounded away from zero if exploration is sufficient.  
Under standard assumptions (finite horizon, proper policy improvement), πt converges to an ε‑optimal policy with probability one. Thus  
\[
\lim_{t→∞} RLVR(t) = \frac{V_{\pi^*}}{V_{\ast}} = 1.
\]  
If the algorithm stalls or suffers from sub‑optimal exploration, the limit can be < 1; e.g., in a bandit with insufficient pulls, RLVR may converge to (k–1)/k.

**Edge Cases**  
- **Zero optimal value**: division by zero – define RLVR = 0.  
- **Non‑ergodic MDPs**: V∗ undefined for some states → limit undefined.  
- **Deterministic rewards**: RLVR jumps to 1 after first episode.

**Optimize & Communicate**  
To tighten the bound, enforce a minimum exploration rate (ε‑greedy) or use entropy regularization; this guarantees that RLVR approaches 1 exponentially fast with rate O(γ^t). Explain that in an interview you’d highlight: *“RLVR is a sanity check on convergence; its limit of 1 signals optimality, while any deviation flags exploration or model bias.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
