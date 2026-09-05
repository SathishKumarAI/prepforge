---
qid: ing_910c40c6df__star__local
question: 'Explain: Dimension 3: Answer Relevance — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 452
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:22:55-05:00'
sources: []
---

**Situation**  
In a fintech startup I was leading the migration of our customer support chatbot from rule‑based to a Retrieval‑Augmented Generation (RAG) system. Our internal knowledge base had 12 k documents and we needed to ensure that the model answered queries with highly relevant context, otherwise users would get generic or misleading answers.

**Task**  
Design and implement an evaluation framework that could measure “Answer Relevance” for the RAG pipeline—specifically how often the retrieved passages matched what a human expert considered useful for a given question. The goal was to hit at least 85 % relevance before launch, while keeping latency under 1 s.

**Action**  
I set up a dual‑retrieval strategy: BM25 on raw text and FAISS with dense embeddings (sentence‑transformer) for semantic recall. For evaluation I built an annotation set of 2,000 real support tickets, had three domain experts label the top‑3 retrieved passages per query as “Relevant”, “Partially Relevant” or “Irrelevant”. Using these labels I computed Precision@k, Recall@k and a custom F1‑relevance score. I also introduced a feedback loop: every 500 production queries were sampled, human reviewers rated relevance, and the scores fed back into a reinforcement signal that nudged the retriever weights. To keep latency low I capped the dense retrieval to 5 vectors per query and used approximate nearest neighbor search.

**Result**  
After two iterative cycles the RAG system achieved an overall F1‑relevance of 88 % (Precision@3 = 92 %, Recall@3 = 84 %) while maintaining a mean latency of 0.78 s. User satisfaction scores rose from 72 % to 86 % on post‑interaction surveys. I learned that combining lexical and semantic retrieval, coupled with continuous human‑in‑the‑loop evaluation, is key to reliably measuring and improving answer relevance in RAG deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
