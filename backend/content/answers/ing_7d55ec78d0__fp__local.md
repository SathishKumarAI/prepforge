---
qid: ing_7d55ec78d0__fp__local
question: 'Explain: Sarvam-M ships a hybrid "think" and "non-think" mode and was post-trained
  with SFT then RLVR. Explain how you would build that, and why RLVR over vanilla
  RLHF.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 204
output_tokens: 757
total_tokens: 961
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:32:09-05:00'
sources: []
---

**From the problem of *safe instruction following* to a hybrid policy**

The core challenge is: an AI must generate useful responses **without drifting into hallucination or harmful content**.  
We treat this as a **constrained sequential decision problem** in which each token \(t_k\) maximises expected reward while obeying safety constraints \(\mathcal{C}\).

1. **Base policy (think mode)** – a language model trained by *supervised fine‑tuning* (SFT) on curated dialogue pairs.  
   - SFT solves the maximum likelihood estimation (MLE) problem:  
     \[
     \theta^\*\;=\;\arg\max_\theta\sum_{(x,y)}\log p_\theta(y|x)
     \]
   - It gives a *stable* policy that reproduces human‑like language but lacks principled safety guarantees.

2. **Safety head (non‑think mode)** – a binary classifier \(h_\phi(t_k)\in[0,1]\) trained to predict the probability of violating \(\mathcal{C}\).  
   - We *post‑train* it on annotated unsafe/ safe tokens, yielding an *expected safety penalty* \(L_{\text{safe}}(t_k)=\lambda\,h_\phi(t_k)\).

3. **Combined objective** – at inference we run a *mixture policy*:  
   \[
   p_{\text{hybrid}}(t_k|x) = (1-\alpha)p_{\theta^\*}(t_k|x) + \alpha\,\tilde{p}_{\theta^\*}(t_k|x)\,e^{-\beta L_{\text{safe}}(t_k)}
   \]
   where \(\tilde{p}\) is the “think” mode after soft‑max reweighting.

4. **RLVR (Value‑Based RL with Variational Regularisation)**  
   - Vanilla RLHF optimises a reward \(R\) via policy gradients: \(\nabla J = \mathbb{E}[R\,\nabla\log p]\).  
   - RLVR replaces the scalar reward with an **estimated value function** \(V_\psi(x)\), trained by minimizing
     \[
     \min_{\psi}\;\mathbb{E}\big[(V_\psi(x)-\hat{R})^2\big]
     \]
     and uses *variance‑controlled* policy updates:  
     \[
     p_{k+1} \propto p_k^{\,\eta}\,e^{\alpha(V_\psi-\bar V)}
     \]
   - This yields two benefits:
     1. **Stability** – the value estimate smooths high‑variance rewards typical in language generation.
     2. **Safety bias** – by including the safety head inside \(V_\psi\), RLVR naturally discourages unsafe trajectories without explicit penalty terms.

**Non‑obvious insight:**  
The hybrid’s *non‑think* mode can be interpreted as a *soft constraint projection*. By exponentiating the safety penalty, we effectively perform a **Gibbs sampling in a constrained space**, which guarantees that even if the think policy proposes an unsafe token, its probability is exponentially suppressed. This is mathematically equivalent to projecting onto the feasible set defined by \(\mathcal{C}\), thus preserving the expressive power of the base model while enforcing safety through a principled probabilistic mechanism.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
