---
qid: ing_394cd2553b__star__local
question: 'Explain: PCIe: the default connection — Behind the Scenes of Distributed
  Training and Why Your GPU Wiring Matters as Much as Your Strategy'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 327
total_tokens: 578
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:23:28-05:00'
sources: []
---

**Situation:**  
In my last role at a cloud‑gaming startup, we were scaling our neural‑network inference service from one server to ten GPUs. Our latency target was < 20 ms per frame, but the first test run hit 35 ms and the CPU usage spiked to 70%.

**Task:**  
I had to identify why distributed training across GPUs was slower than expected and reduce the overall latency while keeping costs low.

**Action:**  
I profiled the PCIe traffic with `nvidia-smi` and found that each GPU was using the default single‑root complex (SRC) path, causing a bottleneck at the CPU’s PCIe switch. I re‑wired the rack: moved GPUs into a 2×4 multi‑root complex configuration, added NVLink bridges where possible, and updated the kernel scheduler to favor direct GPU‑to‑GPU traffic. I also tuned the NCCL collective parameters to match the new topology and used `gpugroup` to enforce consistent memory affinity.

**Result:**  
Latency dropped from 35 ms to 18 ms, CPU usage fell to 32%, and we achieved a 4× increase in throughput with no additional hardware. I learned that in distributed training, “wired” GPU paths can be as critical as algorithmic strategy—proper PCIe topology turns raw compute power into real‑time performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
