---
qid: ing_38ad109d86__fp__local
question: The agent answers from a customer's knowledge base, which contains outdated
  and contradictory articles. How do you prevent confidently wrong answers?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 183
output_tokens: 378
total_tokens: 561
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:05:13-05:00'
sources: []
---

**Why the problem exists**

An AI that simply retrieves a single “most‑relevant” paragraph from a noisy knowledge base treats every document as equally trustworthy. When articles are outdated or contradict one another, the retrieved snippet can be *confidently wrong*—the model’s softmax scores reflect internal consistency rather than external truth.  

**The principled fix**

Treat each article as an *information source* with its own **credibility distribution** \(P(\text{truth}\mid \text{article})\).  
1. **Temporal weighting**: decay confidence exponentially with publication date, so newer evidence dominates older claims.  
2. **Conflict detection**: run a lightweight consistency checker (e.g., pairwise contradiction detection via entailment models) to flag mutually exclusive statements.  
3. **Bayesian aggregation**: combine sources by multiplying their credibility posteriors and normalizing—this is the *product of experts* principle, ensuring that contradictory evidence reduces overall confidence.  
4. **Uncertainty calibration**: output a calibrated probability (e.g., via temperature scaling) and refuse to answer if entropy exceeds a threshold.

**Non‑obvious insight**

Most systems stop at “pick the best match.” The real safeguard is *explicitly modeling source reliability*—treating each article as a noisy sensor—and letting the AI learn how much weight to give to older, newer, or conflicting evidence. This turns the knowledge base from a flat repository into a probabilistic evidence network that naturally prevents confidently wrong answers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
