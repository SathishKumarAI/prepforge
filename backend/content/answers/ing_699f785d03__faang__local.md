---
qid: ing_699f785d03__faang__local
question: 'Explain: Memory — Back of the Envelope - System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 425
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:49:08-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to estimate how much memory a ML system needs for training a typical model (e.g., ResNet‑50 on ImageNet). Key assumptions: batch size = 32, 3 GB of GPU RAM per device, 256‑bit float precision, and we need to store activations, gradients, optimizer states, and the model parameters.  

**Approach**  
1. Compute *model size*: ~25 M params × 4 B = 100 MB.  
2. Activations: each layer outputs a tensor; for a 32‑sample batch ResNet‑50 produces about 200 MB of activations.  
3. Gradients ≈ same as activations → +200 MB.  
4. Optimizer state (e.g., Adam) doubles gradient memory → +400 MB.  
5. Add overhead (~10 %) for buffers and caching.  

**Depth**  
Total ≈ 100 + 200 + 200 + 400 = 900 MB per GPU, comfortably below a 3 GB limit. If batch size grows to 128, activations quadruple → ~3.6 GB, exceeding the budget; thus we must use gradient checkpointing or mixed‑precision (16‑bit) which halves memory for activations and gradients.  

**Edge Cases**  
- Very deep models (Transformer with millions of heads) produce larger activations.  
- Sparse layers or dynamic computation graphs may reduce memory.  
- Multi‑GPU setups need to account for communication overhead (~10–20 % extra).  

**Optimize & Communicate**  
Explain that we can trade compute for memory by recomputing activations (checkpointing), use 16‑bit floats, and employ mixed‑precision libraries. Summarize: with the given assumptions a single GPU suffices; scaling batch size or model depth requires careful memory management techniques.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
