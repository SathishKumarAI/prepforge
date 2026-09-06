---
qid: ing_90483fe0be__fp__local
question: 'Explain: Key hyperparameters — Fine Tuning And Alignment'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 615
total_tokens: 785
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:11:51-05:00'
sources: []
---

**Fine‑tuning & alignment: the “what” is clear—adapt a pretrained language model (LM) to a new task or behaviour—but the *why* of its hyper‑parameters is often glossed over.**

1. **Learning rate (η)**  
   *Fundamental role*: controls how fast the network’s weights move along the gradient field.  
   *Why it matters*: In fine‑tuning we want to stay on a *good basin* found during pretraining; too large η risks jumping into a poor basin, too small stalls progress.  
   *Deeper principle*: η is an implicit regulariser—small steps implicitly favour solutions that preserve the original geometry (i.e., low‑rank perturbations of the weight matrix).  

2. **Batch size (B)**  
   *Fundamental role*: determines the variance σ² of the stochastic gradient estimator ∇L̂≈∇L+ε, ε~N(0,σ²).  
   *Why it matters*: Larger B reduces noise, letting us use a higher η without destabilising training; smaller B injects beneficial exploration but may require learning‑rate decay.  
   *Deeper principle*: The product η/√B appears in the effective step size of stochastic optimisation (variance–bias trade‑off).  

3. **Weight‑decay / L2 penalty (λ)**  
   *Fundamental role*: penalises large weight norms, encouraging similarity to pre‑trained parameters.  
   *Why it matters*: It keeps fine‑tuned weights close to the “good” region discovered by self‑supervised learning, mitigating overfitting on small downstream data.  
   *Deeper principle*: λ acts as a Bayesian prior on weights (Gaussian), encoding the assumption that pretraining already captured useful structure.  

4. **Prompt length / temperature (τ)** for alignment  
   *Fundamental role*: controls entropy of the output distribution P(y|x).  
   *Why it matters*: Lower τ sharpens responses, making the model more deterministic—useful when aligning to human values; higher τ encourages diversity but can introduce unwanted behaviours.  
   *Deeper principle*: τ is an inverse temperature in a Boltzmann distribution, linking RL‑HF objectives to maximum‑entropy reinforcement learning.  

**Non‑obvious insight:**  
*The product η·λ (learning‑rate times weight‑decay) often dictates the effective “distance” travelled from pretraining weights.* Setting η too high while keeping λ small can lead to large excursions that break alignment, whereas a modest η with a larger λ keeps the model within the *pretrained manifold*, preserving its inductive biases. This coupling is rarely highlighted but is crucial for stable fine‑tuning and safe alignment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
