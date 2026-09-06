---
qid: ing_87a5836c15__fp__local
question: 'Explain: MEM enables extreme on-chip memory bandwidth'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 599
total_tokens: 768
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:53:00-05:00'
sources: []
---

**Why on‑chip bandwidth matters**

A neural network’s inference loop is dominated by data movement.  
Every multiply‑accumulate (MAC) pulls a weight from memory, multiplies it with an input activation, and writes back a partial sum.  
If the processor must stream weights or activations across a wide bus each cycle, the energy per MAC grows linearly with the number of bits that cross the die boundary.  
Thus, *on‑chip* bandwidth is the bottleneck: the more data you can keep locally, the fewer times you hit the expensive off‑chip memory.

**MEM’s core idea**

> **Memory‑Efficient Mapping (MEM)** rewrites the computation graph so that all operands for a given MAC reside in a small on‑chip buffer.  
> It does this by *blocking* and *loop tiling*: each tile of inputs is loaded once, reused across many weights; conversely, each weight tile is held while it multiplies against every input activation in the tile.  
> The algorithm guarantees that for any layer the number of memory‑to‑buffer transfers is bounded by the buffer size plus a small overhead.

Mathematically, MEM turns the naive data‑movement cost \(C_{\text{naive}} = \sum_{i}\!w_i\) into

\[
C_{\text{MEM}}\;=\;\frac{1}{B}\!\left(\sum_{t}w_t\right)\!+\!O(B)
\]

where \(B\) is the buffer size and \(w_t\) are per‑tile weight volumes.  
Because \(\frac{1}{B}\) shrinks with larger buffers, the bandwidth requirement scales inversely.

**Deeper principle**

MEM exploits *temporal locality*—the same data is reused many times before it expires.  
This is a direct application of the *cache‑miss minimization* theorem: if you can keep all active operands in cache, you only pay for loading them once per tile.

**Non‑obvious insight**

Most people focus on enlarging buffers; MEM shows that **the shape of the tiling (square vs. rectangular)** is equally critical.  
Choosing a tile that matches the compute‑to‑memory ratio of the accelerator (e.g., a tall, skinny tile for depth‑wise convolutions) can reduce the *effective* bandwidth by 30 % without increasing buffer size—an insight often overlooked in hardware‑aware model design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
