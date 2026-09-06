---
qid: ing_c890955258__fp__local
question: 'Explain: The interview loop — Moonshot Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 441
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:07:37-05:00'
sources: []
---

**The interview loop in Moonshot‑AI**

*Fundamental problem*: an autonomous system must learn a policy that maximises human‑aligned utility \(U(a)\) while only receiving sparse, noisy signals from humans. Direct optimisation is impossible because the true reward surface is unknown and high‑dimensional.

*Why a loop?*  
1. **Sample‑efficient exploration** – The agent proposes an action \(a_t\).  
2. **Human feedback** – A human evaluates \(a_t\) (or a counterfactual), producing a scalar or ranking.  
3. **Model update** – The algorithm treats the feedback as a noisy observation of \(\nabla U(a_t)\) and updates a surrogate reward model \(R_\theta(a)\).  
4. **Policy refinement** – Using \(R_\theta\), the agent recomputes an improved action distribution.

Mathematically, this is Bayesian optimisation on a latent reward manifold: we maintain a posterior over \(\nabla U\) conditioned on feedback; the loop iteratively reduces expected regret \(E[\max_a U(a)-U(a_t)]\). The curvature of \(R_\theta\) dictates exploration width—if the Hessian is flat, more exploratory samples are needed to avoid local optima.

*Non‑obvious insight*: **The human’s signal variance must be tuned**. Too low variance (overconfident feedback) collapses exploration; too high variance inflates uncertainty and slows convergence. Thus, an adaptive noise schedule—starting with generous variance to explore, then tightening as the posterior concentrates—is essential for rapid, reliable alignment.

In short, the interview loop is a principled, information‑theoretic bridge between sparse human judgments and continuous policy optimisation, enabling Moonshot AI systems to “learn by asking questions.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
