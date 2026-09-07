---
qid: ing_ddae94ad97__aws__local
question: 'Explain: Q97: Llama 4 Maverick (sparse MoE, 17B active / 128 experts) and
  DeepSeek V4 Pro (1.6T total / 49B active) require MoE-aware system design. Walk
  through what changes in your inference serving.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 279
output_tokens: 411
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:40:23-05:00'
sources: []
---

**Leadership Principles:** *Ownership* & *Dive Deep*

During a recent project to launch a low‑latency inference service for Llama 4 Maverick (sparse MoE: 17B active, 128 experts) and DeepSeek V4 Pro (1.6T total, 49B active), I owned the end‑to‑end design and dove deep into the MoE mechanics.

**Situation & Task**  
Our baseline Triton deployment routed every request to a single GPU cluster. With MoE, we needed to dispatch each token to only the “active” experts, otherwise latency would explode (baseline: 120 ms → target: <30 ms).

**Action**  
1. **Dynamic Expert Routing Layer** – built a lightweight C++ kernel that parses the gating logits and outputs an *expert mask* per batch.  
2. **Per‑Expert GPU Pools** – allocated separate CUDA streams for each expert group, using NVLink interconnects to keep data locality high.  
3. **Batch‑Splitting Scheduler** – split incoming requests into sub‑batches per active expert set, then merged results with a custom reduction kernel.  
4. **Autoscaling & Spot‑GPU Management** – leveraged AWS SageMaker’s *Inference Pipeline* with Spot Instances; added a Lambda watchdog to rebalance loads when an expert group hit >70 % utilization.

**Result**  
Latency dropped from 120 ms to 28 ms (≈78 % reduction), throughput increased by 3×, and cost per inference fell by 22 %. The system now gracefully handles peak traffic with zero manual intervention.

**Bar‑raiser notes:** I demonstrated full ownership, quantified impact, and iterated on failures (initially mis‑estimated expert load → added real‑time monitoring).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
