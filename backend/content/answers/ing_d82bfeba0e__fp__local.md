---
qid: ing_d82bfeba0e__fp__local
question: 'Explain: Comparison to real-world threats — Constitutional Classifiers:
  Defending against universal jailbreaks \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 565
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:40:04-05:00'
sources: []
---

### From the problem to a principled defense

A language model is trained to maximize *utility*—to generate text that satisfies an objective (e.g., “helpful”).  
When an attacker supplies a prompt engineered to coax disallowed content, the model’s loss no longer penalises that behaviour; it simply follows the learned policy.  

**Constitutional classifiers** tackle this by turning the *constraint* into part of the optimization loop:

1. **Define a “constitution”** \(C\) – a concise set of rules (e.g., “do not produce disallowed content”).  
2. For any generated token sequence \(\mathbf{t}\), compute a *compliance score*  
   \[
   s_C(\mathbf{t}) = P_{\text{cls}}( \text{“\(\mathbf{t}\) satisfies } C” )
   \]
   using a lightweight classifier trained on examples of compliant vs. non‑compliant text.
3. The model’s policy \(P_\theta(\cdot)\) is then optimised to maximise the *expected* compliance:
   \[
   \max_\theta \mathbb{E}_{\mathbf{t}\sim P_\theta}[\, s_C(\mathbf{t}) \,]
   \]
   This is a constrained reinforcement‑learning objective where the constraint itself is learned.

Because the classifier can evaluate arbitrary prompts—including those crafted to “jailbreak” the system—it forces the policy to internalise the constitution. The model cannot simply ignore the constraint; doing so would reduce its expected compliance score and thus its reward.

### Why it must work this way

- **Universality**: Any jailbreak is just a prompt that leads to non‑compliant output. By evaluating *every* generated token against \(C\), the system automatically penalises all such prompts, regardless of their form.
- **Decentralised safety**: The classifier operates locally and can be updated independently, so the policy never needs to remember every forbidden phrase; it learns a general principle (“avoid disallowed content”) rather than a hard‑coded list.

### Non‑obvious insight

The key subtlety is that *compliance* itself becomes a **policy gradient signal**. Rather than treating safety as a post‑hoc filter (which can be bypassed by re‑encoding or paraphrasing), the model learns to *anticipate* non‑compliance and shape its own generation trajectory accordingly. This anticipatory behaviour is what gives constitutional classifiers resilience against universal jailbreaks: they don’t just block known attacks; they embed the safety principle into the very fabric of decision making.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
