---
qid: ing_3e5dbbc77c__think__local
question: 'Explain: Serving-time isolation: shared GPU is okay, KV cache is not'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 509
total_tokens: 702
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:52:12-05:00'
sources: []
---

**1️⃣ Clarify the question & set assumptions**  
   - *What* is meant by “serving‑time isolation”?  Assume it refers to ensuring that multiple inference jobs (e.g., different users or models) do not interfere with each other when they run on the same GPU.  
   - *Why* is shared GPU acceptable but KV cache sharing problematic?  Assume we’re dealing with transformer‑based models where key–value caches are per‑token and per‑model.

**2️⃣ Mental model / framework**  
   - **Resource isolation layers**: hardware (GPU memory, compute), data structures (weights, activations, KV cache).  
   - **Shared vs. private**: shared GPU memory can be segmented; KV cache is a mutable, per‑inference buffer that must stay consistent for each model.

**3️⃣ Step‑by‑step reasoning**  
   1. A GPU’s global memory is just a large address space; we can partition it with page tables or CUDA streams so two jobs never write over each other.  
   2. The weights and static buffers are read‑only once loaded, so sharing them is fine.  
   3. KV cache holds dynamic state (keys/values for every token generated) that changes per inference run.  
   4. If two jobs share the same KV buffer, one job’s output could overwrite another’s cached values → corrupted predictions or security leakage.  
   5. Therefore, at serving time we must allocate a separate KV cache region per request/model; GPU memory can still be shared.

**4️⃣ Common traps to avoid**  
   - Assuming “shared GPU” automatically means no interference—remember you need explicit segmentation.  
   - Forgetting that KV caches are *mutable* and *per‑token*, not just read‑only.  
   - Overlooking that some inference frameworks (e.g., Triton) may still share buffers if not configured.

**5️⃣ Sanity‑check & verbalize**  
   - Ask: “If two users request the same model simultaneously, could one’s cache corrupt the other?” → Yes, if shared.  
   - Confirm: “Can we safely let them run on the same GPU with separate memory partitions?” → Yes.  
   - Communicate clearly: “GPU is a shared resource; as long as each inference gets its own KV buffer, isolation holds.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
