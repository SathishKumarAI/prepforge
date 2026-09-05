---
qid: ing_0e5267ae55__star__local
question: When would you skip parsing entirely and retrieve over page images with
  a visual retriever like ColPali?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 333
total_tokens: 579
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:57:18-05:00'
sources: []
---

**Situation** – At my last role I was building a search feature for an e‑commerce catalog that had millions of product listings, many with only scanned PDFs or low‑resolution images and no embedded metadata. The crawl pipeline was choking on OCR errors because the documents were handwritten or heavily stylized.

**Task** – I needed to deliver relevance‑ranked results for keyword queries within two weeks while keeping the indexing latency below 2 seconds per document.

**Action** – Instead of parsing each PDF with a traditional text extractor, I switched to a visual retriever pipeline. Using ColPali, I embedded every page image into a multimodal vector space that combined layout and content cues. I then indexed these vectors in an approximate nearest‑neighbor index (FAISS) and linked them back to the original product IDs. For queries, I generated query embeddings with the same model and performed a quick similarity search, bypassing any OCR step entirely. I also added a lightweight post‑filter that matched exact terms when available.

**Result** – The new pipeline cut processing time from 4 seconds to under 1.2 seconds per document and improved recall by 18% on handwritten listings. It also reduced infrastructure costs because we avoided running expensive OCR services on the entire corpus. I learned that for noisy, image‑heavy datasets, a pure visual approach can be both faster and more accurate than forcing text extraction first.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
