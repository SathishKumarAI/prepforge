---
qid: ing_ca45c881ee__faang__local
question: 'Explain: Back-of-the-envelope calculations — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 272
output_tokens: 471
total_tokens: 743
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T02:30:03-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to describe *back‑of‑the‑envelope* (BOE) calculations for a machine‑learning system—e.g., estimating compute, storage, and latency before deep dives.  I’ll assume we’re sizing an online recommendation engine that processes ~1 M requests/sec with 10 k models.

**Approach**  
1. Pick a key metric (latency or cost).  
2. Break it into sub‑components: data transfer, inference time per model, GPU/CPU count.  
3. Use rough constants from the repo’s Anki cards (e.g., one GPU ≈ 10 ms per inference).  
4. Scale linearly, then apply a safety factor.

**Depth**  
- **Latency**: 1 M req/s × 10 k models = 10⁷ inferences/sec.  
  One GPU handles ~100 inferences/sec → need 10⁵ GPUs.  
  At 10 ms per inference, total latency ≈ 100 ms (plus network).  
- **Cost**: $3/hr per GPU → 10⁵ × $3 = $300k/hr ≈ $7M/day.  
- **Storage**: Each model ≈ 50 MB → 10 k models = 500 GB, negligible compared to compute.

These numbers are ball‑park; we’d refine with profiling and batch inference.

**Edge Cases**  
- Skewed request distribution (some models heavier).  
- Warm‑up time for GPUs.  
- Model quantization reducing GPU count.  
- Network bottlenecks not captured in simple sums.

**Optimize & Communicate**  
After the BOE, I’d discuss:  
1. Batch inference to reduce GPU count.  
2. Use TPUs or FPGAs if latency is critical.  
3. Cache hot models at edge nodes.  
I’d present the math on a whiteboard, iterate with interviewers’ feedback, and emphasize that BOE is just the first sanity check before detailed design.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
