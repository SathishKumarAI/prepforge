---
qid: ing_6fbc0388a3__fp__local
question: The pilot RAG system is giving wrong answers on the customer's contracts.
  You're on-site tomorrow. How do you debug it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 184
output_tokens: 486
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:01:39-05:00'
sources: []
---

**Diagnosing a faulty Retrieval‑Augmented Generation (RAG) pipeline**

1. **Define the failure mode:**  
   *Wrong answers* mean the model’s output diverges from ground truth. Start by isolating whether the error originates in retrieval, generation, or post‑processing.

2. **Reproduce locally with controlled data**  
   • Pull a handful of contracts that failed.  
   • Feed them through the same vector store query and log the top‑k documents returned.  
   • If those docs are irrelevant, the problem is the *retrieval index* (vectorization, tokenisation, or similarity metric).  
   • If relevant docs are fetched but the answer is still wrong, the issue lies in *generation*—perhaps the prompt template misleads the model.

3. **Inspect embeddings & relevance scores**  
   • Visualise embeddings with t‑SNE to spot cluster drift.  
   • Verify that the similarity function (cosine, dot product) aligns with the embedding space’s geometry.  
   • Check for stale or corrupted vectors (e.g., if a new contract was added but not re‑indexed).

4. **Probe the language model**  
   • Run few‑shot examples with identical prompts to see if hallucinations occur.  
   • Enable *explainability* tokens (`[Explain]`) to surface why the model chose a particular answer.

5. **Validate prompt engineering**  
   • Ensure the prompt forces the model to *cite* retrieved passages.  
   • Add a “source check” step: compare the model’s cited snippets against the actual contract text.

6. **Automation & monitoring**  
   • Build a unit test that asserts retrieval relevance before generation.  
   • Deploy a lightweight monitor that flags low‑confidence outputs for manual review.

> **Non‑obvious insight:** In RAG, *retrieval quality is often the bottleneck, yet people focus on tuning the LLM alone.* A small misalignment in the embedding space (e.g., using outdated tokenizers) can silently degrade relevance, causing the model to hallucinate. Regularly re‑embedding and validating similarity distributions keeps the system grounded in the real data geometry.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
