---
qid: ing_500437ceac__star__local
question: Your prompt change gained 3 points on the eval. How confident are you that
  it is real?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 295
total_tokens: 540
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:08:22-05:00'
sources: []
---

**Situation:**  
At a recent hackathon my team was tasked with improving the accuracy of an AI assistant’s intent classification model. Our baseline scored 78 % on the internal validation set and lagged behind the competition by 5 points.

**Task:**  
I needed to devise a prompt engineering tweak that would lift the score by at least 3 points without retraining the underlying model, so we could meet the deadline for the final demo.

**Action:**  
I analyzed the top‑20 misclassified utterances and noticed many were ambiguous or contained domain jargon. I crafted a new system prompt incorporating explicit examples of those edge cases and added a clarification step: “If unsure, ask the user to specify.” I ran the updated prompt against our holdout set using the same evaluation script we used for the competition, ensuring identical preprocessing and metric calculation.

**Result:**  
The new prompt raised accuracy from 78 % to 81 %, a 3‑point gain that matched the competition’s top score. The consistency across multiple random seeds (±0.2 %) gave me high confidence the improvement was real. I learned that targeted, data‑driven prompt adjustments can yield measurable gains without costly model retraining.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
