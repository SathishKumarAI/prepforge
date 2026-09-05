---
qid: vq_e8d631596b__star__local
question: Why does part of a row sometimes get shifted to the next page, but not all
  of it?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 246
output_tokens: 322
total_tokens: 568
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:25:11-05:00'
sources: []
---

**Situation:** While designing a PDF report for our quarterly sales dashboard, I noticed that some rows in a table were getting split across pages—only part of a row would appear at the bottom of one page and the rest on the next, whereas other rows stayed intact.

**Task:** My goal was to ensure each row remained whole on a single page without truncating data or causing layout overflow, while still keeping the report generation efficient for our Java backend.

**Action:** I dug into iText’s `PdfPTable` behavior. By default it allows splitting rows (`setSplitRows(true)`), but only when the cell content exceeds the remaining space on a page. To prevent partial row splits, I set `table.setSplitRows(false)`. Then, for cells that could be taller than the page height (e.g., multiline notes), I enabled *auto‑fit* (`setAutoWrap(true)`) and applied a custom `PdfPCellEvent` to force a page break before such rows when necessary. This balanced readability with performance: only 3% of the rows triggered a forced break, keeping rendering time under 0.5 s.

**Result:** All table rows now stay intact; the report never shows awkward splits. Page counts increased by just one extra page on average, and user feedback highlighted improved legibility. I learned that controlling `splitRows` in tandem with auto‑wrapping is essential when mixing fixed‑height columns with variable text, especially for high‑volume PDF generation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
