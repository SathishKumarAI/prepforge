---
qid: ing_b4a2a69e44__fp__local
question: 'Explain: How Diffusion Models Work - DeepLearning.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 523
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:28:08-05:00'
sources: []
---

**Diffusion models learn to invert a stochastic “noising” process, turning random noise into coherent data by solving an optimization problem in probability space.**

1. **Forward (diffusion) process**  
   Start with clean data \(x_0\). At each step \(t\), add Gaussian noise \(\epsilon_t\sim\mathcal N(0,I)\) scaled by a variance schedule \(\beta_t\):
   \[
   x_t = \sqrt{1-\beta_t}\,x_{t-1} + \sqrt{\beta_t}\,\epsilon_t .
   \]
   After many steps the distribution of \(x_T\) is nearly standard normal. This process defines a Markov chain with known transition kernels, so its likelihood can be computed exactly.

2. **Reverse (generative) process**  
   We train a neural network to predict the added noise at each step:
   \[
   \hat{\epsilon}_t = f_\theta(x_t,t).
   \]
   Using Bayes’ rule and the known forward kernel, we derive a closed‑form sampling equation
   \[
   x_{t-1} = \frac{1}{\sqrt{1-\beta_t}}\bigl(x_t - \frac{\beta_t}{\sqrt{1-\beta_t}}\,\hat{\epsilon}_t\bigr) + \sigma_t\,z,
   \]
   where \(z\sim\mathcal N(0,I)\). Minimizing the expected squared error between \(\hat{\epsilon}_t\) and true \(\epsilon_t\) is equivalent to maximizing a variational lower bound on the data log‑likelihood.

3. **Why it works**  
   The diffusion process regularizes the learning problem: every step only requires predicting small Gaussian perturbations, making gradients stable. Moreover, because each transition kernel is analytically invertible, we can sample exactly without bias from learned parameters—unlike autoregressive models that accumulate discretization errors.

4. **Non‑obvious insight**  
   The noise schedule \(\beta_t\) acts like a *temperature annealing* schedule in simulated annealing; by choosing it to increase gradually, the model learns to denoise from coarse (high variance) to fine (low variance) details—effectively learning a multi‑scale hierarchy of latent representations without explicit architectural recursion. This explains why diffusion models excel at capturing global structure before refining local textures.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
