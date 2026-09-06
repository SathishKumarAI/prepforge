---
qid: ing_70e9bd8e65__fp__local
question: 'Q27: How do you evaluate LLM outputs when there is no ground truth?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 376
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:04:30-05:00'
sources: []
---

**Evaluating LLM outputs without a gold standard**

When no ground‑truth answer exists—think open‑ended creative writing or speculative reasoning—the evaluation problem reduces to *assessing the internal consistency of the model’s own evidence*.  
1. **Self‑consistency**: Run the same prompt under varied prompts (temperature, seed) and measure overlap in key claims. A high overlap indicates a stable inference process, which is mathematically tied to low entropy over the output distribution—an optimization principle that rewards confident, narrow solutions.  
2. **Calibration against known priors**: Compare the model’s confidence scores with empirical probabilities derived from external data (e.g., frequency of facts in corpora). Poor calibration reveals over‑confidence, a red flag for hallucinations.  
3. **Human judgment as an oracle**: Use structured rubrics that separate *content quality* (logical flow, novelty) from *plausibility* (does it match what we know?). Inter‑annotator agreement yields a signal of objective reliability.  

**Non‑obvious insight:**  
A model can produce *plausible* but *incorrect* narratives because its loss function optimizes for next‑token likelihood, not truth. Therefore, an evaluation that rewards *coherence* (high mutual information among tokens) may inadvertently favor hallucinations. The fix is to embed a *probability of evidence* term—essentially asking the model to generate a justification and then score that justification against known facts. This turns evaluation into a joint optimization over content and provenance, aligning more closely with real‑world usefulness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
