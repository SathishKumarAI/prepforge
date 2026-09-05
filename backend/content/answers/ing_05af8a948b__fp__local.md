---
qid: ing_05af8a948b__fp__local
question: 'Explain: We parse your most complex docs — LlamaIndex | AI Agents for Document
  OCR + Workflows'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 180
output_tokens: 496
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:17:33-05:00'
sources: []
---

**Why a “document‑centric” index is necessary**

When an LLM reads a file, it sees only the token stream that was fed to it—no metadata about *where* a paragraph belongs, how sections relate, or whether the text came from scanned images (OCR) or native PDFs.  
If we want the model to answer “What does section 2 say?” or “Show me all OCR‑derived facts,” the system must preserve the **structural graph** of the source: pages → blocks → lines → words, plus provenance tags that distinguish OCR versus native text.

---

### Core design

1. **Parsing phase**  
   *OCR* → Tesseract/LLM → word‑level confidence scores.  
   *PDF* → PDFMiner → token positions.  
   Both streams are converted to a common **document graph** where nodes carry:
   - `text`
   - `bbox` (geometric location)
   - `source_type` (`ocr`, `pdf`)
   - `confidence`

2. **Indexing phase**  
   The graph is flattened into *chunks* (paragraphs, tables). Each chunk becomes an index entry with a vector embedding computed by a cross‑modal encoder that jointly conditions on text and geometry.  
   This yields two retrieval pathways:
   - **Semantic**: nearest‑neighbor search over embeddings.
   - **Spatial/metadata**: filter by `source_type` or page number.

3. **Agent workflow**  
   A lightweight “retrieval agent” receives a user query, decides (via a policy network) whether it needs semantic recall, OCR confidence filtering, or both, and then orchestrates:
   - **Fetch** the relevant chunks.
   - **Re‑rank** by combined score = `semantic_score * confidence` for OCR parts.
   - **Synthesize** an answer with explicit provenance links.

---

### Non‑obvious insight

The *confidence* of OCR is not a mere noise metric; it can be treated as a **prior** in the retrieval objective.  
By multiplying semantic similarity with OCR confidence, we effectively perform Bayesian weighting: higher‑certainty words contribute more to relevance, while low‑confidence regions are down‑weighted but still present for transparency. This subtle calibration dramatically reduces hallucinations on poorly scanned documents—an effect often missed when treating all text equally.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
