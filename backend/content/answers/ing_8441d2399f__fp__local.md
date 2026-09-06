---
qid: ing_8441d2399f__fp__local
question: 'Q: How do you prevent a model from "unlearning" general capabilities during
  fine-tuning?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 462
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:46:30-05:00'
sources: []
---

**Why “unlearning” happens**

Fine‑tuning optimises the same loss function that trained the base model, but on a *much smaller* dataset.  
If the new data are highly imbalanced or contain only a narrow distribution of labels, the gradient signal for the general directions in parameter space (those that encode broad knowledge) becomes negligible compared to the strong, specific gradients from the fine‑tune set. The optimiser then drifts away from the original manifold—effectively “unlearning” what was previously learned.

**The principled fix**

Treat the base model as a *prior* over parameters and perform **regularised Bayesian fine‑tuning**:

1. **Posterior approximation**  
   \[
   p(\theta|D_{\text{ft}}) \propto p(D_{\text{ft}}|\theta)\,p_0(\theta)
   \]
   where \(p_0(\theta)=\mathcal N(\theta;\hat\theta,\,\Sigma)\) is a Gaussian centred at the pre‑trained weights \(\hat\theta\).  
2. **Elastic weight consolidation (EWC)**  
   Estimate the Fisher information matrix \(F_{ii}=\mathbb{E}\big[(\partial_{\theta_i}\log p(D_{\text{base}}|\theta))^2\big]\) from a few base‑dataset samples.  
3. **Loss**  
   \[
   L(\theta)=L_{\text{ft}}(\theta)+\frac{\lambda}{2}\sum_{i}F_{ii}(\theta_i-\hat\theta_i)^2
   \]
   The quadratic penalty keeps parameters that are important for the base task from moving far, while allowing free adjustment where the new data dominate.

**Non‑obvious insight**

The Fisher matrix is not merely a regulariser; it encodes *parameter importance* derived from the original data distribution. By weighting updates inversely to this importance, you preserve the geometry of the function space that supports general reasoning—exactly what prevents unlearning. Ignoring this curvature leads to catastrophic forgetting, whereas respecting it keeps the model’s expressive manifold intact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
