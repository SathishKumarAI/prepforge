---
qid: ing_a346590fce__fp__local
question: 'Explain: The Interview Question — Fraud Detection'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 343
total_tokens: 510
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:52:56-05:00'
sources: []
---

**Why the “Fraud‑Detection” interview question?**  
In practice, a company’s revenue is eroded by unseen losses—credit card chargebacks, insurance claims, or synthetic identity theft. Detecting these events early is an *optimization* problem: maximize true‑positive rate while keeping false alarms low enough that analysts can actually investigate. The interviewer asks you to design this system because it tests three core skills:

1. **Probabilistic modeling** – You must formalize the *posterior probability* that a transaction is fraudulent given observable features (amount, device, time). Bayes’ rule turns noisy evidence into a calibrated risk score.
2. **Feature engineering & geometry** – Fraudsters shift tactics; you need to construct a representation where normal and anomalous transactions lie in distinct manifolds. Techniques like kernel‑PCA or t‑SNE expose hidden structure that simple thresholds miss.
3. **Cost‑sensitive learning** – The loss matrix is asymmetric: missing fraud costs \$1000, while a false alert costs analyst time. You should articulate how to choose a threshold that minimizes expected cost, not just maximize accuracy.

**Non‑obvious insight:** *Fraud is a “moving target”.* Instead of fitting a static model, treat detection as an online learning problem: continuously update priors with new evidence and use concept drift detection (e.g., Page‑Hinkley test) to trigger retraining. This dynamic approach turns the system from a one‑off classifier into a resilient defense that adapts to attackers’ evolving strategies.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
