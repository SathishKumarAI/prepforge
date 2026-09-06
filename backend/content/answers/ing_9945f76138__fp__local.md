---
qid: ing_9945f76138__fp__local
question: 'Explain: Uber Custom Problems (Machine Coding) — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 480
total_tokens: 654
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:31:53-05:00'
sources: []
---

**Why Uber’s “Custom Problems” are a staple of FAANG ML interviews**

The core challenge is *predicting an outcome for a new entity that has never appeared in the training data* (e.g., estimating a driver’s future demand or a rider’s willingness to pay). This is essentially a **cold‑start** problem, which can be framed as a **matrix‑factorization + side‑information optimization**.  

1. **Formulation**  
   - Let \(R\) be the sparse rating matrix (driver × time slot → earnings).  
   - Decompose \(R \approx U V^\top\), where \(U\) captures latent driver traits and \(V\) captures temporal/geo factors.  
   - For a new driver, we have no rows in \(U\); we must infer them from side‑information (profile, past trips).  

2. **Why it works**  
   - Factorization turns the combinatorial prediction into a convex surrogate that balances *data fit* and *regularization*, a classic bias‑variance trade‑off.  
   - Side‑information is incorporated as constraints or priors, ensuring predictions are grounded in observable attributes (e.g., location, experience).  

3. **Deeper principle**  
   This reduces to a **Bayesian inference** problem: we seek the posterior over latent factors given observed side‑info and the global matrix statistics. The MAP estimate corresponds to minimizing a regularized loss—an optimization that blends geometry (latent space) with probability (prior beliefs).

4. **Non‑obvious insight**  
   Most interviewees treat the new driver’s vector as *unknown* and solve for it directly, ignoring that we can predict it via a **small auxiliary model** (e.g., a regression from profile to latent space). Training this auxiliary predictor on historical drivers dramatically improves cold‑start performance without increasing dimensionality.  

Thus, Uber custom problems test your ability to turn an ill‑posed prediction into a tractable optimization by leveraging latent factor models and side‑information—a skill highly prized in production ML at FAANG.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
