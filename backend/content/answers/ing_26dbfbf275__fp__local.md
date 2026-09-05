---
qid: ing_26dbfbf275__fp__local
question: 'Explain: SFT mechanics — Fine Tuning And Alignment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 537
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:27:25-05:00'
sources: []
---

**Fine‑Tuning & Alignment (SFT) – a geometric–probabilistic view**

The *fundamental problem* is that pre‑trained language models learn a **prior distribution** \(p_{\theta}(x)\) over tokens from massive corpora, but this prior rarely matches the *desired behavior* \(q(x)\) of an application (e.g., safety, factuality). Fine‑tuning must adjust \(\theta\) so that the model’s posterior approximates \(q\).

1. **Optimization as manifold projection**  
   The space of all language models is a high‑dimensional manifold \(\mathcal{M}\). Pre‑training places us near a *high‑entropy* point \(\theta_0\). We want to find the nearest point on the *constraint surface* defined by \(q(x)\). This is exactly a **projection** problem: minimize
   \[
   L_{\text{SFT}}(\theta)=D_{\mathrm{KL}}\bigl(q(x)\,\|\,p_{\theta}(x)\bigr),
   \]
   where the KL divergence acts as a metric on \(\mathcal{M}\). The gradient points toward decreasing discrepancy, moving the model along geodesics that respect the manifold’s curvature.

2. **Alignment as probability reweighting**  
   Alignment can be seen as *re‑sampling* from \(p_{\theta_0}(x)\) with weights proportional to a preference score \(s(x)\). The resulting distribution is
   \[
   p_{\text{aligned}}(x)\propto p_{\theta_0}(x)\,e^{\alpha s(x)}.
   \]
   Fine‑tuning learns \(\theta\) such that \(p_{\theta}\approx p_{\text{aligned}}\). The exponential family form guarantees that the updated model remains within the same parametric class while respecting the score’s geometry.

**Non‑obvious insight:**  
Fine‑tuning is not merely *fitting* to labels; it is **shaping a probability mass function** in a way that preserves *mutual information* between context and token. By viewing alignment as an information bottleneck—maximizing \(I(\text{context};\text{token})\) under a constraint on the KL divergence—you can prove that SFT automatically trades off diversity for safety, explaining why over‑fitting to narrow prompts collapses language quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
