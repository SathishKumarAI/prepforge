---
qid: ing_910c40c6df__fp__local
question: 'Explain: Dimension 3: Answer Relevance — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 524
total_tokens: 696
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:13:38-05:00'
sources: []
---

### Why “Answer Relevance” is a *dimension* in RAG

When a language model (LM) is **augmented with retrieved documents**, its output can be judged by two independent factors:

1. **Language quality** – how fluent and coherent the text is.
2. **Answer relevance** – how faithfully the answer uses the evidence.

The second factor cannot be inferred from language alone; an LM may generate a plausible‑looking paragraph that ignores or misrepresents the source. Therefore we separate it as its own *dimension* in evaluation.

---

### How to measure relevance: RAG‑evaluation patterns

1. **Exact‑match pattern**  
   - The answer must contain *exact* phrases from the retrieved passage(s).  
   - Captures literal recall; useful for fact‑checking tasks where precision is paramount.

2. **Paraphrase‑overlap pattern**  
   - Uses semantic similarity (e.g., cosine of contextual embeddings) to detect paraphrased content.  
   - Allows flexibility while still requiring that the core meaning be present.

3. **Contextual dependency pattern**  
   - Checks whether the answer logically follows from *all* relevant retrieved snippets, not just a subset.  
   - Penalizes cherry‑picking and promotes holistic use of evidence.

4. **Contradiction detection pattern**  
   - Employs entailment classifiers to flag statements that contradict any source text.  
   - Crucial for safety: the LM should never assert what the evidence refutes.

5. **Coverage‑balance pattern**  
   - Measures how many distinct facts from the retrieval set appear in the answer, weighted by importance (e.g., key entities).  
   - Encourages comprehensive answers rather than superficial summaries.

---

### Non‑obvious insight

The *coverage‑balance* pattern reveals that an LM can **over‑generalize**: it may mention a concept that appears in one source but omit other critical details from another. By weighting coverage with entity importance, we discourage generic “I think this is true” answers and instead reward answers that integrate multiple evidence strands—mirroring how humans synthesize information.

---

In short, the **Answer Relevance dimension** decomposes into concrete patterns that enforce literal recall, semantic fidelity, holistic reasoning, contradiction avoidance, and balanced coverage—each grounded in principles of retrieval, inference, and information theory.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
