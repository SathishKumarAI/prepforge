---
qid: ing_d6342d83d9__fp__local
question: You're training on tens of thousands of GPUs and hardware fails constantly.
  How do you keep goodput high?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 418
total_tokens: 598
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:35:27-05:00'
sources: []
---

**Keep Goodput High When Hardware Keeps Failing**

The *goodput* of a distributed training system is the fraction of time spent making useful weight updates. In a fleet where each GPU fails with probability \(p\), naive replication (e.g., re‑running entire epochs) wastes \(\Theta(p)\) cycles per device, while checkpointing after every step incurs constant overhead that grows linearly with batch size.

From an *information‑theoretic* viewpoint, each training step is a noisy observation of the gradient. The loss of a failed worker removes one sample’s contribution from the stochastic estimate. To preserve the variance of the update we must **reweight** remaining samples so that their combined Fisher information equals that of the full batch. This leads to *adaptive sampling*: when a node drops, its weight is redistributed among surviving workers according to their current effective learning rates.

A deeper principle comes from **convex optimization over random graphs**: the training graph remains connected if the expected degree \((1-p)N\) exceeds one. Thus, as long as \(p<1-1/N\), we can maintain a *minimal spanning forest* of workers that updates synchronously. Practically, this means:

1. **Dynamic worker pools** – immediately reassign the failed node’s shard to another GPU without pausing the global barrier.
2. **Gradient aggregation with redundancy** – use tree‑based all‑reduce where each internal node checks for missing leaves and interpolates from siblings.
3. **Online variance monitoring** – if the gradient variance spikes, trigger a *local* checkpoint instead of a global one.

**Non‑obvious insight:** The bottleneck is not the hardware failure itself but the *information loss* it causes. By preserving Fisher information through adaptive weighting and maintaining graph connectivity, you can keep goodput near 100 % even when individual GPUs crash frequently.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
