---
qid: ing_40ac9f006c__fp__local
question: 'Explain: Chart Types and Extraction Approaches — Multimodal Rag'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 634
total_tokens: 806
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T18:22:10-05:00'
sources: []
---

**Why we need “chart‑aware” RAG**

When a user asks a question that refers to a graph or table, the system must *recognise* what information is encoded and *translate* it into tokens the language model can consume.  
The fundamental problem is **information alignment**: the visual modality stores data in spatial coordinates; the textual modality expects linear, syntactic tokens. To keep retrieval fidelity we must map a *distribution over chart elements* to an *ordered sequence of embeddings* that preserves relative semantics.

---

### 1. Chart types

| Type | Visual structure | Typical encoding target |
|------|------------------|------------------------|
| **Bar/Column** | Discrete rectangles aligned on one axis | Ordered list of (category, value) pairs |
| **Line / Scatter** | Continuous curves or points plotted in a plane | Sequence of (x, y) tuples sorted by x |
| **Pie / Donut** | Angular sectors around a centre | List of (label, proportion) pairs |
| **Heatmap / Choropleth** | Gridded intensity values | Flattened matrix or raster embedding |

Each type imposes a *topology* on the data: bars impose a one‑to‑many mapping from category to value; line charts impose an ordering constraint along the independent axis.

---

### 2. Extraction approaches

1. **Symbolic OCR + layout parsing**  
   - Detect shapes, colors, legends → extract discrete tokens.  
   - *Why*: preserves exact numeric values and categorical labels.  
   - *Non‑obvious insight*: legend matching can be framed as a bipartite graph matching problem that optimises label–color consistency.

2. **Visual transformer embeddings**  
   - Feed the whole image into a ViT; let attention learn the mapping implicitly.  
   - *Why*: avoids hand‑crafted heuristics, scales to arbitrary chart designs.  
   - *Non‑obvious insight*: self‑attention can discover latent “semantic axes” (e.g., time vs. magnitude) without supervision.

3. **Hybrid tokenization**  
   - Combine OCR outputs as anchor tokens and fill gaps with ViT features.  
   - Optimises a joint loss that balances exact numeric fidelity against contextual coherence.

---

### 3. Integration into RAG

During retrieval, we index *chart embeddings* alongside textual passages. The generator receives a *context vector* that is the concatenation of:
- Retrieved text embedding.
- Chart‑specific token sequence (e.g., “Bar: Category A → 42”).

The model learns to attend selectively: when the prompt mentions “value of A”, it weights the chart tokens more heavily, ensuring correct factual grounding. This dual‑modal alignment turns the retrieval step into a *structured inference problem* rather than a plain keyword search, yielding sharper, verifiable answers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
