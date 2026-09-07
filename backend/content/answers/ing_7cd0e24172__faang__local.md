---
qid: ing_7cd0e24172__faang__local
question: 'Q: How would you handle a query that requires information from BOTH a chart
  and a table on different pages?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 417
total_tokens: 661
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:34:11-05:00'
sources: []
---

**Clarify**  
The interviewer asks how to answer a user’s question when the required data lives in two separate sources: a chart (visual) and a table (tabular).  
*Assumptions:*  
- The chart is rendered from the same underlying dataset as the table.  
- Both pages are accessible via API or DOM queries.  
- We must return a single, coherent answer.

**Approach**  
1. **Locate sources** – Identify URLs/IDs for the chart and table.  
2. **Extract data** – Use a headless browser or HTTP client to fetch each page; parse the chart (e.g., SVG elements) and the table rows.  
3. **Normalize** – Convert both into a common schema (rows of key/value pairs).  
4. **Merge** – Join on the shared dimension (date, product ID, etc.).  
5. **Answer generation** – Feed the merged dataset to an LLM prompt that synthesizes the answer.

**Depth**  
- Parsing chart: use libraries like `BeautifulSoup` + `lxml` or `pyppeteer` to traverse SVG `<rect>`/`<path>`.  
- Table parsing: simple CSV extraction.  
- Complexity: O(n) for each source; merging is O(n).  
- Trade‑offs: headless rendering increases latency but ensures dynamic content.

**Edge Cases**  
- Missing data in one source → fallback to partial answer.  
- Inconsistent keys → use fuzzy matching or schema mapping.  
- Large datasets → stream and batch merge.

**Optimize & Communicate**  
- Cache parsed results per page to avoid repeated renders.  
- Parallelize fetches with async IO.  
- Log mismatches for future schema updates.  
I would explain each step, justify choices (e.g., why a headless browser), and highlight how this guarantees a single, accurate response.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
