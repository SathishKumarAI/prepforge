---
qid: ing_c2d916d6b3__faang__local
question: How do you engineer an agent for cost and latency without wrecking quality?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 469
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:13:57-05:00'
sources: []
---

**Clarify**  
The interviewer asks how to build an AI agent that balances *cost* (compute/credits) and *latency* while keeping *quality* of responses acceptable. I’d confirm:  

- Target latency budget (e.g., <200 ms).  
- Acceptable quality metric (BLEU, ROUGE, user‑study score).  
- Cost model (GPU hours or token pricing).  
- Deployment constraints (cloud vs edge).

**Approach**  
1. **Model selection & pruning** – choose a base LLM and apply weight sparsification/quantization to reduce FLOPs.  
2. **Dynamic inference** – use early‑exit or adaptive stopping based on confidence thresholds.  
3. **Caching & retrieval** – cache frequent prompts, retrieve relevant context instead of full generation.  
4. **Cost‑aware scheduler** – run heavier models only when quality score predicts a large improvement.

**Depth**  
- *Quantization*: 8‑bit static or mixed‑precision reduces memory and latency by ~3× with <1% BLEU drop.  
- *Early exit*: Layer‑wise confidence checks; abort after layer k if entropy < τ, saving ~30–50 % compute.  
- *Caching*: Store top‑k embeddings of prior prompts; reuse for similar queries (latency ∼10 ms).  
- Complexity: inference time O(N·D) → reduced to O(k·D) after pruning; cost ≈ GPU‑hrs × λ where λ < 1.

**Edge Cases**  
- Cold starts with unseen prompts → fallback to full model.  
- Aggressive quantization causing hallucinations → monitor perplexity spikes.  
- Cache miss rate > 70% → latency degrades, trigger re‑optimization.

**Optimize & Communicate**  
Iterate on τ and sparsity levels using A/B tests; report Pareto frontier of cost vs latency for fixed quality. Explain that we’re trading a small accuracy hit for orders‑of‑magnitude savings, backed by empirical metrics. This structured reasoning demonstrates problem decomposition, technical depth, and clear communication—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
