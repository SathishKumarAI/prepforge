---
qid: ing_bf04b57cbd__fp__local
question: You're training a large model across hundreds of accelerators. Compare data,
  tensor, and pipeline parallelism - when do you combine them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 481
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:49:30-05:00'
sources: []
---

When a model is too big or too fast for one accelerator, we must **split the problem** so that every device can finish its slice and the system stays balanced.

| Parallelism | What it splits | Why it helps |
|-------------|----------------|--------------|
| **Data parallelism (DP)** | The same model on each device, different minibatches. | Keeps memory per GPU equal; communication only gradients (small after compression). |
| **Tensor‑level (model) parallelism** | One tensor operation is divided across devices (e.g., a huge matrix *W* in a transformer layer). | Reduces the per‑device weight footprint; each device works on a chunk of the same computation. |
| **Pipeline parallelism (PP)** | Different layers or groups of layers run on different devices, stages pipeline. | Overlaps forward/backward passes across devices, hiding latency when layer sizes differ. |

### When to combine

1. **Memory bottleneck first**  
   *If a single weight tensor exceeds device RAM*, start with tensor parallelism for that layer.  
2. **Compute imbalance second**  
   *If some layers are very heavy* (e.g., large‑kernel convs), add pipeline stages so the heavy layers run on fewer devices, while lighter ones share more.  
3. **Batch size and throughput last**  
   *If you still need larger batches or faster wall‑clock time*, sprinkle data parallelism over the remaining devices.

A common recipe for a 1 Tflop model on 128 GPUs:  
- Tensor‑parallel 8× across all devices to shrink each weight.  
- Pipeline‑parallel 4 stages (32 GPUs per stage) to hide layer‑wise latency.  
- Data‑parallel 2× inside each pipeline stage (16 GPUs per DP group).

**Non‑obvious insight:** *Communication cost is not linear in tensor size.* Gradient compression and overlapping communication with computation become critical when you mix PP and DP, because gradients from later stages must wait for earlier ones to finish. Designing the schedule so that the “slowest” pipeline stage dominates the latency can dramatically improve overall speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
