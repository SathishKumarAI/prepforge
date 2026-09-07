---
qid: ing_6386819e0c__faang__local
question: 'Q23: What is speculative decoding and when would you use it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 434
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:34:52-05:00'
sources: []
---

**Clarify**  
You’re asking about *speculative decoding* in the context of language‑model inference. Assume we mean the technique where a model “predicts” multiple future tokens before receiving the true next token, then discards or corrects those predictions once the real token arrives. I’ll confirm that the goal is to reduce latency on sequential generation.

**Approach**  
1. Outline what speculative decoding is: parallel token prediction, gating by confidence.  
2. Explain why it speeds up inference (batching, GPU utilization).  
3. Highlight typical use‑cases: interactive chatbots, real‑time translation, any application where throughput > latency matters and a small error budget is acceptable.

**Depth**  
Speculative decoding pre‑generates *k* tokens for each step using a fast, low‑precision “student” model (or the same model in a lower‑ranked mode). The decoder then runs the expensive “teacher” model only on the most probable token from that batch. If the teacher’s top‑1 matches the speculated token, we accept it and continue; otherwise we backtrack and generate the correct sequence. Complexity: baseline O(n) tokens → still linear, but GPU work is batched, improving throughput by ~2–5× with negligible extra memory. Trade‑off: higher variance in accuracy, potential for hallucinated outputs if speculation fails repeatedly.

**Edge Cases**  
- Highly deterministic contexts (e.g., code completion) where wrong speculations rarely occur.  
- Low‑confidence tokens (rare words): speculation may cause repeated backtracks.  
- Real‑time safety‑critical systems: unacceptable risk of incorrect output.

**Optimize & Communicate**  
To improve, one can adaptively tune *k* based on token entropy or use a confidence threshold to decide when to speculate. I’d explain the trade‑offs to stakeholders by showing latency vs. accuracy curves and stress‑testing under different workloads. This demonstrates structured thinking, clear communication, and depth—all key FAANG interview signals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
