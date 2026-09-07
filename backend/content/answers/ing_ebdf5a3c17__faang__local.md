---
qid: ing_ebdf5a3c17__faang__local
question: 'Explain: Golden Set Composition Guidelines — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 535
total_tokens: 767
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:48:57-05:00'
sources: []
---

**Clarify**  
We’re asked to describe *Golden Set Composition Guidelines* for *Rag Evaluation Patterns*—the rules that dictate how a Retrieval‑Augmented Generation (RAG) system should assemble its “golden” reference set of documents used during evaluation. I’ll assume the goal is to create a reproducible, high‑quality benchmark for measuring retrieval accuracy and downstream generation quality.

**Approach**  
1. List core principles (coverage, relevance, diversity).  
2. Explain each principle with concrete criteria.  
3. Summarize how they fit into an evaluation pipeline.  

**Depth**  
| Guideline | What it means | Why it matters |
|-----------|---------------|----------------|
| **Relevance Threshold** | Each document must contain at least *k* tokens that directly answer the query (or be semantically linked). | Prevents noise; ensures the gold set truly supports the answer. |
| **Coverage Span** | For every distinct entity or fact in the ground truth, include one source covering it. | Guarantees all necessary evidence is present, enabling fair retrieval evaluation. |
| **Diversity Constraint** | No two documents should share > 70 % overlapping sentences. | Avoids redundancy that could inflate recall metrics artificially. |
| **Recency & Authority** | Prioritize sources published within the last 2 years and from recognized domains (e.g., .edu, .gov). | Reflects real‑world relevance and reduces stale knowledge bias. |
| **Balanced Length** | Target a total token count of ~ 3–5k per query; individual docs ≤ 1.5k tokens. | Keeps retrieval time reasonable while providing enough context for generation. |

These rules are applied programmatically: an oracle script filters candidate documents, scores them with semantic similarity, then applies the constraints to output the final golden set.

**Edge Cases**  
- *Sparse domains*: when few sources meet relevance or recency, relax thresholds.  
- *Highly technical queries*: allow longer docs (> 1.5k) but flag for manual review.  
- *Ambiguous queries*: duplicate gold sets per intent variant to capture all plausible answers.

**Optimize & Communicate**  
Future improvements could include adaptive thresholding based on query difficulty or leveraging human‑in‑the‑loop validation for edge cases. I’d explain the trade‑off between strictness (higher precision) and inclusivity (better recall), emphasizing that a balanced golden set yields more reliable RAG benchmarking.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
