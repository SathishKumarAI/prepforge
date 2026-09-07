---
qid: ing_b6b9757ed7__faang__local
question: 'Explain: Building Golden Test Sets — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 459
total_tokens: 691
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:48:02-05:00'
sources: []
---

**Clarify**  
You’re asking how to create *golden test sets* for evaluating Retrieval‑Augmented Generation (RAG) models—i.e., a benchmark that measures both the retrieval quality and the final generated answer. Key assumptions: we have access to a large document corpus, a ground‑truth QA pair set, and a metric that captures correctness of retrieved context and downstream generation.

**Approach**  
1. **Define evaluation objectives** (retrieval recall vs. answer faithfulness).  
2. **Curate high‑quality query–answer pairs** from real user logs or curated QA datasets.  
3. **Annotate relevant passages** manually to serve as the gold context.  
4. **Split** into train/validation/test while preserving topical distribution.  
5. **Automate scoring**: retrieval metric (e.g., Recall@k, MRR) + generation metric (BLEU/F1 or human‑rated faithfulness).

**Depth**  
- *Retrieval*: Index the corpus with a vector engine; compute recall against the annotated passages.  
- *Generation*: Feed retrieved top‑k passages to the language model and compare its output to the ground truth using ROUGE-L and a neural similarity score (e.g., BERTScore).  
Complexity: Retrieval is O(N log N) for indexing, query time O(k log N); generation is linear in context length. Trade‑offs involve k (more context → better answer but higher latency).

**Edge Cases**  
- Ambiguous queries leading to multiple valid contexts.  
- Passage overlap causing duplicate recall counts.  
- Hallucinations where the model generates correct style but wrong facts—needs human annotation.

**Optimize & Communicate**  
Iterate on *k* and retrieval algorithms (dense vs. sparse) to balance latency vs. accuracy; report a single “RAG‑Score” combining weighted retrieval + generation metrics. Present findings with clear visualizations of recall curves and error typologies, emphasizing how each component contributes to overall system quality. This structured pipeline satisfies FAANG’s emphasis on clarity, depth, and actionable insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
