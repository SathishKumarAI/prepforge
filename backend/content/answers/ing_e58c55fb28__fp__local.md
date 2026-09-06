---
qid: ing_e58c55fb28__fp__local
question: 'Q: You deployed a RAG system and users report that answers are sometimes
  wrong. How do you systematically diagnose and fix the problem?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 186
output_tokens: 629
total_tokens: 815
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:06:50-05:00'
sources: []
---

### Step‑by‑step diagnosis of a faulty Retrieval‑Augmented Generation (RAG) pipeline

| **What** | **Why it matters** | **How to test** |
|----------|--------------------|-----------------|
| 1. **Vector index quality** | The system’s first gate is the retrieval step; if vectors are noisy, the top‑k docs will be irrelevant. | Query a handful of known “good” questions and inspect their nearest neighbours. Use cosine‑distance plots to see cluster tightness. |
| 2. **Embedding model fidelity** | Different embedding families encode semantics differently (semantic vs. lexical). A mismatch between training data style and query style can hurt recall. | Compute similarity on a held‑out benchmark (e.g., MS MARCO) with the same embeddings you use in production. If performance dips, swap or fine‑tune an encoder. |
| 3. **Index hyperparameters** | Parameters such as `nprobe` or `efSearch` trade off speed vs. recall. A low `nprobe` can miss relevant vectors. | Sweep `nprobe` while measuring retrieval latency and a recall@k metric on a validation set. |
| 4. **Document preprocessing** | Tokenization, stop‑word removal, or chunking affect the vector representation. | Re‑run embeddings with different preprocessing pipelines; compare pairwise cosine similarities to see if clusters shift. |
| 5. **Generation conditioning** | The language model may over‑rely on the prompt template and under‑use the retrieved context. | Ablate the context: feed the same prompt without docs, then with a single “gold” doc, then with all retrieved docs. Measure factual accuracy via automated fact‑checking or human annotation. |
| 6. **Prompt design** | Inadequate instructions can lead the model to hallucinate or ignore evidence. | Experiment with prompting styles (e.g., “Use only the following excerpts: …”) and measure hallucination rates using a tool like `hallucinations` from OpenAI’s evals. |

### Systematic fix cycle

1. **Baseline** – run all six checks on a representative sample; log metrics.
2. **Prioritize** – rank issues by impact (e.g., low recall vs. hallucination).
3. **Iterate** – adjust one component at a time, re‑measure the full pipeline to isolate effects.
4. **Automate regression tests** – embed the baseline checks into CI; any drop triggers an alert.

### Non‑obvious insight

> *The “retrieval” and “generation” stages are not independent: the embedding model’s domain bias can propagate a systematic error that a prompt tweak alone cannot fix.*  
By aligning the embedding training data with the target domain (e.g., fine‑tuning on user queries), you reduce semantic drift early, which in turn simplifies downstream generation tuning. This joint alignment is often overlooked but yields the biggest lift in factual correctness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
