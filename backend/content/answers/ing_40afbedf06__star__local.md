---
qid: ing_40afbedf06__star__local
question: You want to detect a 3-point improvement in pass rate. How many eval examples
  do you need, and how do you get that number down?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 364
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:37:54-05:00'
sources: []
---

**Situation:**  
During a quarterly review of our chatbot’s FAQ accuracy, the product manager asked me to prove that a new intent‑recognition model would raise the pass rate from 85 % to 88 %. The metric had to be statistically significant with at least 80 % power.

**Task:**  
Determine how many evaluation examples were required to detect a 3‑point lift and devise ways to reduce that number without compromising confidence.

**Action:**  
I performed a two‑proportion z‑test power analysis (α = 0.05, β = 0.20). Plugging p₁ = 0.85, p₂ = 0.88 yielded about **2,400 labeled examples** per model. To cut this down I:  
1. Used stratified sampling to oversample rare intents that dominate the pass‑rate variance.  
2. Implemented a sequential (adaptive) testing framework—after each batch of 300 examples I re‑estimated effect size and stopped early if significance was reached.  
3. Leveraged Bayesian posterior predictive checks, which allowed me to incorporate prior knowledge from the previous model and reduce required samples by ~25 %.

**Result:**  
We completed validation with only **1,700 examples**, saving $4,500 in annotation costs. The new model’s pass rate increased to 88.2 % (p = 0.003). I learned that combining power analysis with adaptive sampling and Bayesian priors can dramatically cut evaluation budgets while maintaining statistical rigor.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
