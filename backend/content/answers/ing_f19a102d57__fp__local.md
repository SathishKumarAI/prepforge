---
qid: ing_f19a102d57__fp__local
question: Mamba and state-space models were supposed to replace transformers. What
  actually happened, and why?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 492
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:33:01-05:00'
sources: []
---

**What happened?**  
Mamba‑style state‑space layers (e.g., *S4*) were introduced to let a single linear operator handle arbitrarily long dependencies, so in theory they could supplant the attention mechanism of transformers. In practice, large‑scale pretraining on billions of tokens still favors the sparse, highly parallel attention block: it is easier to scale, benefits from mature GPU kernels, and its quadratic cost is mitigated by *sparse* or *linearized* variants (e.g., Longformer, Performer).  

State‑space models shine when *sequence length dominates*—they give O(1) per token time and linear memory—but they lack the *expressive locality* that attention affords: a single Mamba cell mixes all past tokens uniformly, which can hurt fine‑grained modeling of syntax or position‑sensitive tasks. Moreover, training stability is a practical hurdle; the implicit “implicit recurrence” in S4 requires careful conditioning and often higher precision, increasing compute budgets.

**Why it didn’t replace transformers?**  
1. **Optimization bias:** Transformers are already highly optimized on commodity hardware; any new block must beat that baseline *in practice*, not just asymptotically.  
2. **Expressivity vs efficiency trade‑off:** Attention offers a tunable sparsity–richness knob (local, global, hierarchical) that state‑space layers cannot match without extra modules.  
3. **Data‑driven generalization:** Large corpora reveal that transformer attention patterns are highly data‑dependent; learning those patterns from scratch with a fixed linear kernel is harder.

**Non‑obvious insight**  
The real advantage of state‑space layers lies not in *replacing* transformers but in *complementing* them: they can act as efficient “global context” backbones that feed into lightweight attention heads. Hybrid architectures (e.g., *S4 + local Transformer*) combine the linear scalability of S4 with the locality precision of attention, achieving state‑of‑the‑art results on long‑form generation while keeping training costs manageable. Thus, the expectation of a wholesale replacement was misplaced; instead, we see a co‑evolution where each paradigm addresses the other's weaknesses.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
