---
qid: ing_ec15b1df4a__fp__local
question: 'Explain: A 70B dense model at 8-bit weights, chips with ~230 MB of SRAM
  each. Walk me through the deployment and the unit economics.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 695
total_tokens: 887
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:21:44-05:00'
sources: []
---

**From first principles**

A *dense* transformer with 70 billion parameters stores each weight as an 8‑bit integer (≈1 byte).  
The raw model size is  

\[
70\times10^9 \text{ weights}\times1\,\text{B} = 70\,\text{GB}.
\]

A chip that can hold only 230 MB of SRAM therefore cannot keep the entire weight matrix in fast memory. The inference pipeline must *partition* the model across chips and time‑slice it so that each chip works on a sub‑tensor that fits into its local SRAM while the rest of the parameters are streamed from slower storage (e.g., NVMe or off‑chip DRAM).  

**Deployment flow**

1. **Model sharding** – Split the 70 B weight matrix along the *key/value* dimension, so each chip holds ~3 billion weights (~3 GB).  
2. **On‑chip cache** – Within each shard, keep a sliding window of activations (≈230 MB) that is sufficient for the current transformer layer’s attention computation.  
3. **Streaming** – While a chip processes its local window, it streams the next chunk of weights from off‑chip memory over an interconnect (e.g., HBM or 25 Gbps Ethernet). The latency of this stream must be hidden by overlapping with compute.  
4. **Pipeline parallelism** – Different chips run different layers in a pipeline; each chip performs its assigned layer on the incoming activations, passes them forward, and fetches the next set of weights.  

**Unit economics**

| Cost driver | Estimate (per inference) |
|-------------|--------------------------|
| **Compute cycles** | A 70 B model requires ≈4×10¹⁴ FLOPs for a single pass; at 1 TFLOP/s per chip, that’s ~400 ms on 8 chips. |
| **Energy** | 0.5 J/TFLOP → 200 J total (≈55 Wh). |
| **Chip amortization** | $10 k per chip × 8 = $80 k; spread over 1 M inferences/day gives $0.08 inference‑cost. |
| **Memory bandwidth** | Streaming 70 GB at 25 Gbps takes ~22 s, but overlapped with compute, so the effective cost is dominated by energy. |
| **Cooling & infrastructure** | 10 W per chip → 80 W total; 0.5 kWh/day ≈ $0.07 at $0.15/kWh. |

**Non‑obvious insight**

The bottleneck is *not* the sheer weight size but the *temporal locality of activations*. By arranging the computation so that each chip repeatedly accesses a small, fixed window of activations (the 230 MB SRAM) while streaming only the weights needed for that window, we reduce memory traffic by an order of magnitude. This transforms a bandwidth‑bound problem into a compute‑bound one, making the deployment feasible on commodity silicon and keeping unit economics competitive.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
