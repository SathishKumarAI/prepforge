---
qid: ing_5e496c7c60__think__local
question: How do you build a golden evaluation set for RAG without months of labelling?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 778
total_tokens: 973
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T07:13:59-05:00'
sources: []
---

**1️⃣ Clarify the goal and constraints**  
- *Goal*: Create a high‑quality, representative “golden” test set for Retrieval‑Augmented Generation (RAG).  
- *Constraints*: No long‑term manual annotation; limited budget/time; need to evaluate both retrieval quality and generation correctness.  
- **Assumption**: We have access to the RAG model, a large document corpus, and some seed labeled data or domain experts.

**2️⃣ Mental framework**  
Use an *iterative semi‑automatic pipeline*:  
1. **Seed sampling** → small human‑verified set.  
2. **Model self‑labeling + uncertainty filtering** → expand automatically.  
3. **Active learning + crowd/AI labeling** → correct the hardest cases.  
4. **Quality audit & stratification** → ensure coverage of key subdomains.

**3️⃣ Step‑by‑step reasoning**

| Step | Action | Rationale |
|------|--------|-----------|
| 1 | Randomly sample ~200 queries from real traffic or a query log. | Provides diverse coverage without bias. |
| 2 | Run the RAG system; collect top‑k retrieved docs and generated answers. | Baseline data for labeling. |
| 3 | Have a domain expert verify each pair (query + answer) → label “correct/incorrect” plus minimal comment. | Small effort yields high‑confidence seeds. |
| 4 | Train a lightweight classifier on these labels to predict correctness from features: query length, retrieval overlap, confidence scores. | Enables automated filtering of likely correct examples. |
| 5 | Apply the classifier to a larger pool (e.g., 10k queries). Keep only predictions with high certainty (>0.9). | Expands set cheaply while keeping quality. |
| 6 | Use active learning: identify samples where the classifier is uncertain or disagrees with retrieval confidence. Send these to crowd workers for quick “yes/no” labeling. | Focuses human effort on hard cases, reducing cost. |
| 7 | Periodically audit a random subset (5–10%) manually to estimate precision/recall of the automated pipeline. | Detect drift and correct systematic errors. |
| 8 | Stratify final set by key dimensions: query type (fact vs. opinion), retrieval rank (top‑1 vs. lower ranks), domain topics. Ensure each stratum has enough examples (~20–30). | Guarantees representativeness for downstream metrics. |

**4️⃣ Common pitfalls to avoid**

- *Over‑filtering*: Setting the classifier threshold too high may discard useful edge cases.  
- *Bias from seed set*: If seeds come from a narrow domain, the model will inherit that bias. Diversify seeds early.  
- *Crowd worker fatigue*: Provide clear guidelines and examples; keep tasks short (<30 s).  
- *Metric mismatch*: Remember that RAG performance depends on both retrieval accuracy and generation fluency; design labels to capture both aspects.

**5️⃣ Sanity‑check & communication**

1. **Internal sanity**: Compute inter‑annotator agreement on a held‑out subset; if κ < 0.6, revisit guidelines.  
2. **External sanity**: Compare automated precision estimates against a small hand‑labeled gold standard (~50 samples).  
3. **Explain to stakeholders**: “We’ve built an evaluation set by seeding with expert labels, then expanding automatically while keeping human effort focused on uncertain cases. This gives us a high‑confidence, diverse benchmark without months of annotation.”  

Follow this loop continuously; as the RAG model improves, re‑run steps 4–7 to refresh the golden set.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
