---
qid: ing_0ff8e670d1__faang__local
question: 'Explain: The benchmark: three workloads, and a mistake I almost shipped'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 399
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:20:31-05:00'
sources: []
---

**Clarify**  
The interview asks you to describe a *benchmark* that evaluates three distinct ML workloads (e.g., image classification, language modeling, recommendation) and the near‑ship error you caught. Clarify what “workloads” means—datasets, model families, inference vs training—and confirm the metric (latency, throughput, accuracy).  

**Approach**  
1. Pick representative models for each domain.  
2. Define a unified evaluation pipeline: data ingestion → preprocessing → model execution → post‑processing.  
3. Instrument to capture latency, CPU/GPU utilization, memory, and accuracy per workload.  
4. Run the benchmark on target hardware (e.g., A100 vs V100) and aggregate results.

**Depth**  
- **Accuracy**: Top‑1/Top‑5 for vision, perplexity for language, RMSE for recommendation.  
- **Performance**: Average latency, 95th percentile, throughput (samples/s).  
- **Resource usage**: Peak GPU memory, FLOPs per second.  
Implementation uses `torch.utils.benchmark` and a custom logger; complexity is O(N) over samples, negligible overhead.

**Edge Cases**  
- Small batch sizes causing kernel launch overhead skewing latency.  
- Dataset shuffling leading to inconsistent results—seed control needed.  
- GPU driver mismatches producing stale cache entries; test on fresh installs.

**Optimize & Communicate**  
After spotting the mistake (a hidden 50 ms GPU idle due to a missed `torch.cuda.synchronize()`), I fixed it, reran the benchmark, and presented a concise report: “Latency improved by 12% across all workloads.” Emphasize that systematic instrumentation prevented a costly production regression. This showcases structured problem solving, clear communication, and deep technical rigor—qualities FAANG interviewers prize.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
