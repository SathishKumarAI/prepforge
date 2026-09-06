---
qid: ing_f3e169013a__think__local
question: 'Explain: What Changed Architecturally — Llamaindex'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 404
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T17:05:35-05:00'
sources: []
---

**1️⃣ Clarify the ask & set assumptions**  
   * Identify that “LlamaIndex” refers to the open‑source library formerly known as GPT‑Vector, which provides a data‑access layer for LLMs.  
   * Assume the reader knows basic LLM concepts but not this specific tool’s evolution.  

**2️⃣ Adopt an architectural‑lens framework**  
   * Use a “Before vs After” comparison: data ingestion → storage → query interface → integration.  
   * Map each change to one of three pillars: **modularity**, **performance**, and **extensibility**.  

**3️⃣ Step‑by‑step reasoning**  
   1. **Ingestion** – originally a monolithic parser; now split into pluggable “data loaders” (CSV, PDF, web).  
   2. **Storage** – switched from simple in‑memory lists to vector databases (FAISS, Pinecone) with optional persistence layers.  
   3. **Indexing** – added hierarchical chunking and customizable embeddings per node type.  
   4. **Query API** – moved from a single `query()` method to a chainable “PromptTemplate” + “Retriever” pattern.  
   5. **Extensibility** – introduced a plugin system for custom LLM providers, vector stores, and storage adapters.  

**4️⃣ Avoid common traps**  
   * Don’t conflate the library’s name change with a complete rewrite; focus on architectural shifts.  
   * Skip low‑level implementation details (e.g., specific code snippets) unless asked.  

**5️⃣ Sanity‑check & verbalize**  
   * Re‑explain each pillar in one sentence to ensure coherence.  
   * Verify that the narrative covers both “what” and “why” behind the changes, not just “how”.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
