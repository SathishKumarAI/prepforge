---
qid: ing_10eae68c14__fp__local
question: 'Explain: Context Relevance — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 168
output_tokens: 427
total_tokens: 595
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:41:47-05:00'
sources: []
---

**Context relevance in LLM evaluation**

When a language model generates an answer, the *problem* it solves is: **map an input prompt \(x\) and a context set \(\mathcal{C}\) to an output \(y\)** that satisfies the user’s intent.  
Formally we seek a policy \(p(y|x,\mathcal{C})\) that maximizes expected utility

\[
U = \mathbb{E}_{(x,y^*)}\!\left[\mathbf{1}\{ y=y^* \} \right],
\]

where \(y^*\) is the ground‑truth answer.  
If \(\mathcal{C}\) contains irrelevant facts, the model’s posterior over \(y\) becomes a weighted mixture of competing hypotheses:

\[
p(y|x,\mathcal{C}) = \sum_{c\in\mathcal{C}} w_c\, p(y|x,c), \quad
w_c \propto \exp(\text{compatibility}(x,c)).
\]

Thus, *context relevance* is the ability to assign high weight \(w_c\) only to truly useful facts. This reduces entropy in the posterior and aligns with **information bottleneck**: keep only the minimal set of context that maximally predicts \(y^*\).  

A rigorous metric evaluates how much a model’s answer changes when an irrelevant fact is inserted or removed—essentially measuring *mutual information* between \(\mathcal{C}\) and \(y\).  
The non‑obvious insight: **the best context is not the one with most tokens, but the one that maximally reduces uncertainty about the target**. A concise, highly predictive snippet can outperform a long but noisy background, a fact often overlooked when tuning retrieval pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
