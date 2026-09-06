---
qid: vq_eb6e35bcc0__think__local
question: What is Machine Learning Bias?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 395
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:37:14-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   - *What “bias” means in ML*: systematic error that skews predictions toward a particular outcome, not just statistical bias.  
   - Assume the audience knows basic ML concepts (models, training data) but may be unfamiliar with fairness literature.

**2. Adopt a mental model: bias as a deviation from desired behavior**  
   - Think of an ideal unbiased predictor as one whose errors are random and evenly distributed across all subgroups.  
   - Bias arises when the error distribution is uneven—certain groups consistently receive worse predictions.

**3. Step‑by‑step reasoning toward a definition**  
   1. Start with *data bias*: skewed or unrepresentative training samples.  
   2. Move to *algorithmic bias*: model choices that amplify data disparities (e.g., overfitting to majority classes).  
   3. Conclude with *evaluation bias*: metrics that mask unequal performance across groups.  
   4. Synthesize: “Machine learning bias is the systematic, often unfair deviation in a model’s predictions caused by imbalanced data, algorithmic choices, or evaluation practices.”

**4. Common traps to avoid**  
   - Confusing statistical bias with fairness bias.  
   - Assuming all bias is negative; some domain‑specific biases can be acceptable (e.g., medical risk scores).  
   - Overlooking the role of post‑processing adjustments that can mitigate bias.

**5. Sanity‑check & verbalize**  
   - Ask: Does the definition capture data, algorithm, and evaluation?  
   - Verify with a concrete example (e.g., facial recognition misclassifying darker skin tones).  
   - Communicate succinctly: “It’s the systematic error that disproportionately hurts certain groups.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
