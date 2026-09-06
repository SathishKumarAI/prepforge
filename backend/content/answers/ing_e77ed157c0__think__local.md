---
qid: ing_e77ed157c0__think__local
question: 'Explain: 1.1.3.2.2. Information-criteria based model selection'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 539
total_tokens: 737
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T16:18:29-05:00'
sources: []
---

**1. Clarify the ask & set assumptions**  
   - Confirm that “Information‑criteria based model selection” refers to criteria such as AIC, BIC, HQC, etc., used for choosing among statistical/machine‑learning models.  
   - Assume we’re working with likelihood‑based or penalized‑likelihood models (GLMs, linear regression, neural nets trained via maximum likelihood).  
   - Note the question likely wants a conceptual overview rather than implementation details.

**2. Adopt a mental framework**  
   - *Goal:* balance goodness‑of‑fit against model complexity.  
   - *Key components:* log‑likelihood (or deviance), number of parameters, sample size.  
   - *Common criteria*: Akaike Information Criterion (AIC), Bayesian Information Criterion (BIC), Hannan–Quinn (HQ), Deviance Information Criterion (DIC) for Bayesian models.

**3. Step‑by‑step reasoning**  
   1. Start with the likelihood \(L(\theta|y)\).  
   2. Compute \(-2\log L_{\max}\) as a measure of lack‑of‑fit.  
   3. Add a penalty term that grows with parameter count \(k\):  
      - AIC: \( -2\log L_{\max} + 2k\).  
      - BIC: \( -2\log L_{\max} + k \log n\) (stronger penalty for large samples).  
   4. Lower criterion values indicate a preferable model.  
   5. Explain interpretation: AIC estimates expected Kullback–Leibler divergence; BIC approximates posterior model probability under certain priors.

**4. Common traps to avoid**  
   - Mixing up “penalty for complexity” with regularization in the loss function.  
   - Forgetting that criteria are relative—only compare models fitted on the same data.  
   - Ignoring that AIC/BIC assume independent, identically distributed observations and correctly specified likelihoods.

**5. Sanity‑check & verbalize**  
   - Verify dimensions: penalty units match log‑likelihood (both in “information” units).  
   - Check extreme cases: a model with zero parameters vs. a saturated model; AIC should favor the simpler one unless extra parameters give substantial likelihood gain.  
   - When explaining, use an analogy: “Choosing a car—speed (fit) versus fuel consumption (complexity); the criterion balances the two.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
