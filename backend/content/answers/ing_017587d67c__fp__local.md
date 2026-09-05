---
qid: ing_017587d67c__fp__local
question: How do you measure faithfulness - whether the model's answer is actually
  grounded in retrieved context?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 178
output_tokens: 377
total_tokens: 555
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:08:11-05:00'
sources: []
---

**Faithfulness as a consistency constraint**

When an LLM answers a question *using* a retrieved document, the fundamental requirement is that every claim in the response must be derivable from that text.  
Let \(R\) be the set of retrieved sentences and \(A=\{a_1,\dots ,a_k\}\) the answer tokens.  We ask: does there exist a mapping \(\phi:A\rightarrow R\) such that each \(a_i\) is semantically entailed by \(\phi(a_i)\)?  
This reduces to a *semantic entailment* problem, which we can solve with a binary classifier trained on annotated pairs \((r,a)\).  The **faithfulness score** for an answer is then the fraction of tokens that are correctly mapped:

\[
F = \frac{1}{k}\sum_{i=1}^{k}\mathbb{I}\bigl(\text{entail}(a_i,\phi(a_i))\bigr).
\]

Because entailment is transitive, we can aggregate at the sentence level for efficiency.  The method respects *information-theoretic optimality*: it rewards maximal use of retrieved content while penalizing hallucinations.

**Non‑obvious insight**  
Many metrics treat faithfulness as a binary “yes/no” per answer, ignoring that a single hallucinated token can render an otherwise correct paragraph unreliable.  By weighting tokens by their *information gain*—the amount they reduce uncertainty about the query—we capture how detrimental each hallucination truly is.  This turns faithfulness into a continuous, interpretable metric aligned with the core goal of trustworthy AI.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
