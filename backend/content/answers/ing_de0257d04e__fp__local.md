---
qid: ing_de0257d04e__fp__local
question: 'Explain: Performance vs scalability — GitHub - donnemartin/system-design-primer:
  Learn how to design large-scale systems. Prep for the system design interview.  Includes
  Anki flashcards. \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 207
output_tokens: 474
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:51:47-05:00'
sources: []
---

**Performance vs. Scalability in Machine‑Learning Systems**

At the core of any ML service is a *throughput–latency* trade‑off: we want predictions fast (performance) and we want the same speed as data grows (scalability).  

1. **Why performance matters:**  
   Prediction latency \(L = T_{\text{comp}} + T_{\text{comm}}\).  For real‑time apps, each microsecond counts; a poorly cached model or a serial inference pipeline inflates \(T_{\text{comp}}\) and makes the system unusable.

2. **Why scalability matters:**  
   As input volume \(N\) rises, we must keep \(L(N)\) bounded.  This is governed by *Amdahl’s Law* for parallelism:  
   \[
   L(N) = \frac{T_{\text{serial}}}{S} + T_{\text{parallel}}\!\left(\frac{N}{P}\right),
   \]
   where \(P\) is the number of workers.  If \(T_{\text{serial}}\) dominates, adding more machines yields diminishing returns—scalability fails.

3. **Deeper principle – *bottleneck identification*:**  
   The bottleneck is whichever component has the largest derivative \(\partial L / \partial x\).  Optimizing that component reduces overall latency linearly; optimizing a non‑critical path only gives quadratic gains.

4. **Non‑obvious insight:**  
   *Model size and precision are often mistaken as the sole scalability levers.* In practice, **data sharding** and **feature pre‑aggregation** reduce \(T_{\text{comp}}\) far more than pruning the network. A system that pre‑computes embeddings for frequent queries can achieve both low latency and linear scaling with minimal hardware.

In short: performance is about *instantaneous* efficiency; scalability is about *future‑proofing* that efficiency. The key to designing large‑scale ML systems is to continuously profile, identify the dominant derivative term, and refactor around it—often by restructuring data flow rather than tweaking model internals.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
