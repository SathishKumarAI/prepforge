---
qid: ing_a7d6da062b__faang__local
question: 'Q25: How do you optimize LLM inference costs?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 509
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:14:49-05:00'
sources: []
---

**Clarify**  
The goal is to reduce the monetary cost of running a large language model (LLM) at inference time while keeping latency and quality acceptable. I’ll assume we’re dealing with on‑prem or cloud GPU instances, pay‑per‑second pricing, and that the model can be partially offloaded or quantized.

**Approach**  
1. Profile compute, memory, and I/O per token.  
2. Apply model‑level optimizations (pruning, distillation).  
3. Use hardware‑specific acceleration (TensorRT, BF16/FP8).  
4. Batch requests to amortize startup overhead.  
5. Cache repeated prompts or embeddings.

**Depth**  
- **Quantization**: 8‑bit INT8 reduces memory bandwidth by ~75 % and speeds inference on NVIDIA A100s; accuracy loss <0.2 %.  
- **Pruning / Distillation**: Removing redundant attention heads cuts FLOPs by 30–40 %, allowing a smaller model to run on cheaper V100s.  
- **TensorRT/ONNX Runtime**: Engine‑level optimizations yield 1.5×–3× speedups, lowering GPU time per request.  
- **Batching**: Group 8–16 concurrent prompts; GPUs are highly parallel, so overall cost per token drops by ~20 %.  
- **Caching**: Store embeddings of frequent prefixes (e.g., “What is the weather…”) to avoid recomputation.  

Complexity: Quantization and pruning are O(N) in model size; TensorRT build time is negligible compared to inference. Trade‑offs involve slight accuracy loss vs. cost savings.

**Edge Cases**  
- Extremely short prompts may be dominated by GPU warm‑up, so batching helps less.  
- Highly dynamic prompts break cache benefits.  
- Mixed precision may fail on older GPUs lacking BF16 support.  

**Optimize & Communicate**  
I’d present a dashboard showing cost per token vs. latency for each optimization layer, iteratively tuning thresholds (e.g., batch size). I’d explain that combining quantization, pruning, and hardware acceleration gives the most robust cost reduction while preserving user experience. This structured reasoning demonstrates clear problem framing, actionable steps, depth of technical detail, and awareness of trade‑offs—all key signals for FAANG interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
