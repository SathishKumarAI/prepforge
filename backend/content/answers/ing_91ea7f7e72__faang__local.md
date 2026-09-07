---
qid: ing_91ea7f7e72__faang__local
question: How would you serve a large mixture-of-experts model on a statically scheduled
  fabric when expert selection is data-dependent?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 589
total_tokens: 835
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:23:44-05:00'
sources: []
---

**Clarify**  
We have a *Mixture‑of‑Experts (MoE)* where each token selects an expert via a gating network that depends on the input. The inference engine is a statically scheduled fabric (e.g., a fixed‑size cluster of accelerators) with no dynamic routing. How do we honor data‑dependent selection while keeping the schedule static?  
Assumptions: * 1) We know the total number of experts and their compute budgets.  
2) The fabric can pre‑allocate slots but cannot change connections at runtime.  
3) Latency must stay within a target bound.

**Approach**  
1. **Static partitioning + over‑provisioning:** Assign each expert to a dedicated slot, even if it will be idle on some requests.  
2. **Pre‑fetch gating probabilities:** Compute gate logits once per batch; then *quantize* them into a small set of deterministic routing tables that map tokens to experts.  
3. **Batch‑level load balancing:** Reorder tokens so that each slot receives roughly the same number of active tokens, using *expert‑aware shuffling*.  
4. **Fallback execution:** If an expert is overloaded, spill excess activations into a shared “fallback” slot with a higher latency budget.

**Depth**  
- The gating network produces a sparse one‑hot mask; we convert it to a *routing matrix* R (batch × experts).  
- Pre‑allocate a tensor of size (num_experts × max_tokens_per_slot) per slot.  
- Use an *attention‑like* scheduler that, given R, writes each token into its expert’s buffer at compile time.  
- Complexity: O(batch × tokens) for routing; memory overhead ≈ num_experts × avg_load.  
- Trade‑off: extra idle cycles vs. deterministic scheduling.

**Edge Cases**  
- Skewed distribution where one expert receives >80 % of tokens → latency spikes. Test with synthetic skew and real‑world data.  
- Gate probability ties leading to ambiguous routing; resolve by tie‑breaking or random assignment.  
- Fabric capacity exceeded: trigger dynamic throttling or batch splitting.

**Optimize & Communicate**  
1. **Dynamic load estimation:** Predict per‑batch expert loads using a lightweight profiler; adjust the over‑provisioning factor accordingly.  
2. **Adaptive quantization:** Reduce routing table size by clustering similar gating outputs, lowering memory pressure.  
3. **Explainability to interviewers:** Emphasize that we trade a small amount of compute waste for deterministic scheduling, which is critical on static fabrics where dynamic wiring isn’t possible.

This design keeps the fabric schedule static while still respecting data‑dependent expert selection and meets latency constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
