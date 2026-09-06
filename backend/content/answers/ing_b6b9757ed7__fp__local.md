---
qid: ing_b6b9757ed7__fp__local
question: 'Explain: Building Golden Test Sets — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 573
total_tokens: 742
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:32:35-05:00'
sources: []
---

**Why we need a *golden* set for Retrieval‑Augmented Generation (RAG)**  
The core of RAG is the trade‑off between *retrieval fidelity* (does the model pull the right documents?) and *generation quality* (does it weave those facts into correct, fluent text?). Without a reference that captures both aspects, any metric collapses to either a retrieval score or a language‑model score alone.  
To derive an evaluation protocol we start from the principle of **information bottleneck**: a good RAG system should compress the user query into a latent representation that maximally preserves information about the relevant evidence while discarding irrelevant noise. The golden set is therefore a *ground truth joint distribution* \(P(Q, E^*, G^*)\) where \(Q\) is the query, \(E^*\) the truly pertinent documents, and \(G^*\) the ideal answer that uses only those documents.

**Constructing the set**

1. **Query–Evidence Alignment**  
   - For each query, manually annotate a minimal subset of documents whose union contains every fact required for a correct answer.  
   - Ensure *coverage* (no missing facts) and *non‑redundancy* (remove superfluous docs).  

2. **Answer Annotation**  
   - Write an answer that cites only the annotated evidence, explicitly marking each cited sentence or clause.  
   - Verify factual consistency against the evidence using a logic checker or a secondary annotator.

3. **Negative Sampling**  
   - For every query, sample “irrelevant” documents from the corpus (e.g., via BM25 score tails).  
   - These serve to penalise hallucinations and reward selective retrieval.

4. **Metric Design**  
   - *Retrieval Precision* = |retrieved ∩ \(E^*\)| / |retrieved|.  
   - *Generation Fidelity* = overlap of factual statements in generated answer with those in \(G^*\) (e.g., F1 over fact triples).  
   - Combine via a weighted harmonic mean, reflecting the information‑bottleneck trade‑off.

**Non‑obvious insight**  
A golden set that only penalises *missing* evidence will perversely reward models that hallucinate plausible but ungrounded facts. By explicitly annotating *negative* documents and incorporating them into the metric, we enforce a true retrieval‑generation coupling: the model must retrieve exactly the right context to generate the correct answer, mirroring the information bottleneck’s optimality condition. This dual‑annotation strategy is rarely used but yields far more reliable RAG evaluation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
