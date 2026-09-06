---
qid: ing_94e929e513__fp__local
question: 'Solutions-architect scenario: a customer''s LLM chatbot on 8 GPUs is "too
  slow and too expensive." You have one week with them. What do you do?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 490
total_tokens: 683
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:21:53-05:00'
sources: []
---

**1. Diagnose the bottleneck from first principles**

The chatbot’s latency is a *convolution of* (i) **compute time per token**, (ii) **queueing and I/O overheads**, and (iii) **resource contention on the 8 GPUs**.  
Run a micro‑benchmark that isolates each term: feed a single prompt to an empty queue, measure GPU utilisation, memory traffic, and inter‑GPU communication latency.  

**2. Reduce compute per token**

*Model pruning*: remove low‑importance attention heads or layers whose *information gain* (mutual information between hidden states and next token) is negligible.  
*Quantisation*: switch to 4‑bit weights with per‑tensor scaling; the reduction in FLOPs outweighs the tiny loss in perplexity for most LLMs.  

**3. Improve parallelism**

If the model is *larger than a single GPU*, split it across devices using **model‑parallel tensor‑sharding** (e.g., Megatron‑Llama).  
Use *pipeline depth* equal to the number of GPUs to keep all devices busy; overlap forward and backward passes with overlapping communication (`ncclAllReduce`).

**4. Re‑architect the request pipeline**

Batch incoming queries in micro‑batches of 8–16 prompts. The GPU’s throughput grows super‑linearly with batch size up to the memory limit, so a small increase in per‑request latency is offset by higher overall throughput.

**5. Cost optimisation**

*Swap to spot instances* (or preemptible GPUs) for inference; they can be 70–80 % cheaper.  
Add a **token‑budget guardrail**: abort generation after *k* tokens, saving compute on long, low‑value responses.

---

### Non‑obvious insight

Most people focus on model size or hardware upgrades, but **the *entropy* of the input distribution is often the real lever**. By clustering similar prompts and reusing cached embeddings for common prefixes, you can amortise token‑generation cost across many users—essentially turning a per‑token FLOP into a *shared* FLOP. This turns the problem from “slow” to “inefficient.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
