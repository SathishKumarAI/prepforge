---
qid: ing_e30cedad09__faang__local
question: 'Explain: Why is MSE a bad loss for classification, even though it "works"?
  Connect it to the probabilistic view of loss functions.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 470
total_tokens: 721
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:27:06-05:00'
sources: []
---

**Clarify**  
You’re asking why Mean‑Squared Error (MSE) isn’t ideal for classification—even if a neural net can still converge—and how this ties into the probabilistic interpretation of losses.

**Approach**  
1. Recall that classification is a discrete, categorical problem; we normally predict class probabilities via softmax and compare them to one‑hot labels using cross‑entropy.  
2. Examine MSE’s assumptions: it treats targets as continuous values and penalizes squared differences linearly in the output space.  
3. Contrast with the likelihood‑based view of loss functions.

**Depth**  
MSE assumes Gaussian noise on real‑valued outputs; it maximises a quadratic surrogate to the log‑likelihood. For classification, the true data generation process is multinomial (or Bernoulli for binary), not Gaussian. Consequently:  

- **Flat gradients near decision boundaries:** When the softmax output is far from 0 or 1, the squared error gradient shrinks, slowing learning on hard examples.  
- **Mis‑aligned probability calibration:** MSE doesn’t directly optimise log‑probabilities; it can produce poorly calibrated probabilities (e.g., over‑confident outputs).  
- **Non‑convexity & multi‑modal loss surface:** The quadratic form interacts poorly with the softmax, yielding many local minima.

In contrast, cross‑entropy is the negative log‑likelihood of the correct class under a multinomial model; its gradients are proportional to the prediction error (probability minus target), giving larger updates for misclassified samples and leading to faster convergence and better calibrated outputs.

**Edge cases**  
- **Imbalanced data:** MSE may over‑penalise majority classes, whereas cross‑entropy can be weighted.  
- **Very confident predictions:** MSE’s penalty plateaus, while cross‑entropy continues to penalise misclassifications heavily.

**Optimize & communicate**  
Recommend replacing MSE with categorical (or binary) cross‑entropy for classification tasks; it aligns the loss with the probabilistic model, yields stronger gradients on hard samples, and produces well‑calibrated probabilities. Explain this shift succinctly during an interview to demonstrate both intuition and technical rigor.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
