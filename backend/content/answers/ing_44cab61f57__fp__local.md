---
qid: ing_44cab61f57__fp__local
question: 'Explain: When is a workload compute-bound vs memory-bound on a GPU? Do
  the roofline math for transformer prefill vs decode.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 573
total_tokens: 759
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:32:05-05:00'
sources: []
---

**When is a workload compute‑bound vs memory‑bound?**  
A GPU kernel is *compute‑bound* if the arithmetic intensity (AI = FLOPs / bytes transferred) exceeds the ratio of peak compute to peak memory bandwidth:  

\[
AI > \frac{P_{\text{peak}}}{B_{\text{peak}}}\quad(\text{flop/byte})
\]

Otherwise it is *memory‑bound*.  
The “roofline” plots attainable throughput as the minimum of two ceilings: a flat compute roof \(P_{\text{peak}}\) and a sloped memory roof \(AI \times B_{\text{peak}}\). The point where the two intersect defines the *ridge* AI.

---

### Transformer prefill vs decode

| Phase | FLOPs per token | Bytes moved (≈ 2× model‑size + activations) |
|-------|-----------------|---------------------------------------------|
| Prefill (parallel over \(N\) tokens) | \(\approx 12\,\text{GFlop}\) | \(\approx 4\,\text{GB}\) |
| Decode (sequential, one token)      | \(\approx 1.5\,\text{GFlop}\) | \(\approx 0.8\,\text{GB}\) |

Assume a modern GPU with \(P_{\text{peak}}=10\,\text{TFLOPs}\), \(B_{\text{peak}}=600\,\text{GB/s}\).  
Ridge AI ≈ \(10/600 \approx 0.017\,\text{flop/byte}\).

*Prefill*: AI ≈ \(12\times10^9 / 4\times10^9 = 3\) > 0.017 → **compute‑bound** (limited by the GPU’s FP units).  
*Decode*: AI ≈ \(1.5\times10^9 / 0.8\times10^9 \approx 1.9\) > 0.017 → also compute‑bound, but with far fewer FLOPs; throughput is now limited by *latency* of the sequential dependency rather than raw compute.

---

**Non‑obvious insight:** Even when both phases are compute‑bound, the *effective* roofline slope for decode collapses because each token must wait for the previous one’s activations. Thus, optimizing memory layout (e.g., fused KV caches) can reduce the hidden latency and bring decode closer to the compute roof, whereas prefill benefits mainly from higher parallelism.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
