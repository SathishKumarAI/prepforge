---
qid: ing_71cc77c1b1__faang__local
question: 'Explain: NVIDIA GPU and Systems — Faang Recent Questions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 462
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:08:09-05:00'
sources: []
---

**Clarify**  
The interviewer is asking for a concise overview of the kinds of machine‑learning–centric questions you’ll see around NVIDIA GPUs and system design at FAANG. I’ll assume they want: (1) technical depth on GPU architecture relevant to ML, (2) recent interview patterns, and (3) how to position your answers.

**Approach**  
1. Outline key GPU concepts that affect ML workloads (CUDA cores, Tensor Cores, memory hierarchy).  
2. Map those concepts to typical FAANG questions (e.g., “How would you optimize a transformer inference on an A100?”).  
3. Highlight recent trends: mixed‑precision training, model parallelism, and edge‑GPU inference.

**Depth**  
- **CUDA & Tensor Cores**: CUDA cores handle general FP32/FP64 ops; Tensor Cores accelerate INT8/FP16 matrix multiplies—critical for transformers and CNNs.  
- **Memory Hierarchy**: L1/L2 caches, HBM bandwidth (e.g., 1555 GB/s on A100), NVLink inter‑GPU bandwidth.  
- **Software Stack**: cuDNN, NCCL for data parallelism, TensorRT for inference optimization.  
- **Common Questions**: “Explain how to reduce GPU memory footprint when training a BERT model.” → answer with gradient checkpointing, mixed precision, and sharded embedding tables.  
- **Edge GPU Inference**: Discuss NVIDIA Jetson, power‑budget constraints, quantization, and ONNX Runtime.

**Edge Cases**  
- Extremely large models that exceed single‑GPU memory → model parallelism, pipeline parallelism.  
- Latency‑critical workloads on mobile GPUs → dynamic batching vs. static inference graphs.  

**Optimize & Communicate**  
Start with the core architecture, then tie each feature to a concrete interview problem you’ve solved. Emphasize trade‑offs (precision vs. speed, memory vs. accuracy). End by summarizing how understanding NVIDIA’s hardware gives you an edge in designing scalable ML systems at FAANG.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
