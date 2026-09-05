---
qid: ing_1b936ed97f__fp__local
question: 'Explain: Q: Describe three RAG patterns and when to use each.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 174
output_tokens: 485
total_tokens: 659
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:04:41-05:00'
sources: []
---

**Retrieval‑Augmented Generation (RAG)** blends a language model with an external knowledge base so that the model can answer queries that exceed its training data or require up‑to‑date facts.  
Below are three canonical patterns, each chosen by how *information flows* through the pipeline.

| Pattern | Flow | When to use |
|---------|------|-------------|
| **Pre‑retrieval (prompt‑based)** | Query → Retrieval module → Context snippet(s) → Prompt concatenation → LLM | Use when you want a single, deterministic answer and can afford a cheap, static context. It’s fast because the retrieval happens once per query; ideal for FAQ bots or knowledge‑base lookup where the answer is short. |
| **Post‑retrieval (inference‑time augmentation)** | Query → Prompt → LLM generates draft → Retrieval module queries draft text → Model re‑generates with new context | Best when the model’s internal reasoning needs to be guided by fresh evidence, e.g., legal or medical advice where domain knowledge is critical. The model can “ask for help” after an initial pass, reducing hallucination risk. |
| **Iterative (multi‑round)** | Query → Prompt → LLM → Retrieval → Refine prompt with retrieved docs → Loop until convergence | Use when the answer requires multi‑step reasoning or synthesis of many sources—think scientific literature summarization. The iterative loop lets the model progressively tighten its focus, mimicking human research cycles. |

**Deep insight:**  
All three patterns embody *information bottleneck* theory: they trade off *compression* (how much retrieved text you feed) against *mutual information* (the relevance of that text to the query). The optimal pattern is determined not by computational cost alone but by how tightly the answer depends on external knowledge. If the LLM’s internal representation already captures most of the needed signal, pre‑retrieval suffices; if the answer hinges on rare facts, post‑retrieval or iterative patterns are necessary. This perspective unifies seemingly disparate designs under a single optimization principle.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
