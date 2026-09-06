---
qid: ing_b6b9757ed7__think__local
question: 'Explain: Building Golden Test Sets — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 188
output_tokens: 492
total_tokens: 680
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:01:30-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   - *What* is a “golden test set” in this context? (A curated collection of reference outputs for benchmarking.)  
   - *Which* evaluation patterns are relevant to Retrieval‑Augmented Generation (RAG)? (Recall, precision, coverage, hallucination detection, etc.)  
   - Assume the reader knows basic RAG mechanics but not the testing workflow.

**2. Adopt a “pipeline + metrics” mental model**  
   - Map the RAG process: query → retriever → document set → generator → answer.  
   - For each stage, list key quality signals (e.g., retrieval hit rate, relevance of retrieved docs).  
   - Align each signal with an evaluation metric.

**3. Step‑by‑step reasoning**  
   1. Define the *gold standard* answers (human‑written or expert‑validated).  
   2. Generate a diverse set of queries covering edge cases and typical use‑cases.  
   3. For every query, record:  
      - Retrieved documents (content, rank).  
      - Generated answer.  
   4. Compute metrics per pattern:  
      - *Recall* = proportion of gold answer terms found in retrieved docs.  
      - *Precision* = overlap between generated answer and gold answer.  
      - *Coverage* = fraction of relevant docs retrieved.  
      - *Hallucination rate* = proportion of generated facts not supported by any retrieved doc.  
   5. Aggregate results, identify systematic failures, iterate on retriever or generator.

**4. Avoid common traps**  
   - Don’t treat the entire answer as a single token; use span‑based overlap for partial matches.  
   - Ignore document noise: filter out boilerplate before computing recall.  
   - Beware of circular evaluation—using the same model to generate both gold and test answers.

**5. Sanity‑check & verbalize**  
   - Cross‑validate metrics with human judgments on a random sample.  
   - Explain each metric’s intuition (e.g., “Recall tells us whether the retriever saw enough useful info”).  
   - Summarize findings in a concise table, highlighting which patterns most strongly correlate with overall system quality.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
