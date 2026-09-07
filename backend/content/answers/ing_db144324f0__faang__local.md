---
qid: ing_db144324f0__faang__local
question: How do you debug non-deterministic bugs in LLM systems?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 477
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:07:47-05:00'
sources: []
---

**Clarify**  
We’re asked how to find the root cause of a bug that only appears intermittently in an LLM‑based system (e.g., flaky generation, wrong outputs, or training pipeline failures).  
Assumptions: we have access to logs, model checkpoints, and can replay inputs; the model runs on GPU clusters with deterministic seeds not guaranteed.

**Approach**  
1. **Reproduce deterministically** – run the failing input with fixed random seeds and a single‑threaded inference engine.  
2. **Isolate the component** – separate preprocessing, tokenization, model forward pass, post‑processing, and downstream services.  
3. **Instrumentation** – add fine‑grained logs (tensor shapes, op timings, GPU memory) and checksum hooks at each boundary.  
4. **Statistical analysis** – run many replicas of the same input to collect a distribution of outputs; use hypothesis testing to detect deviations.

**Depth**  
- Use deterministic cuDNN flags (`CUBLAS_WORKSPACE_CONFIG=":4096:8"`, `TF_CUDNN_DETERMINISTIC=1`) and set `torch.backends.cudnn.deterministic = True`.  
- Capture the exact seed used by any random ops (e.g., dropout, sampling).  
- Store intermediate activations to compare across runs; a mismatch indicates non‑determinism.  
- If outputs differ after identical seeds, suspect GPU driver or mixed‑precision arithmetic; roll back to FP32 or use `torch.backends.cuda.matmul.allow_tf32 = False`.  
Complexity: O(N) for replaying N inputs; memory overhead proportional to activation size.

**Edge Cases**  
- Multi‑node inference with asynchronous communication may mask non‑determinism.  
- Data augmentation pipelines that shuffle batches can introduce hidden randomness.  
- External services (e.g., tokenizers) might use thread‑local RNGs.

**Optimize & Communicate**  
Once the culprit is identified, lock the offending library version or patch the RNG usage. Document the debugging pipeline in a runbook so future teams can follow the same deterministic replay steps. Summarize findings with visual graphs of output distributions before and after fixes to demonstrate impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
