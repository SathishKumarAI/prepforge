---
qid: ing_bb4793c68f__fp__local
question: 'Explain: A customer wants structured fields extracted from 10 million scanned
  documents with LLMs. Sketch the pipeline and the cost/latency math.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 710
total_tokens: 899
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:41:53-05:00'
sources: []
---

## Pipeline sketch

| Step | Purpose | Typical tools | Output |
|------|---------|---------------|--------|
| 1️⃣ OCR + pre‑processing | Convert pixels → text & layout | Tesseract / CloudVision | `text`, `bbox` map |
| 2️⃣ Document classification | Find the “template” (invoice, form, etc.) | CNN or LLM prompt | `class_id` |
| 3️⃣ Structured extraction | Pull fields (`date`, `amount`, …) | LLM in few‑shot mode on OCR tokens + layout hints | JSON record |
| 4️⃣ Post‑processing & validation | Schema checks, cross‑field consistency | Python rules / small ML model | Cleaned record |
| 5️⃣ Store & index | Persist for downstream analytics | Cloud BigTable / Parquet + Elasticsearch | Searchable dataset |

The heavy lifting is step 3: a language model reads the OCR text (≈ 1 k tokens per doc) and, guided by a prompt that encodes field names and examples, returns key‑value pairs.

---

## Cost & latency math

Assume:
- **N = 10 M** documents
- **Tₒ = 1 k tokens/doc** (OCR output)
- **L = 0.5 k tokens per prompt** (few‑shot + context)
- **Cₗ = $0.00002 / token** (e.g., GPT‑4o at $0.03/1K tokens → $3×10⁻⁵, we take a conservative lower bound)

### Token cost
\[
C_{\text{total}} = N \times (T_o + L) \times C_l
                = 10^7 \times (1000+500) \times 2\times10^{-5}
                \approx \$3\,000.
\]

(If you use a cheaper model, the coefficient drops proportionally.)

### Compute time
With an average inference latency of **120 ms** per doc on a single GPU:

\[
t_{\text{total}} = N \times 0.12\,\text{s}
                 = 1.2\times10^6\,\text{s} \approx 333\,\text{h}.
\]

Using **8 GPUs in parallel**, the wall‑clock time shrinks to ≈ 42 h.

### Storage
OCR + JSON ≈ 2 KB/doc → **20 GB** total; negligible relative to compute cost.

---

## Non‑obvious insight

The *token budget* dominates. Most people think “just ask the LLM for each field”, but because the prompt must include the entire OCR output, you pay for all tokens even if only a few are used for extraction. Compressing the input (e.g., by extracting *only the relevant page* or using **semantic chunking** to keep only 300–400 tokens) can cut cost by up to **60 %** without hurting accuracy—an optimisation that is rarely mentioned in quick‑start guides.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
