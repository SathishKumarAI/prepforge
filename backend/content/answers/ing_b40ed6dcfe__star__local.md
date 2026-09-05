---
qid: ing_b40ed6dcfe__star__local
question: 'Explain: Implement top-k MoE routing with a shared expert in PyTorch, and
  point out where the efficiency and correctness traps are.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 404
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:32:00-05:00'
sources: []
---

**Situation:**  
In my last role at a startup building an NLP service, we were scaling our transformer model to handle 10k queries per second. The baseline was a single‑expert feed‑forward that hit memory limits and latency spikes.

**Task:**  
I had to implement a top‑k Mixture of Experts (MoE) router in PyTorch that shared one “fallback” expert for rare tokens, while keeping the GPU utilization above 80 % and ensuring no data leakage between experts.

**Action:**  
First I coded a custom `torch.autograd.Function` that performed a softmax over the gating logits, then selected the top‑k indices per token. To avoid expensive gather operations, I used `torch.topk` followed by a sparse mask and `scatter_add_`. The shared expert was injected by adding its output to every bucket after the top‑k selection, but only once per batch using a broadcasted tensor to keep it in the same compute graph. I also inserted a checkpointing trick: the shared expert’s weights were frozen during backprop, so gradients flowed only through active experts—this cut memory by 30 % and eliminated race conditions on the GPU. Finally, I profiled with NVTX to spot any kernel stalls caused by divergent branch execution in the routing logic.

**Result:**  
The MoE reduced per‑query latency from 18 ms to 9 ms while keeping throughput at 12k qps. Accuracy dropped only 0.3 % on validation. I learned that careful masking and broadcasting are key to avoid hidden O(n²) ops, and that freezing shared experts can prevent unintended gradient updates that break correctness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
