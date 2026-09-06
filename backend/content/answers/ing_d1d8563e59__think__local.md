---
qid: ing_d1d8563e59__think__local
question: 'Explain: Training memory math (why you can''t full-fine-tune 7B on a 24
  GB card)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 202
output_tokens: 513
total_tokens: 715
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T14:49:03-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**  
- *What is “training‑memory math”?* It’s the calculation of GPU memory needed for a model during training (parameters + activations + gradients + optimizer states).  
- *Assume:* 7 B parameters, FP16 precision, standard transformer architecture, no mixed‑precision tricks beyond basic FP16.  

**2️⃣ Adopt a mental model: Memory = Params + Activations + Gradients + Optimizer**  
Break the total into components:
1. **Model weights** – `params × bytes_per_param`.  
2. **Gradients** – roughly equal to weights (FP16).  
3. **Optimizer state** – Adam needs two tensors per weight → 4× params.  
4. **Activations** – depend on batch size, sequence length, hidden size; often dominate for large models.

**3️⃣ Step‑by‑step reasoning**  
- Compute *parameter memory*: `7 B × 2 bytes ≈ 14 GB`.  
- Gradients add another ~14 GB.  
- Optimizer state (Adam) adds `4 × 7 B × 2 bytes ≈ 56 GB`.  
Already > 70 GB, far beyond a 24 GB card.  
Even if you drop optimizer memory (e.g., use SGD), you still need ~28 GB for weights + grads alone.  
Activations for a typical batch (batch = 1, seq ≈ 1024) can be tens of GB more.  
Thus the math shows why 7 B cannot fit on 24 GB.

**4️⃣ Common traps to avoid**  
- Forget optimizer memory; many overlook it.  
- Assume activations are negligible – they often exceed weights for transformers.  
- Ignore that FP16 *doesn’t* halve all tensors (e.g., some buffers stay FP32).  

**5️⃣ Sanity‑check & verbalize**  
Cross‑verify each component against known benchmarks (e.g., 1 B GPT‑2 on 16 GB). If the sum > GPU, the math is right. Explain: “Even with minimal batch size and FP16, the optimizer alone already demands ~56 GB; thus a 24 GB card can’t hold a full‑fine‑tune of a 7 B model.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
