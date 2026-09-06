---
qid: ing_8dab36dcc2__fp__local
question: 'Explain: Key Features — Ragas'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 167
output_tokens: 489
total_tokens: 656
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:06:09-05:00'
sources: []
---

## RAGAS: What It Is and Why It Must Be Structured This Way  

At its core, a Retrieval‑Augmented Generation (RAG) system answers queries by **combining** an external knowledge base with a language model. The evaluation problem is that *accuracy* alone can be misleading: a model may fabricate facts if it over‑trusts the generator or ignore useful evidence if it under‑uses retrieval. RAGAS formalises this trade‑off by **decomposing performance into three orthogonal dimensions**:

| Dimension | What it measures | Why it matters |
|-----------|------------------|----------------|
| **Relevance** | Are retrieved passages actually useful for the target answer? | Retrieval quality directly limits what the generator can learn. |
| **Robustness** | Does the model still produce correct answers when retrieval is noisy or incomplete? | Real‑world knowledge bases are imperfect; robustness ensures reliability. |
| **Hallucination Control** | How often does the generator inject unsupported claims? | Prevents misinformation, especially critical in high‑stakes domains. |

RAGAS derives these metrics from first principles of *information flow*: each answer is a function \(f(q, R)\) where \(q\) is the query and \(R\) the retrieved set. By marginalising over all possible \(R\), we obtain an expected evidence score; by comparing this to the generated text’s factuality, we isolate hallucinations.

### Non‑obvious Insight  
Many practitioners equate higher retrieval recall with better overall performance. RAGAS shows the *law of diminishing returns*: after a certain recall threshold, additional passages rarely improve relevance but **increase hallucination risk** because the generator must sift through more noise. Thus, an optimal retrieval strategy balances recall and precision rather than maximizing recall alone.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
