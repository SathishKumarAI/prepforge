---
qid: ing_3d658a7bc0__faang__local
question: 'Explain: Best Practices for LLM-as-Judge — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 510
total_tokens: 746
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:06:40-05:00'
sources: []
---

**Clarify**

You’re asked to outline how a large language model (LLM) can act as an adjudicator in Retrieval‑Augmented Generation (RAG) evaluation—i.e., judging whether the retrieved evidence supports the generated answer.  
Assumptions:  
* The LLM has a prompt that receives *question*, *generated answer*, and *retrieved snippets*.  
* Ground truth labels (true/false, relevance score) are available for training/evaluation.  
* Evaluation is automated, not human‑in‑the‑loop.

**Approach**

1. **Prompt Design** – frame the task as a “fact‑checking” question with explicit instructions to weigh evidence against claim.  
2. **Evidence Segmentation** – tokenize retrieved snippets; feed each snippet separately and aggregate verdicts (e.g., majority vote).  
3. **Fine‑tuning / Retrieval‑augmented fine‑tuning (RAFT)** – train the LLM on labeled fact‑checking pairs to calibrate confidence thresholds.  
4. **Metric Collection** – compute precision/recall, F1, and calibration curves per evidence type.

**Depth**

- *Prompt*: “Given the claim … evaluate each excerpt… Return ‘Supported’, ‘Contradicted’, or ‘Uncertain’ with a confidence score.”  
- *Aggregation*: weighted average of snippet confidences; threshold 0.7 → final verdict.  
- *Complexity*: O(n · L) where n = #snippets, L = token length per snippet—linear in evidence size.  
- *Trade‑offs*: More snippets increase coverage but raise inference cost and potential noise.

**Edge Cases**

- Empty or non‑informative snippets → label as “Uncertain.”  
- Contradictory snippets → default to “Contradicted” if any snippet has high confidence.  
- Ambiguous claims → flag for human review.

**Optimize & Communicate**

1. **Caching** – reuse embeddings for identical snippets across queries.  
2. **Parallelism** – batch prompt calls to the LLM service.  
3. **Explainability** – output rationale snippets for transparency.  

Narrate your solution by walking through a concrete example, highlighting how each component mitigates noise and improves reliability, thereby demonstrating structured reasoning and depth expected in a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
