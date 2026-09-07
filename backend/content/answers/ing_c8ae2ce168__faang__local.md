---
qid: ing_c8ae2ce168__faang__local
question: 'Explain: Capacity planning: you''re told to expect 100 requests/sec at
  peak with ~2K input and ~300 output tokens per request. Walk me through estimating
  the GPU fleet.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 550
total_tokens: 808
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:26:48-05:00'
sources: []
---

**Clarify**  
We’re asked to size a GPU fleet for an AI service that will receive **≈100 req/s peak**, each request carrying ~2 KB input and producing ~300 output tokens (≈1–2 KB). I’ll assume: *stateless inference*, *single‑GPU per model instance*, *model latency target <200 ms*, and *no GPU sharing across requests*.

**Approach**  
1. **Compute token throughput** – 100 req/s × 300 tokens ≈ 30 k tokens/s.  
2. **Model‑specific FLOPs** – Suppose the model requires ~12 TFLOP/s per 1 K tokens (typical for GPT‑3‑like transformers).  
3. **GPU capacity** – A high‑end NVIDIA A100 delivers ~312 GFLOP/s single‑precision, or ~600 TFLOP/s if we use tensor cores in FP16/INT8 mode.  
4. **Per‑request GPU load** – 300 tokens ≈ 3.6 TFLOPs; at 200 ms latency → ~18 TFLOP/s per GPU.  
5. **Fleet size** – 30 k tokens/s ÷ 300 tokens/request = 100 req/s → 100 × 18 TFLOP/s = 1,800 TFLOP/s total.  
   With A100 at 600 TFLOP/s, we need ~3 GPUs (≈1.8/0.6). Add a safety margin → **4 A100s**.

**Depth**  
- GPU selection: A100 (or newer H100) for FP16 tensor‑core throughput.  
- Parallelism: Batch requests into 10–20 per GPU to amortize overhead, keeping latency under target.  
- Memory: Each request ~2 KB input + model (~12 GB) → fits comfortably on A100.

**Edge Cases**  
- Sudden traffic spikes (e.g., 200 req/s): double fleet or autoscale.  
- Longer outputs (>300 tokens): proportionally increase GPU load.  
- Model updates that raise FLOP per token: re‑compute capacity.

**Optimize & Communicate**  
I’d present a simple formula table, show the margin buffer, and explain that scaling is linear with request volume. I would also note that if latency constraints relax or we move to FP8, GPU count could drop further. This keeps the interviewers confident in my quantitative reasoning and practical system design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
