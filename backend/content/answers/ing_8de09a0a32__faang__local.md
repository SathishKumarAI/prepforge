---
qid: ing_8de09a0a32__faang__local
question: 'Explain: Triad Failure Modes — Rag Evaluation Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 466
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:13:59-05:00'
sources: []
---

**Clarify**  
You’re asking about the *Triad Failure Modes* that arise when evaluating Retrieval‑Augmented Generation (RAG) systems—specifically, how retrieval quality, generation fidelity, and overall system coherence can fail in tandem.

**Approach**  
1. Define each axis of the triad.  
2. Illustrate how errors on one axis propagate to the others.  
3. Summarize common failure patterns with concrete examples.  

**Depth**  
| Axis | Typical Failure | Propagation |
|------|-----------------|-------------|
| **Retrieval** | Low relevance or hallucinated passages (e.g., retrieving a stale FAQ for a new policy). | The generator receives misleading context, leading to *content drift*. |
| **Generation** | Model mis‑interprets retrieved text (semantic drift) or over‑generates (“hallucinations”). | Even high‑quality retrieval is wasted; the answer may contain contradictions. |
| **System Coherence** | Poor prompt design or weighting between retrieved and internal knowledge. | The final output can be incoherent, mixing unrelated facts. |

*Triad Pattern*: A weak retriever yields noisy context → generator mis‑aligns → overall response becomes unreliable.  
Another pattern: Strong retriever but poorly tuned *retrieval‑generation fusion* causes the model to ignore retrieved facts and revert to its prior knowledge (over‑reliance on internal embeddings).

**Edge Cases**  
- Retrieval of highly contradictory sources.  
- Generation of policy‑sensitive content that violates compliance.  
- Prompt leakage where user intent is mis‑classified.

**Optimize & Communicate**  
1. **Metric Fusion**: Combine retrieval relevance scores with generation confidence (e.g., nucleus sampling temperature).  
2. **Dynamic Weighting**: Adjust the influence of retrieved text based on its certainty.  
3. **Human‑in‑the‑loop Validation**: Flag low‑confidence outputs for review.

Explain this flow to interviewers by mapping each failure back to a concrete system component, showing you can diagnose and mitigate complex interdependencies in RAG pipelines.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
