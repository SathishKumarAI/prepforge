---
qid: ing_4ff161a528__fp__local
question: Explain pass@k vs pass^k. Why does the distinction matter for production
  agents?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 177
output_tokens: 684
total_tokens: 861
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:54:58-05:00'
sources: []
---

**Why the notation matters**

*Pass‑@ k* (often written \(\text{pass}@k\)) is a *single‑shot* metric:  
given one prompt, we ask the model to generate \(k\) candidates and we count success if **any** of those \(k\) hits the ground truth. Formally  

\[
\text{pass}@k = \Pr(\text{ground truth} \in \{\hat y_1,\dots ,\hat y_k\})
\]

It is a *set‑based* probability that depends only on the marginal distribution of the top‑\(k\) outputs.

*Pass\(^k\)* (sometimes called “pass‑to‑\(k\)” or “success‑rate‑to‑\(k\)”) treats the process as **sequential**: the model can issue up to \(k\) attempts, each time possibly conditioned on previous failures. The metric is  

\[
\text{pass}^k = 1-\prod_{i=1}^{k}\bigl(1-p_i\bigr)
\]

where \(p_i\) is the success probability of attempt \(i\). In the simplest case where each attempt is independent and identically distributed, \(\text{pass}^k = 1-(1-p)^k\); but in practice later attempts can be informed by earlier ones (e.g., through memory or self‑correction).

**Why it matters for production agents**

1. **Resource budgeting**: \(\text{pass}@k\) assumes a single, expensive call that returns \(k\) answers; \(\text{pass}^k\) counts up to \(k\) separate calls. If each call costs time or money, the two metrics can diverge dramatically.

2. **User experience**: In an interactive agent, users may see only one answer at a time. A high \(\text{pass}@k\) does not guarantee that the first reply is correct; a high \(\text{pass}^k\) reflects the chance of eventual success across retries.

3. **Optimization focus**: Training to maximize \(\text{pass}@k\) encourages diversity in the top‑\(k\) set, whereas training for \(\text{pass}^k\) pushes the model toward *reliable* single‑shot accuracy and self‑refinement strategies.

**Non‑obvious insight**

The two metrics differ even when \(p_i=p\) because the product form of \(\text{pass}^k\) penalizes late successes more heavily than early ones. In production, this means that an agent with a modest top‑1 accuracy but a strong ability to correct itself (high later‑attempt success) can achieve a far better overall user satisfaction than one that only occasionally lands the right answer in its first \(k\) suggestions. Thus, choosing the correct metric is not merely semantic—it shapes both system design and perceived reliability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
