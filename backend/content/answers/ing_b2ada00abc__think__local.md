---
qid: ing_b2ada00abc__think__local
question: 'Explain: 3.3 Full-Text Evaluation Design — Graph-Aware Late Chunking for
  Retrieval-AugmentedGeneration in Biomedical Literature'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 205
output_tokens: 646
total_tokens: 851
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:47:29-05:00'
sources: []
---

**1️⃣ Clarify the problem & key assumptions**

* We’re dealing with *retrieval‑augmented generation (RAG)* on biomedical literature, where a language model generates answers conditioned on retrieved passages.
* “Full‑text evaluation” means we evaluate over entire documents (not just abstracts).
* The term **Graph‑Aware Late Chunking** suggests we’ll split long documents into chunks *after* constructing a graph of their structure, and that the graph informs chunk boundaries.

Assume:  
- Documents are highly structured (sections, tables, figures).  
- We have a knowledge graph or dependency graph linking entities across sections.  
- The RAG system can only handle a limited context length per request.

**2️⃣ Mental model / framework**

1. **Graph construction** → capture semantic/structural links between tokens/phrases.  
2. **Chunking strategy** → decide where to split so that each chunk is coherent and contains related graph nodes.  
3. **Late vs early** → we wait until after the graph is built (late) rather than chopping arbitrarily.  
4. **Evaluation pipeline** → retrieve chunks, feed them into the generator, compare generated answers against gold references.

Use a *graph‑aware* approach: chunk boundaries align with subgraphs that preserve context for downstream generation.

**3️⃣ Step‑by‑step reasoning**

1. Parse the full text and build an NLP graph (e.g., dependency or entity co‑occurrence).  
2. Identify *sub‑graphs* corresponding to logical units (sections, subsections).  
3. For each sub‑graph, compute its size in tokens; if it exceeds the model’s max context, recursively split at node boundaries that minimize edge cuts.  
4. Store each chunk with metadata linking back to its graph nodes.  
5. During retrieval, query the graph to find chunks most relevant to a question (e.g., via subgraph similarity).  
6. Feed retrieved chunks into the generator *late*—after the model has produced an answer—to allow re‑ranking or fusion.  
7. Evaluate across full documents: compare generated answers against gold answers using ROUGE/F1, ensuring that every chunk was considered.

**4️⃣ Common traps to avoid**

- **Early chunking** (splitting before graph construction) loses semantic coherence → bad retrieval.  
- Ignoring *cross‑chunk* dependencies; biomedical facts often span sections.  
- Over‑fragmentation: too many tiny chunks hurt the generator’s fluency.  
- Forgetting to align evaluation metrics with full‑text coverage.

**5️⃣ Sanity‑check & communicate**

- Verify that each chunk contains at least one complete sentence or paragraph.  
- Ensure graph cuts respect section boundaries (e.g., don’t split a figure caption across chunks).  
- Run a pilot: retrieve from the full text and confirm that relevant sections are indeed returned.  
- When explaining, highlight how late chunking preserves context while respecting model limits, and how the graph guides coherent splits—key to robust RAG in biomedical literature.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
