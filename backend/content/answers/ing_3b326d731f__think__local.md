---
qid: ing_3b326d731f__think__local
question: Explain FlashAttention's core idea. What does it optimise, and what doesn't
  it change?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 196
output_tokens: 396
total_tokens: 592
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:45:21-05:00'
sources: []
---

**1️⃣ Clarify the ask & assumptions**  
   - The user wants a *conceptual* explanation of FlashAttention, not implementation details.  
   - Assume they know basic transformer self‑attention but not GPU memory hierarchies.

**2️⃣ Adopt a “kernel‑optimization” mental model**  
   - View attention as a matrix multiplication plus softmax.  
   - Think in terms of *memory traffic* vs *compute*.  

**3️⃣ Step‑by‑step reasoning**  
   1. Recall that vanilla scaled‑dot‑product attention computes `QKᵀ` (O(n²)), then softmax, then multiply by V.  
   2. FlashAttention rewrites this as a **single fused kernel**: it streams blocks of Q and K into shared memory, performs the dot product, applies softmax on‑the‑fly, and accumulates partial results for V—all in one pass.  
   3. The core idea is to eliminate intermediate n×n tensors that would normally be stored in global memory.  
   4. It optimizes **memory bandwidth** (fewer global loads/stores) and **latency hiding** (parallel reduction inside shared memory).  

**4️⃣ Common pitfalls**  
   - Confusing “Flash” with GPU flash memory; it’s about *flash* (fast) attention, not a storage device.  
   - Thinking the algorithm changes the mathematical result—no, it produces exactly the same output as standard attention.

**5️⃣ Sanity check & verbalise**  
   - Ask: Does this explanation answer “what does it optimise” and “what doesn’t change”?  
   - Summarise: *FlashAttention fuses all steps to cut memory traffic; it keeps the exact attention computation intact.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
