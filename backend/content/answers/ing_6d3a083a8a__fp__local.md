---
qid: ing_6d3a083a8a__fp__local
question: You need 5,000 test inputs and have 50. How do you use an LLM to generate
  test data without fooling yourself?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 484
total_tokens: 672
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:56:41-05:00'
sources: []
---

**Why you can’t just “spray‑and‑pray” with an LLM**

The goal of a test set is *coverage*—to expose the system to every plausible input pattern that could occur in production. An LLM, however, is itself a biased probability model: it reproduces the distribution of its training data and tends to favour “common sense” sentences while under‑representing edge cases. If you accept the LLM’s output at face value you risk over‑optimistic coverage estimates.

**Derive the correct approach**

1. **Define a formal input space** \(\mathcal{X}\).  
   • Encode each test case as a vector of discrete features (e.g., intent, slot values, language style).  
2. **Model the target distribution** \(P_{\text{true}}(x)\) implicitly: we don’t know it, but we can estimate it with a *conditional* LLM that takes a feature mask and generates a sentence obeying that mask.  
3. **Sample from the LLM** to produce many candidates.  
4. **Re‑weight by inverse probability** \(w(x)=\frac{1}{P_{\text{LLM}}(x)}\). This corrects for the model’s bias; inputs that the LLM deems unlikely (and are therefore rare) receive higher weight, ensuring they survive downstream filtering.  
5. **Validate with an oracle**: a small human‑verified subset or a rule‑based checker guarantees that each sample satisfies the feature mask and is syntactically correct.  

**Non‑obvious insight:**  
The re‑weighting step turns the LLM from a *generator* into an *importance sampler*. Without it, the 5 000 test cases will be a biased subset of the 50 you already have, not an expansion. By treating the LLM as a probabilistic oracle and correcting for its bias, you obtain a principled, statistically sound set that truly stresses your AI system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
