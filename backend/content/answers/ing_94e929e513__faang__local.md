---
qid: ing_94e929e513__faang__local
question: 'Solutions-architect scenario: a customer''s LLM chatbot on 8 GPUs is "too
  slow and too expensive." You have one week with them. What do you do?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 625
total_tokens: 881
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:30:25-05:00'
sources: []
---

**Clarify**  
Restate the goal: reduce latency & cost of an LLM‑powered chatbot that currently runs on 8 GPUs (≈ 32 GB VRAM each) and is “too slow” for real‑time use and “too expensive” to run continuously. Ask: *What SLA does the client need?* *Which model size are they using?* *Do they have any inference budget per request or monthly?* *Is there a latency threshold (e.g., < 200 ms) and throughput target (reqs/sec)?* *Can we trade off accuracy for speed?* *What deployment environment do they control?*

**Approach**  
1. **Profile the current stack** (GPU utilization, kernel bottlenecks).  
2. **Model‑level optimizations**: quantization (int8/float16), knowledge distillation, or switching to a smaller model (e.g., GPT‑NeoX 2B vs. 6B).  
3. **Inference engine tuning**: use TensorRT / ONNX Runtime with GPU kernels, enable kernel fusion & dynamic batching.  
4. **Hardware scaling**: replace 8x high‑end GPUs with a single or two large‑batching GPUs (e.g., A100) + model parallelism if needed.  
5. **Cost mitigation**: move to spot/Preemptible VMs, consider serverless inference (AWS SageMaker endpoint).  

**Depth**  
- Quantization reduces memory bandwidth by ~4× and can cut latency by 30–50 % with <1 % loss in perplexity.  
- TensorRT offers a 2–3× speed‑up over vanilla PyTorch, especially when combined with FP16.  
- Model parallelism across two A100s (80 GB) keeps per‑GPU memory <40 GB, halving GPU count and cost.  
- Spot instances cut compute costs by ~70 %, but add fault tolerance overhead.

**Edge Cases**  
- Quantization may fail for models with very small token vocabularies or heavy softmax layers.  
- Batch sizes too large cause GPU memory overflow; dynamic batching mitigates this.  
- Spot instance preemption could interrupt long‑running inference pipelines—need checkpointing or fallback to on‑demand VMs.

**Optimize & Communicate**  
Present a phased plan: (1) immediate profiling + quantization, (2) deploy TensorRT on existing GPUs for quick win, (3) re‑architect with 2× A100s and spot pricing for sustained savings. Quantify expected latency drop (e.g., from 800 ms to < 250 ms) and cost reduction (~50 %). Conclude with a rollback strategy if accuracy degrades beyond acceptable bounds. This structured, data‑driven approach demonstrates problem clarity, technical depth, and actionable recommendations—key for FAANG interview success.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
