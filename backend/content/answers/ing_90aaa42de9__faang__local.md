---
qid: ing_90aaa42de9__faang__local
question: 'Explain: LLM-as-Judge for RAG — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 445
total_tokens: 681
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:20:53-05:00'
sources: []
---

**Clarify**  
We’re asked how a *Large Language Model as Judge* (LLM‑as‑Judge) can evaluate Retrieval‑Augmented Generation (RAG) outputs. I’ll assume the judge receives the prompt, the RAG system’s retrieved documents, and its generated answer, then must score or rank that answer against ground truth or against other candidates.

**Approach**  
1. Define evaluation criteria (accuracy, completeness, relevance, hallucination).  
2. Pre‑process: tokenize prompt, retrieval set, and answer; align evidence spans with answer tokens.  
3. Prompt the LLM to act as an impartial judge, feeding it the context plus a structured rubric.  
4. Collect numeric scores or binary verdicts per criterion.  
5. Aggregate for overall performance metrics.

**Depth**  
The LLM is prompted: “You are a reviewer of RAG outputs. For each answer, rate factual correctness (0‑10), completeness (0‑10), relevance to the prompt (0‑10), and hallucination risk (0‑1). Provide brief justification.”  
Using few‑shot examples trains the model to map tokens to scores consistently. The LLM can perform span alignment via attention weights or by requesting evidence sentences, thus mitigating hallucinations. Complexity is O(N) per answer for tokenization; inference cost depends on model size but is linear in output length.

**Edge Cases**  
- Ambiguous prompts where multiple facts are correct → judge must note uncertainty.  
- Retrieval set missing key documents → judge should flag “source insufficiency.”  
- Extremely long answers causing prompt overflow → chunking or summarizing required.

**Optimize & Communicate**  
Fine‑tune the LLM on a curated RAG evaluation dataset to reduce variance. Cache embeddings of retrieval docs for faster alignment. In interviews, I’d explain how this framework scales: replace the LLM with a smaller verifier for production, use RL‑HF to refine scoring consistency, and log counterfactual judgments for human audit.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
