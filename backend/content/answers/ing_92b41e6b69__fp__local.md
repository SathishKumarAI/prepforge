---
qid: ing_92b41e6b69__fp__local
question: What is RAG, and what problem does it actually solve?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 322
total_tokens: 494
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:17:22-05:00'
sources: []
---

**Retrieval‑augmented generation (RAG)** is a hybrid architecture that marries a *retriever*—a system that fetches relevant documents from a large corpus—with a *generator*, usually a language model (LM).  
The fundamental problem it tackles is **knowledge drift and hallucination**: an LM trained on a fixed dataset can produce plausible but factually incorrect statements because its internal parameters encode only the distribution of training data, not up‑to‑date facts. By conditioning the generation step on externally retrieved passages, RAG injects *grounded evidence* into the LM’s context.  

Why this works:  
1. **Information bottleneck** – The retriever compresses an enormous knowledge base into a few salient snippets, providing a concise “information source” that satisfies the LM’s input length constraints.  
2. **Conditional entropy reduction** – The generator’s output distribution is conditioned on both the user query and the retrieved evidence, reducing uncertainty (entropy) about factual content.  
3. **Modularity & scalability** – Updating knowledge only requires re‑indexing the corpus; the generator stays fixed, preserving learned language skills.

A subtle insight many miss: RAG *does not* merely avoid hallucinations; it also transforms the LM into an **information retrieval engine** that can be tuned to prioritize different evidence qualities (recency, relevance, source credibility). This dual role turns a static model into a dynamic, continuously learning system.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
