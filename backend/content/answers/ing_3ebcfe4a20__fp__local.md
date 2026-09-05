---
qid: ing_3ebcfe4a20__fp__local
question: 'Explain: Winners — Constitutional Classifiers: Defending against universal
  jailbreaks \\ Anthropic'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 402
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:18:03-05:00'
sources: []
---

**Why “Constitutional Classifiers” beat universal jailbreaks**

The core problem is that a language model (LM) can be coaxed into violating policy by carefully crafted prompts (“jailbreaks”). The LM’s objective—maximize next‑token probability—has no intrinsic notion of *good* versus *bad* content. If we treat every prompt as a data point, the classifier learns a boundary that separates “safe” from “unsafe” responses.  

Constitutional AI supplies this boundary: an explicitly written set of principles (the “constitution”) is converted into a **self‑critical dataset** by asking the LM to judge whether it would obey or violate each principle. These judgments become training labels for a *classifier* that predicts, given any response, whether it aligns with the constitution. The classifier’s loss is a standard cross‑entropy; its parameters are tuned so that it correctly flags violations.

Why must this work?  
1. **Optimization perspective**: The classifier learns to minimize misclassification error over all possible prompts—exactly what a universal jailbreak does.  
2. **Information-theoretic view**: It compresses the infinite space of unsafe behaviors into a finite decision boundary, preserving only the signal that matters for policy compliance.  
3. **Geometric intuition**: The classifier carves out a high‑dimensional “safe” region; any prompt that pushes a response outside is automatically rejected.

A non‑obvious insight: *the constitution itself can be learned.* Instead of hand‑coding rules, we let the LM generate its own training set by self‑questioning. This bootstrap loop ensures that the classifier adapts to new jailbreak strategies without manual intervention, turning the LM’s generative power into a defensive one.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
