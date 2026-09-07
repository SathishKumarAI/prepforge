---
qid: ing_53bb41bae7__faang__local
question: 'Explain: 10.8.2. Exhaustive Search ¶ — 10.8. Beam Search \u2014 Dive into
  Deep Learning 1.0.3 documentation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 583
total_tokens: 841
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:58:50-05:00'
sources: []
---

**Clarify**  
We’re asked to explain the *Exhaustive Search* and *Beam Search* sections from the “Dive into Deep Learning 1.0.3” docs (chapter 10.8).  
Assumptions:  
- Audience knows basic neural‑network inference but not these search strategies.  
- We’ll focus on how they are used in sequence models (e.g., NMT, speech) and their computational trade‑offs.

**Approach**  
1. Summarize exhaustive search (full‑tree traversal).  
2. Describe beam search as a pruning heuristic.  
3. Highlight differences in time/space complexity.  
4. Mention typical hyper‑parameters (beam width).  
5. Give concrete example (machine translation).

**Depth**  

| Search | Procedure | Complexity | Pros | Cons |
|--------|-----------|------------|------|------|
| **Exhaustive** | Explore every possible token sequence up to a fixed length `T`. For vocab size `V`, there are \(V^T\) paths. | Time: \(O(V^T)\), Space: exponential in `T` | Guarantees optimality under the model’s scoring function. | Infeasible for realistic vocab/lengths; memory blow‑up. |
| **Beam** | Keep top‑`k` partial hypotheses (beam width) at each decoding step. Extend only those, re‑rank with cumulative log‑probability. | Time: \(O(kV T)\), Space: \(O(kT)\) | Trade‑off between optimality and tractability; scalable to long sequences. | May miss the globally best sequence if `k` too small; still computationally heavy for large `V`. |

**Edge cases**  
- *Very small vocab* → exhaustive becomes feasible; beam offers no advantage.  
- *Large beam width (`k≈V`)* → beam degenerates to exhaustive but with overhead.  
- *Long sequences* → both methods suffer, but beam’s linear scaling keeps it usable.  
- *Non‑monotonic scoring (e.g., length penalty)* → beam may prune good long paths early.

**Optimize & Communicate**  
1. **Dynamic beam width**: start small, grow if perplexity rises.  
2. **Early stopping**: terminate when the best hypothesis score surpasses a threshold.  
3. **Parallel decoding**: batch all `k` beams across GPUs to amortize overhead.  

Narrative tip: “Think of exhaustive search as looking at every possible sentence—perfect but impossible for real‑world vocab sizes. Beam search is like hiring only the top‐`k` candidates each round, trading a bit of optimality for tractability.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
