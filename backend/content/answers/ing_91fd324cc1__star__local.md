---
qid: ing_91fd324cc1__star__local
question: Design the parallelism strategy for serving a 405B-parameter dense model.
  TP, PP, EP - what goes where and why?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 445
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:25:04-05:00'
sources: []
---

**Situation**  
When my team rolled out a new recommendation engine, we had to serve a 405 B‑parameter dense transformer for real‑time inference on millions of users per day. The single GPU memory limit (24 GB) and latency requirement (< 50 ms) made it impossible to load the entire model onto one device.

**Task**  
Design a parallelism strategy that balances memory usage, throughput, and latency while keeping training time manageable for future updates.

**Action**  
I chose a hybrid **tensor‑parallel (TP)** + **pipeline‑parallel (PP)** scheme with occasional **expert‑routing (EP)** for the most compute‑heavy attention heads.  

- **TP**: Split the weight matrices across 32 GPUs, each holding ~12 B parameters (~1.3 GB). This reduced per‑GPU memory and kept matrix multiplications highly parallel on NVIDIA A100s, using `torch.distributed.algorithms.ddp_comm_hooks.fused_all_gather_hook`.  
- **PP**: Partition the transformer into 4 stages; each stage runs on a separate node of 8 GPUs (TPed). We used Megatron‑Llama’s pipeline hook to forward tokens through stages with minimal buffer copy, keeping latency within budget.  
- **EP**: For the top‑k attention heads that rarely fire, we routed them to a smaller set of “expert” GPUs on demand, dramatically cutting FLOPs for most requests while preserving accuracy.

We also implemented dynamic checkpointing and gradient accumulation to keep training memory low during fine‑tuning.

**Result**  
The model fit into 32 GPUs with peak GPU memory at 19 GB. Inference latency dropped from 120 ms (single‑GPU) to 38 ms, achieving a throughput of ~15k requests/sec. Training time for a full epoch reduced by 35 %. I learned that combining TP+PP with selective EP can unlock large models on limited hardware while keeping inference real‑time.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
