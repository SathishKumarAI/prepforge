---
qid: vq_e8d631596b__faang__local
question: Why does part of a row sometimes get shifted to the next page, but not all
  of it?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 457
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:40:43-05:00'
sources: []
---

**Clarify**  
We’re looking at pagination logic for tabular data (e.g., PDF or printed reports). The issue: *only a fragment of a row appears on one page and the rest spills onto the next*, while other rows stay whole. I’ll assume we’re dealing with a fixed‑height page, variable row heights, and that our renderer supports “keep‑together” hints but not mandatory enforcement.

**Approach**  
1. Measure each row’s height.  
2. Track cumulative height as we iterate rows.  
3. When adding a row would exceed the remaining space:  
   - If the row is larger than the whole page, split it (content flows).  
   - Else if the row *would* cross the boundary but the renderer can’t keep it together, let it split automatically.  
4. Optionally enforce `keepTogether` for rows that are critical to stay intact.

**Depth**  
- In many rendering engines (e.g., iText, PDFKit), a single element may be split if `splitAllowed=true`. The engine splits at the first possible break point (often between cells). Thus a row with multiple cells can be broken after the last fully rendered cell.  
- If a row is marked `keepTogether`, the engine will push it entirely to the next page, avoiding partial rendering.  
- Complexity: O(n) for n rows; memory usage minimal.

**Edge Cases**  
- Very tall single-cell rows exceeding one page → must split within the cell (e.g., long text).  
- Rows with embedded images or tables may cause unexpected splits if not flagged `keepTogether`.  
- Page size changes at runtime (orientation switch) can lead to mis‑calculations.

**Optimize & Communicate**  
To avoid confusing readers, I’d add a “keep‑together” flag for important rows and validate page breaks in a unit test that feeds known row heights. In production, log the number of split rows per page so we can audit layout quality. This balances readability (no mid‑row cuts) with flexibility (splits only when unavoidable).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
