---
qid: ing_16299e8d96__star__local
question: 'Q: What is the difference between MHA, MQA, and GQA?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 242
output_tokens: 346
total_tokens: 588
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:12:52-05:00'
sources: []
---

**Situation** – While leading a feature‑flag rollout for our recommendation engine, I noticed the latency spike when we scaled from 5 k to 50 k concurrent users. Our model was using multi‑head attention (MHA) and we needed to keep inference time under 10 ms per request.

**Task** – My goal was to reduce inference cost without sacrificing accuracy, so I had to decide whether to switch to a more efficient attention variant: either MQA (Multi‑Query Attention) or GQA (Grouped Query Attention).

**Action** – I benchmarked all three on our production dataset. With MHA we had 8 heads per layer; with MQA we collapsed them into a single query head and reused key/value projections, cutting the matrix multiplications from O(8H²) to O(H²). For GQA I split heads into groups of two, sharing keys/values within each group. I also profiled GPU memory and found GQA reduced peak usage by 30 % while keeping accuracy drop <0.2 %. The switch required minimal code changes: just a flag in the attention module.

**Result** – Deploying MQA lowered latency from 12 ms to 7 ms per inference, meeting our SLA, and we saved ~35 % of GPU compute during peak traffic. I learned that choosing the right attention variant is a trade‑off between computational savings and model fidelity, and profiling on real workloads is essential before committing to an architectural change.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
