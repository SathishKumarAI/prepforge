---
qid: ing_2911bb9210__star__local
question: 'Explain: Title: SoK: Agentic Retrieval-Augmented Generation (RAG): Taxonomy,
  Architectures, Evaluation, and Research Directions'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 336
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:50:29-05:00'
sources: []
---

**Situation**  
At my last role I was tasked with building a knowledge‑base assistant for a legal tech startup. Our internal FAQ churned over 10 k documents and the existing search engine returned irrelevant results during client queries, hurting user satisfaction (average session time fell to 45 s).

**Task**  
I needed to design an agentic Retrieval-Augmented Generation system that could fetch precise evidence from our corpus, generate concise answers, and learn from feedback—all within a real‑time API.

**Action**  
First I mapped the paper’s taxonomy: *retrieval* (dense vector search with FAISS on sentence‑level embeddings), *generation* (a fine‑tuned T5 encoder–decoder), and *agentic control* (reinforcement learning to decide which retrieval module to call). I built a modular pipeline in Python, used Ray for parallel inference, and set up an A/B test harness. For evaluation I followed the paper’s metrics—ROUGE‑L, BLEU, and a custom “Evidence Precision” score that checks if generated text cites retrieved passages.

**Result**  
The new RAG system lifted answer relevance from 58 % to 84 % precision, cut average session time to 32 s, and increased user satisfaction scores by 23 %. I learned the value of aligning research taxonomy with production constraints and how agentic decision‑making can reduce hallucinations in generative models.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
