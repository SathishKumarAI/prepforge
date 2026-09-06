---
qid: ing_d33f5389b6__fp__local
question: 'Explain: Distill on real production traces, not synthetic data'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 437
total_tokens: 608
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:30:12-05:00'
sources: []
---

**Why a student model must learn from real production traces, not just synthetic data**

In knowledge distillation the *teacher* produces soft targets \(q_i\) that approximate the true posterior \(p(y|x)\). The student minimizes  
\[
L(\theta)=\sum_{i}\; \mathrm{KL}(q_i\,||\,p_{\theta}(y|x_i)) ,
\]
so its objective is to mimic the *teacher’s predictive distribution* over the data that actually occur in deployment.  

Synthetic traces are generated under an assumed generative model \(G_\phi(x)\). If \(G_\phi\) differs from the true data‑generation process, the induced empirical distribution \(\hat{P}_{\text{synthetic}}\) diverges from the real one \(P_{\text{real}}\). Minimizing \(L\) over \(\hat{P}_{\text{synthetic}}\) drives the student toward a teacher that is already mis‑calibrated for the true environment. By contrast, using production traces samples directly from \(P_{\text{real}}\), guaranteeing that the empirical risk minimized matches the *true* expected loss:
\[
\mathbb{E}_{x\sim P_{\text{real}}}\big[\,L(\theta; x)\,\big].
\]

**Non‑obvious insight:**  
Synthetic data can inadvertently smooth out rare but critical events (e.g., edge‑case user behaviors). Distillation on real traces preserves these low‑probability, high‑impact samples in the loss. The student learns to respect the heavy tails of \(P_{\text{real}}\), which synthetic augmentation often under‑represents, leading to a model that is robust to distribution shift and less prone to catastrophic failures in production.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
