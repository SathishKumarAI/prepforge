---
qid: ing_b7947fa628__fp__local
question: Your model refuses requests that are perfectly legitimate. How do you diagnose
  and fix over-refusal?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 552
total_tokens: 730
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:34:18-05:00'
sources: []
---

**Diagnosing and fixing over‑refusal in an LLM**

1. **Formulate the core problem**  
   An over‑refusal model is essentially a *constraint‑satisfaction* system that misclassifies valid inputs as violating policy. The underlying optimization objective—maximizing user utility while minimizing risk—has become skewed toward the penalty term for “dangerous” content.

2. **Quantify the bias**  
   - Sample a balanced set of legitimate prompts (e.g., factual queries, creative requests).  
   - Run them through the refusal‑prediction head and compute a *refusal rate* per category.  
   - Use confusion matrices to identify false positives versus true positives; high false‑positive rates indicate over‑refusal.

3. **Inspect the decision boundary**  
   The refusal classifier is usually a small neural net or rule set that maps hidden states to “allow/deny.”  
   *Method*: Perform a gradient‑based sensitivity analysis: perturb tokens in a prompt and observe how logits shift. If tiny semantic changes flip the label, the boundary is too tight.

4. **Re‑balance the loss**  
   Adjust the weighting of the refusal loss relative to the language modeling loss:
   \[
   L_{\text{total}} = L_{\text{LM}} + \lambda\,L_{\text{refusal}}
   \]
   Decreasing λ reduces over‑cautiousness. Use a validation set that explicitly contains edge‑case prompts to tune λ.

5. **Introduce curriculum learning**  
   Start fine‑tuning on highly safe data, then gradually mix in more ambiguous examples with *soft labels* (e.g., 0.8 “allow” probability). This smooths the decision surface and discourages brittle thresholds.

6. **Non‑obvious insight: leverage uncertainty estimation**  
   Instead of a hard refusal threshold, use *predictive entropy* or Monte Carlo dropout to gauge model confidence. When entropy is low (high certainty) but the label is “refuse,” flag it for human review rather than auto‑denying. This turns over‑refusal into a *human‑in‑the‑loop* safety net.

7. **Validate post‑fix**  
   Recompute refusal rates, ensuring they drop below a target (e.g., <5 % on legitimate prompts) while maintaining or improving the rate of correct denials on truly risky content.

By treating over‑refusal as an optimization imbalance and systematically re‑weighting losses, smoothing decision boundaries, and harnessing uncertainty estimates, you can restore a healthy balance between safety and usability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
