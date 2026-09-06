---
qid: ing_db144324f0__think__local
question: How do you debug non-deterministic bugs in LLM systems?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 446
total_tokens: 638
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:24:19-05:00'
sources: []
---

**1️⃣ Clarify the scope and assumptions**  
   - Are we talking about a single inference run, batch processing, or training?  
   - Which parts of the pipeline are nondeterministic (token sampling, parallel data loading, GPU scheduling)?  
   - Do you have deterministic seeds set (e.g., `torch.manual_seed`) and reproducible hardware?

**2️⃣ Adopt a layered mental model**  
   - *Data layer*: input preprocessing & tokenization.  
   - *Model layer*: weights, architecture, random ops.  
   - *Execution layer*: parallelism, compiler optimizations, device placement.

**3️⃣ Step‑by‑step reasoning**  
   1. **Reproduce the bug deterministically**: run with a fixed seed and minimal batch size.  
   2. **Isolate the source**: toggle components (e.g., disable dropout, switch off mixed precision).  
   3. **Instrument**: log intermediate activations, attention maps, and random seeds at each step.  
   4. **Statistical checks**: compare distributions of outputs across runs; use hypothesis tests to spot drift.  
   5. **Hardware sanity**: run on a single CPU core or single GPU to eliminate race conditions.

**4️⃣ Common traps**  
   - Assuming a fixed seed guarantees reproducibility across all libraries (PyTorch, CUDA).  
   - Ignoring non‑deterministic ops like `torch.cuda.synchronize()` or `cudnn` benchmark mode.  
   - Overlooking deterministic behavior in distributed settings (e.g., NCCL).

**5️⃣ Sanity‑check & communicate**  
   - Verify that the bug disappears when you remove the suspected source.  
   - Summarize findings: “The issue stems from non‑deterministic `cudnn` convolution calls; enabling `torch.backends.cudnn.deterministic=True` resolves it.”  
   - Share logs, seed values, and minimal reproducible code so others can validate your fix.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
