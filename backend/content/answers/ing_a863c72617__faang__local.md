---
qid: ing_a863c72617__faang__local
question: 'Explain: We''re going to walk through your take-home. Start by telling
  me the biggest weakness in what you submitted.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 410
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:16:16-05:00'
sources: []
---

**Clarify**  
The interviewer wants a candid assessment of my own solution—what I see as its single most significant flaw and why it matters.

**Approach**  
I’ll (1) restate the submission’s core goal, (2) identify the weakness in concrete terms, (3) explain its impact on correctness or performance, and (4) suggest a realistic fix.  

**Depth**  
My take‑home was an LLM‑based summarizer that tokenizes input, runs it through a transformer, and streams the result to the UI. The biggest weakness is **the lack of deterministic reproducibility**: I used random seeds only for data shuffling but not for model initialization or dropout layers during inference. Consequently, repeated runs on identical inputs can yield slightly different summaries, breaking unit tests that expect exact outputs and confusing downstream pipelines that rely on stable identifiers (e.g., caching).  

A concrete fix is to set a global seed (`torch.manual_seed(42)`, `np.random.seed(42)`), disable dropout in eval mode (`model.eval()`), and use deterministic CUDA operations (`torch.backends.cudnn.deterministic = True`). This guarantees identical token streams for the same prompt, simplifying testing and enabling consistent caching.  

**Edge Cases**  
If we enable multi‑GPU inference, determinism can still slip; we’d need to add `torch.distributed`‑level seeds or fall back to single‑GPU mode for exact reproducibility. Also, if the model architecture changes (e.g., adding a new attention head), the seed strategy must be revisited.

**Optimize & Communicate**  
Beyond determinism, I’ll mention that this change costs negligible runtime overhead but provides huge gains in reliability and testability—key for production AI services at FAANG. This narrative shows I spot hidden pitfalls, understand their technical roots, and can propose concrete, low‑cost mitigations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
