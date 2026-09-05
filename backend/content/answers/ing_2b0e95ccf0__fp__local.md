---
qid: ing_2b0e95ccf0__fp__local
question: What are the top failure modes of production RAG systems?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 545
total_tokens: 716
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:36:19-05:00'
sources: []
---

**Why RAG can break in the wild**

A retrieval‑augmented system solves a *dual optimization* problem:  
1. **Information retrieval** – find the most relevant documents under a query distribution;  
2. **Generation** – synthesize an answer that is faithful to those retrieved facts.

In production these two objectives are often trained separately and then stitched together, which introduces a mismatch between their loss landscapes. The failure modes below arise from this mismatch and from the statistical properties of real‑world data.

| Failure mode | First‑principle cause | Typical symptom |
|--------------|-----------------------|-----------------|
| **Retrieval drift** | Retrieval is optimized for *retrievability* (e.g., BM25) rather than *usefulness* to the generator. When user queries diverge from training distribution, relevance scores misalign with what the language model expects. | The generator repeats irrelevant facts or hallucinations. |
| **Over‑reliance on context** | Generation loss is weighted heavily toward matching reference answers; it learns to “copy” top‑retrieved passages instead of composing new content. | Answers become brittle: small changes in retrieval yield large semantic shifts. |
| **Context length bottleneck** | Transformers have a hard limit on tokens; important evidence may be truncated or omitted. The generator then fills gaps with high‑probability but incorrect language. | Missing key facts, subtle hallucinations. |
| **Cold‑start / domain shift** | Retrieval index is static; new terminology or entities are absent. The system still generates plausible but wrong content because the generator has never seen those tokens. | “Correct” sounding answers that contain invented names. |
| **Propagation of retrieval noise** | Noisy documents (spam, low‑quality sources) pollute the context set; the model learns to treat them as evidence. | Consistent factual errors across multiple queries. |

### One non‑obvious insight

*The generator’s confidence is a poor indicator of factual correctness.* Because it has been trained to predict the next token conditioned on the retrieved context, its probability mass concentrates around the most likely surface forms, not around verifiable truth. Thus, high‑confidence outputs can still be wrong—especially when the retrieval supplies misleading or ambiguous evidence. Monitoring **retrieval–generation alignment** (e.g., KL divergence between retrieved distribution and generated tokens) is more reliable than raw confidence scores for detecting hallucinations in production RAG systems.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
