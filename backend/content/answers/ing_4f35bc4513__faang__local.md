---
qid: ing_4f35bc4513__faang__local
question: Even random sampling can eventually generate the correct answer with a large
  enough k . So doesn't that make your result—that RL improves over base model's pass@
  k —meaningless?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 548
total_tokens: 806
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:48:45-05:00'
sources: []
---

**Clarify**  
You’re asking whether the claim “RL‑based fine‑tuning improves Pass@k compared to a vanilla language model” is meaningless because *any* random sampler will eventually hit the correct answer if k is large enough. The underlying assumption here is that we are comparing two **strategies** (pure sampling vs. RL‑guided sampling) under the same constraints on k and compute budget, not just asymptotic behavior as k → ∞.

**Approach**  
1. Define Pass@k: fraction of prompts for which at least one sampled completion satisfies a correctness criterion.  
2. Treat k as a fixed resource (e.g., 10 or 100 samples).  
3. Measure the probability that RL‑guided sampling yields a correct answer versus vanilla sampling.

**Depth**  
- In pure sampling, each token is chosen from the model’s softmax independently; the probability of a correct answer is \(p_{\text{rand}}\).  
- RL introduces a *policy* that biases logits toward high‑reward sequences. If the reward correlates with correctness, the per‑sample success probability becomes \(p_{\text{RL}} > p_{\text{rand}}\).  
- Pass@k for independent trials: \(\Pr[\text{≥1 success}] = 1-(1-p)^k\). Even if k is modest (e.g., 10–20), a 2× increase in per‑sample probability can boost Pass@k from ~30 % to >50 %.  
- As k grows, the advantage shrinks but never vanishes; RL still reduces the *expected* number of samples needed to hit a correct answer.

**Edge Cases**  
- If the reward function is poorly aligned (high variance or mis‑specified), \(p_{\text{RL}}\) could drop below \(p_{\text{rand}}\).  
- For extremely large k, both methods converge; we would then compare *efficiency* rather than success rate.  
- Test with synthetic tasks where ground truth is known and reward can be exactly computed.

**Optimize & Communicate**  
Highlight that RL improves the *sample efficiency*—it gets you to a correct answer faster or with fewer prompts, which matters in latency‑sensitive applications (e.g., real‑time QA). Explain that “eventual correctness” is asymptotic and not practically relevant when k is bounded. Conclude by framing the result as a *practical* gain rather than a theoretical one, aligning with FAANG’s emphasis on measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
