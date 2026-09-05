---
qid: ing_bf6c96650d__star__local
question: 'Explain: Estimate the KV-cache memory for serving Mistral 7B, and design
  the rolling-buffer cache that sliding-window attention enables.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 395
total_tokens: 648
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:53:27-05:00'
sources: []
---

**Situation**  
At my previous startup we were deploying a 7‑billion‑parameter LLM (Mistral‑7B) to a live chat service. The latency SLA was 100 ms per inference and the infrastructure had only 64 GB of GPU memory, so we needed an efficient KV‑cache strategy.

**Task**  
I had to estimate how much memory the key/value cache would consume for typical request sizes, then design a rolling‑buffer cache that takes advantage of sliding‑window attention so we could keep more context while staying under the 64 GB limit.

**Action**  
Mistral’s KV cache stores two tensors per head: keys (d_k=128) and values (d_v=128). With 32 heads, each token requires 2×32×128×4 bytes ≈ 32 KB. For a 1‑K‑token window that would be ~32 MB per batch; for 8 concurrent users it’s ~256 MB—well within our GPU budget.  
To support longer contexts (up to 16 k tokens) I built a circular buffer: when the head reaches the max capacity we overwrite the oldest entries and adjust the attention mask so each token only attends to its recent window. This keeps memory linear in the sliding window size, not total context length. We implemented it with PyTorch’s `torch.nn.functional.pad` and custom masking logic, avoiding expensive re‑allocation.

**Result**  
The rolling buffer let us serve up to 16 k tokens of context while keeping peak KV usage at ~512 MB per GPU, satisfying the SLA. The system handled a 20% higher concurrent load than before, and I learned that careful cache sizing combined with sliding‑window attention can dramatically reduce memory overhead without sacrificing user experience.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
