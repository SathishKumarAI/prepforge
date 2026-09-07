---
qid: ing_61875954fb__faang__local
question: 'Explain: RAGAS Metrics — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 522
total_tokens: 754
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:30:45-05:00'
sources: []
---

**RAGAS (Retrieval‑Augmented Generation Assessment Suite)**  
*Evaluating the quality of LLMs that rely on external knowledge sources.*

---

### 1️⃣ Clarify
We want a metric suite that measures **(a) how well an LLM retrieves relevant facts from a corpus, and (b) how accurately it generates answers using those facts**.  
Assumptions to confirm:  
- The system uses a retrieval module (e.g., BM25, dense vectors).  
- Ground‑truth answers are available for evaluation.  

### 2️⃣ Approach
1. **Retrieve‑Quality Sub‑metrics** – evaluate relevance of fetched passages.  
2. **Generation‑Quality Sub‑metrics** – assess factual correctness and coherence of the final answer.  
3. Aggregate into a single RAGAS score.

### 3️⃣ Depth (Technical Detail)
| Component | Metric | Computation |
|-----------|--------|-------------|
| Retrieval | *Recall@k* | Fraction of relevant documents in top‑k results. |
| Retrieval | *RPrecision* | Precision at the rank where recall = precision. |
| Generation | *BLEURT / BERTScore* | Semantic similarity between generated and reference answer. |
| Generation | *Fact‑Checking Accuracy (F1)* | Compare extracted facts from generation vs. gold facts. |
| Overall | *RAGAS Score* | Weighted harmonic mean of the above, tuned to task importance. |

**Complexity:** Retrieval is \(O(N \log N)\) with inverted index; generation metrics are linear in answer length.  
Trade‑offs: higher recall may dilute precision; semantic scores mitigate surface‑form bias.

### 4️⃣ Edge Cases
- **No relevant docs retrieved** → Recall = 0, penalizes system heavily.  
- **Hallucinations** (generated facts not present) → Fact‑checking F1 drops sharply.  
- **Long answers** may inflate BLEURT; length‑normalization required.

### 5️⃣ Optimize & Communicate
- **Dynamic weighting**: adjust importance of recall vs. generation per domain.  
- **Explainability**: expose individual sub‑scores to pinpoint failure modes (retrieval vs. reasoning).  
- **Narration**: “RAGAS gives us a single, interpretable score that balances retrieval fidelity and answer quality, letting us iterate on both components in tandem.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
