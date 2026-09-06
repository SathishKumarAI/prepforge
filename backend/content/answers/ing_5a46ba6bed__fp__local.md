---
qid: ing_5a46ba6bed__fp__local
question: 'Q: When would you choose local or on-device inference over a cloud API?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 175
output_tokens: 336
total_tokens: 511
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T19:16:10-05:00'
sources: []
---

**Why the choice hinges on *information‑rate constraints* rather than merely latency**

In an inference pipeline the data flow is a communication channel: sensor → model → decision.  
The fundamental bottleneck is **how much information must be transmitted per unit time** to achieve the target accuracy.

| Criterion | Cloud API | Local / On‑device |
|-----------|-----------|-------------------|
| Bandwidth budget | Unlimited (high‑speed backhaul) | Often 10 – 100 kbps, sometimes zero |
| Privacy & compliance | Data leaves premises | Data stays on device |
| Energy & cost | Server‑side compute + network egress | Device compute only |

If the model’s input size \(I\) and the required throughput \(\lambda\) satisfy \(I\lambda < B_{\text{edge}}\) (device bandwidth), local inference wins because it eliminates the round‑trip *channel capacity* penalty. Conversely, when \(I\lambda > B_{\text{cloud}}\) or latency constraints are tighter than the network RTT, a cloud API is preferable.

**Non‑obvious insight:**  
Even with high bandwidth, **quantization and model pruning can dramatically reduce \(I\)**, turning a once‑cloud‑only task into an on‑device one. This reflects Shannon’s rate–distortion tradeoff: we sacrifice negligible accuracy for orders‑of‑magnitude bandwidth savings, enabling real‑time inference where network conditions would otherwise dominate.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
