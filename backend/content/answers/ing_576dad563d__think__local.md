---
qid: ing_576dad563d__think__local
question: How would you use synthetic data to build or extend an eval set, and what
  are the failure modes?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 199
output_tokens: 432
total_tokens: 631
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:46:25-05:00'
sources: []
---

**1. Clarify the goal & assumptions**  
   * Define the evaluation objective (e.g., NLU accuracy on a rare class).  
   * Assume we have a seed real eval set and a generative model capable of producing realistic examples.

**2. Adopt a “synthetic‑augmentation” framework**  
   * Treat synthetic data as an extension layer: generate, filter, and mix with the original set.  
   * Use a pipeline: (i) prompt design → (ii) generation → (iii) post‑processing → (iv) validation.

**3. Step‑by‑step reasoning**  
   1. **Prompt engineering**: craft prompts that bias outputs toward underrepresented scenarios.  
   2. **Generate** a large pool, then **filter** via heuristics (length, lexical diversity).  
   3. **Validate quality**: run a quick human or model‑based check for label correctness and realism.  
   4. **Blend** synthetic samples proportionally with real ones, ensuring class balance.  
   5. **Iterate**: evaluate the model on this mixed set; if performance degrades, revisit prompt or filtering.

**4. Avoid common pitfalls**  
   * Don’t treat all generated text as “truth”; over‑reliance can bias metrics.  
   * Beware of distribution shift—synthetic data may be too clean or repetitive.  
   * Mixing without weighting can dilute the signal from real examples.  
   * Neglecting adversarial or edge cases in prompts can leave gaps.

**5. Sanity checks & communication**  
   * Plot label distributions before/after augmentation.  
   * Spot‑check a random sample for plausibility and correct labeling.  
   * Present results as “synthetic‑augmented eval improves X% on rare class Y, but introduces Z% noise.”  

This structured approach helps reuse the same mental model for any synthetic‑eval task.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
