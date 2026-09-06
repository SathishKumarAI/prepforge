---
qid: ing_e30cedad09__think__local
question: 'Explain: Why is MSE a bad loss for classification, even though it "works"?
  Connect it to the probabilistic view of loss functions.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 207
output_tokens: 507
total_tokens: 714
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:59:16-05:00'
sources: []
---

**1. Clarify the question and assumptions**  
   - Identify that we’re comparing MSE (Mean Squared Error) with proper classification losses (cross‑entropy).  
   - Assume a softmax output layer producing class probabilities, and note that “works” means it can converge but may be suboptimal.

**2. Adopt a probabilistic framework**  
   - Treat the network’s output as an estimate of the categorical distribution \(p(y|x)\).  
   - Loss functions should correspond to negative log‑likelihood (NLL) or other proper scoring rules that reward accurate probability estimates.

**3. Step‑by‑step reasoning**  
   1. Express MSE on logits vs. probabilities and derive its gradient: it pushes all outputs toward the target label’s one‑hot vector equally, regardless of confidence.  
   2. Show that this gradient is proportional to the *difference* between predicted probability and 0/1, not to the log‑ratio used in cross‑entropy.  
   3. Connect MSE to a quadratic scoring rule, which is *improper*: it can be maximized by overconfident predictions (e.g., pushing probabilities to extremes).  
   4. Contrast with cross‑entropy, derived from NLL, which penalizes mis‑calibrated probabilities logarithmically and encourages well‑calibrated outputs.

**4. Common traps to avoid**  
   - Forgetting that MSE is fine for regression but not a proper scoring rule for discrete outcomes.  
   - Mixing up logits vs. probability space when computing gradients.  
   - Assuming “works” implies optimality; convergence can be slow or unstable on hard classes.

**5. Sanity‑check & communicate**  
   - Verify that the gradient magnitude of MSE shrinks to zero as predictions approach 0/1, leading to plateauing learning.  
   - Explain in plain terms: MSE treats all errors linearly, so a tiny misprediction gets almost the same penalty as a large one; cross‑entropy magnifies mistakes on unlikely classes, guiding the model more effectively.

By following this chain—clarify → probabilistic view → derive gradients → compare scoring rules → watch pitfalls—you can internalize why MSE is “bad” for classification despite superficial success.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
