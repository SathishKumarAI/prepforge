---
qid: ing_c5eb18e7e7__fp__local
question: How do you decide when to stop prompt engineering and fine-tune instead?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 393
total_tokens: 567
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:02:31-05:00'
sources: []
---

When a model’s outputs are **systematically misaligned** with the task rather than merely *noise* or *incomplete phrasing*, it is time to shift from prompt‑engineering to fine‑tuning.

1. **Problem framing**  
   - Prompt engineering manipulates the *input space*; fine‑tuning re‑optimizes the *parameter space*.  
   - If a model can be coaxed into correct behaviour by a few carefully worded sentences, you are exploiting the distributional bias already present in its weights (a kind of “zero‑shot” alignment).  
   - If no prompt variant yields consistent results across edge cases, the underlying representation is inadequate for that domain.

2. **Why this matters**  
   - The loss surface of a transformer is highly non‑convex; small changes to prompts cannot overcome a fundamental mismatch between training data and target distribution.  
   - Fine‑tuning moves the model toward a local optimum in *task‑specific* latent space, effectively learning new “concepts” that were under‑represented or absent in pre‑training.

3. **Practical test**  
   - Run an exhaustive prompt ablation (vary synonyms, context length, instruction style).  
   - If performance improves by < 5% across all trials, you are hitting a *plateau*—the model’s capacity is saturated for that task.  

4. **Non‑obvious insight**  
   - **Prompt entropy matters**: high‑entropy prompts (many ambiguous words) often mislead the language model into over‑generalizing; low‑entropy, domain‑specific prompts give marginal gains but still cannot replace missing semantic structure.

In short, when prompt variations no longer lift accuracy beyond a small margin and you observe systematic failure modes, fine‑tuning is the principled next step.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
