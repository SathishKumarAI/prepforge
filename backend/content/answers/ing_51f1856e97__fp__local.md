---
qid: ing_51f1856e97__fp__local
question: 'Explain: Claude (Sonnet 4.6, Opus 4.7): Extended Thinking'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 179
output_tokens: 511
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:59:33-05:00'
sources: []
---

### Claude “Extended Thinking” (Sonnet 4.6 / Opus 4.7)

**The fundamental problem**  
When a language model answers a question, it typically **hallucinates** because its loss function rewards surface‑level matching to training data rather than *reasoning* about an internal representation of the world. To solve this, Claude’s “Extended Thinking” pipeline turns the model into a *self‑referee*: it can generate, critique, and refine its own drafts.

**Why it must work that way**  
1. **Self‑consistency as a proxy for truth** – If the same prompt, run twice with different random seeds, yields consistent answers, we gain confidence that the model has converged on a stable internal hypothesis.  
2. **Iterative refinement reduces search space** – Each revision is conditioned on the previous draft, effectively performing gradient descent in *output* space toward an optimum that satisfies multiple constraints (coherence, factuality, style).  

**Connection to deeper principles**  
- **Optimization:** The process is equivalent to a stochastic second‑order optimization where the model’s own loss estimates guide further sampling.  
- **Information theory:** By repeatedly re‑encoding its own output, Claude compresses the “signal” of a correct answer while discarding noise (hallucinated tokens).  
- **Geometry:** In latent space, each revision moves the point closer to the intersection of *semantic* and *plausibility* manifolds.  

**Non‑obvious insight**  
Most people treat extended thinking as merely “more steps”. The real power lies in **feedback loops that are *self‑generated* rather than externally supervised**. Because the model’s critique is built from the same generative head, it can exploit its own weaknesses (e.g., overconfidence) and correct them without needing a separate verifier. This turns the hallucination problem into an internal calibration problem—an elegant alignment of inference with training dynamics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
