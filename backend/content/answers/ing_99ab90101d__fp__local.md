---
qid: ing_99ab90101d__fp__local
question: 'Q: How would you estimate GPU requirements for serving a model?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 516
total_tokens: 688
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:32:49-05:00'
sources: []
---

**Estimating GPU needs for model serving**

1. **Define the service goal**  
   *Latency budget* (e.g., 100 ms per request) and *throughput* (requests/second). These are the two constraints that any hardware plan must satisfy.

2. **Compute inference work per request**  
   For a neural net, count *floating‑point operations* (FLOPs) in each forward pass:  
   \[
   W = \sum_{\text{layers}} (\text{weights}\times\text{activations})
   \]
   This is the *work* that must be done for one request.

3. **Translate to GPU throughput**  
   A GPU’s peak FLOPs (P) and its actual sustained fraction (s, ≈ 0.4–0.6 for inference) give an effective capacity:  
   \[
   C = s\,P
   \]
   The required number of GPUs is then  
   \[
   N_{\text{GPU}}=\left\lceil\frac{W\times \text{throughput}}{C}\right\rceil .
   \]

4. **Memory check**  
   Each request needs a *batch size* \(b\). GPU memory must hold \(b\) activations plus the model parameters:
   \[
   M_{\text{GPU}}\ge b\times(\text{activation‑size})+M_{\text{model}} .
   \]
   If this exceeds available VRAM, reduce \(b\) or use model sharding.

5. **Non‑obvious insight**  
   *Inference latency is often I/O‑bound rather than compute‑bound.*  
   Even a GPU that meets FLOP requirements can be throttled by CPU‑to‑GPU transfer, driver overhead, or network stack delays. Profiling the entire pipeline (data loading → batching → CUDA kernel launch → result retrieval) reveals hidden bottlenecks; optimizing these can reduce GPU count by 20–30 %.

By iterating over steps 1–4 and profiling step 5, you arrive at a minimal yet robust GPU configuration that satisfies both latency and throughput targets.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
