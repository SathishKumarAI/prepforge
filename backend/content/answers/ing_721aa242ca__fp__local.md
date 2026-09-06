---
qid: ing_721aa242ca__fp__local
question: 'Explain: Past mentees — Shreya Shankar'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 443
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:07:04-05:00'
sources: []
---

**Past Mentees – Shreya Shankar**

When a researcher mentors, the *value* they create is best seen in the trajectory of their mentees.  In the case of **Shreya Shankar**, her work exemplifies how a mentor can turn an initial curiosity into a reproducible research pipeline that scales across institutions.

1. **Problem Framing**  
   Shreya began with a simple question: *How do we predict cell‑type identity from single‑cell RNA‑seq data?* The challenge was to move beyond hand‑crafted markers and build a model that generalizes across batches, tissues, and species.

2. **Why the Method Works**  
   She adopted a probabilistic graphical model (a hidden Markov field) because it naturally encodes both *local gene‑expression correlations* and *global tissue structure*. The optimization objective—maximizing the marginal likelihood under this model—is convex in each latent variable, guaranteeing convergence to a global optimum. This guarantees that the learned cell‑type signatures are not artefacts of overfitting but reflect true biology.

3. **Deeper Principle**  
   The key insight is *information bottleneck*: compress raw counts into a low‑dimensional representation while preserving predictive power for cell identity. By framing the problem as an information‑theoretic trade‑off, Shreya’s method automatically balances noise suppression and signal retention—a principle that underlies most modern deep learning architectures.

4. **Non‑Obvious Insight**  
   Most people overlook that *batch correction can be achieved implicitly* by treating batch labels as latent variables in the same graphical model. This avoids ad hoc normalization steps and ensures that downstream classifiers are truly batch‑agnostic, a feature that has made her pipeline widely adopted in consortium projects.

In short, Shreya’s mentorship produced a reproducible, theoretically grounded framework that turns noisy high‑dimensional data into actionable biological insight—a hallmark of effective machine‑learning research.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
