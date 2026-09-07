---
qid: ing_580beb74df__faang__local
question: 'Explain: It doesn''t look things up, it predicts the next token'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 381
total_tokens: 616
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:08:25-05:00'
sources: []
---

**Clarify**  
We’re asked why a language model *doesn’t* perform a lookup and instead *predicts* the next token.  
Assumptions: the model is pre‑trained on massive corpora, operates in real time, and has no external database access during inference.

**Approach**  
Explain the generative pipeline: input → embedding → transformer layers → probability distribution over vocabulary → sampling/generation. Contrast lookup (retrieval) vs. generation. Highlight why prediction works better for open‑ended tasks.

**Depth**  
Language models learn statistical regularities from training data; each token’s context is encoded as a hidden state. The final layer applies a softmax to produce logits \(P(t|context)\). Sampling from this distribution yields the next token, not a hard lookup of a stored answer. This enables fluent, flexible responses and generalization beyond memorized facts. Retrieval systems, by contrast, query an index and return exact matches, which can be brittle or stale.

**Edge Cases**  
- Rare or out‑of‑vocabulary tokens → subword tokenization or fallback to “unknown”.  
- Hallucinations: model may generate plausible but incorrect statements because it optimizes for likelihood, not factuality.  
- Extremely long contexts can exceed transformer limits; solutions include chunking or memory‑augmented models.

**Optimize & Communicate**  
Future work blends retrieval with generation (retrieval‑augmented generation) to reduce hallucination while preserving fluency. When explaining this to interviewers, emphasize the trade‑off: lookup guarantees correctness for known facts but lacks creativity; prediction offers adaptability at the cost of occasional inaccuracies. This balance is why most conversational AIs use pure generative models with optional retrieval modules.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
