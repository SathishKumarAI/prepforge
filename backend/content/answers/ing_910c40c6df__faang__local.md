---
qid: ing_910c40c6df__faang__local
question: 'Explain: Dimension 3: Answer Relevance — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 482
total_tokens: 717
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:21:36-05:00'
sources: []
---

**Clarify**  
We’re asked about *Dimension 3: Answer Relevance* in Retrieval‑Augmented Generation (RAG) evaluation. The goal is to judge how well the generated answer aligns with the query and the retrieved evidence. I’ll assume we’re evaluating a standard RAG pipeline that first retrieves documents, then feeds them into a language model.

**Approach**  
1. Define relevance metrics (semantic overlap, factual correctness).  
2. Explain typical evaluation patterns: *exact match*, *cosine similarity* over embeddings, and *human‑in‑the‑loop* scoring.  
3. Discuss how these patterns capture different aspects of relevance.

**Depth**  

| Pattern | What it measures | Implementation |
|---------|------------------|----------------|
| **Exact Match (EM)** | Whether the answer contains the exact phrase or key terms from the query/evidence | Token‑level Jaccard or n‑gram overlap. |
| **Semantic Similarity** | Latent meaning alignment between answer and evidence | Encode both with a transformer, compute cosine similarity; threshold to label relevant. |
| **Fact Verification (FV)** | Does the answer correctly state facts present in evidence? | Use a fact‑checking model that scores each sentence against retrieved passages. |
| **Human Scoring** | Overall relevance, nuance, and usefulness | Likert scale by annotators, often combined with automated metrics via regression. |

Complexity: EM is O(n) token comparisons; semantic similarity is O(d) per embedding pair (d≈768). FV requires additional inference but yields higher fidelity.

**Edge Cases**  
- *Ambiguous queries*: multiple valid answers → low EM but high semantic similarity.  
- *Noisy retrieval*: irrelevant passages may inflate similarity scores.  
- *Hallucinations*: model generates plausible but unsupported facts; FV will flag these.

**Optimize & Communicate**  
A hybrid metric—weighted sum of EM, cosine similarity, and FV—balances precision with robustness. Explain to interviewers: “We first filter candidates via EM for speed, then apply semantic similarity for nuance, and finally a fact‑checking step to guard against hallucinations.” This showcases structured thinking, depth in evaluation design, and clear communication.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
