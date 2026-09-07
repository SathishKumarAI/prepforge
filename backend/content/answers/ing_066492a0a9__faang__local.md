---
qid: ing_066492a0a9__faang__local
question: 'Explain: RAGAS vs. Ground-Truth Metrics — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 508
total_tokens: 745
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:59:22-05:00'
sources: []
---

**Clarify**  
The interviewer asks you to compare *RAG‑based evaluation* with *ground‑truth metrics* for assessing a Retrieval‑Augmented Generation (RAG) system. I’d confirm:  

- Are we evaluating overall QA quality or specific aspects (accuracy, coverage)?  
- Do we have labeled gold answers for every query?  
- What is the target use case—search, dialogue, summarisation?

**Approach**  
1. Define both evaluation families.  
2. Map their strengths/weaknesses to typical RAG scenarios.  
3. Highlight when one dominates over the other.  

**Depth**  
| Aspect | Ground‑Truth Metrics | RAG‑Based Evaluation |
|--------|---------------------|----------------------|
| **Definition** | Exact match, BLEU, ROUGE, F1 against human‑annotated answers. | Human judgments of relevance/utility on retrieved passages + generated text; or automated proxy scores (e.g., embedding similarity). |
| **Data Need** | Requires a gold answer corpus for each query. | No gold answer needed; can work with unlabelled queries. |
| **Coverage** | Measures how often the model hits the correct answer; limited by annotation quality. | Captures retrieval coverage, hallucination risk, and contextual appropriateness. |
| **Scalability** | Expensive to annotate at scale; static once collected. | Can be auto‑generated (e.g., passage‑level relevance classifiers) for large corpora. |
| **Interpretability** | Clear numeric score per answer. | More qualitative; may need human panels or multi‑dimensional metrics. |

**Edge Cases**  
- *Sparse gold data*: ground‑truth fails, RAG eval shines.  
- *Highly subjective answers*: both struggle; human‑in‑the‑loop needed.  
- *Adversarial queries*: RAG eval can expose hallucinations that exact match hides.

**Optimize & Communicate**  
Explain that a hybrid pipeline—start with automated RAG scores for quick iteration, then validate critical cases with ground‑truth metrics—balances speed and rigor. Highlight trade‑offs: higher annotation cost vs. richer insight into retrieval dynamics. End by noting that in production, continuous monitoring often relies on RAG‑style relevance checks, while quarterly releases can use full ground‑truth audits.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
