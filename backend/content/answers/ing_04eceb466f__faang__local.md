---
qid: ing_04eceb466f__faang__local
question: 'Explain: Resource Estimation — Back of the Envelope - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 548
total_tokens: 784
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:56:07-05:00'
sources: []
---

**Clarify**  
We’re asked to give a quick “back‑of‑the‑envelope” estimate for the compute/infra cost of training a large ML model (e.g., GPT‑3). Assume: • Model size ≈ 175 B params, 1 TB of mixed‑precision activations. • Training uses 8× A100 GPUs, each 40 GB memory. • Compute budget: ~10 k GPU‑hours per epoch, 30 epochs.

**Approach**  
1. Compute FLOPs per parameter update (≈ 2 × #params).  
2. Scale by batch size and total steps → total FLOPs.  
3. Convert FLOPs to GPU‑hours using A100 peak (~312 TFLOP/s FP16).  
4. Add storage (training data, checkpoints) and networking overhead.  
5. Translate GPU‑hours into cloud cost (~$3–$4 per GPU‑hour on AWS).

**Depth**  
- **FLOPs**: 2 × 175B ≈ 350 B FLOPs per forward+backward pass.  
- **Steps**: 1 TB / (8 GB batch) ≈ 125 k steps/epoch → 3.75 M total.  
- **Total FLOPs**: 350 B × 3.75 M ≈ 1.31×10¹⁸ FLOPs.  
- **GPU‑hours**: 1.31×10¹⁸ / (312 TFLOP/s) ≈ 4.2 k GPU‑hrs per epoch → ~126 k GPU‑hrs total.  
- **Cost**: 126 k × $3.5 ≈ $441k.  
Storage: 1 TB data + 10× checkpoints (~100 GB each) ≈ 2 TB → ~$200/month.

**Edge Cases**  
- Overestimation if actual FLOPs per param < 2 (e.g., mixed‑precision).  
- Under‑estimation if we ignore optimizer memory, gradient accumulation.  
- Network bottlenecks in multi‑node training could inflate cost by 10–20%.

**Optimize & Communicate**  
Explain that this is a rough ballpark; refine with profiling, use model parallelism to reduce per‑GPU load, or switch to cheaper GPU types. Present the math clearly, validate assumptions, and iterate on the estimate as new data arrives.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
