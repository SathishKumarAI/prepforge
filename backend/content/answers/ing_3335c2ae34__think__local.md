---
qid: ing_3335c2ae34__think__local
question: 'Explain: Plot any metric — AI Agent Testing and Evaluation | LangWatch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 422
total_tokens: 614
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:27:38-05:00'
sources: []
---

**1. Clarify the goal & scope**  
   * Identify what “plot any metric” means (e.g., accuracy, loss, F1).  
   * Confirm the data source: AI Agent Testing and Evaluation | LangWatch – is it a CSV, API, or internal DB?  
   * Note any constraints: time range, aggregation level, desired output format.

**2. Adopt a mental model**  
   * Think of the task as a classic “data‑to‑chart” pipeline: **Data extraction → Transformation → Visualization**.  
   * Map each step to concrete tools (pandas for extraction, seaborn/matplotlib for plotting).

**3. Step‑by‑step reasoning**  
   1. Load the dataset into memory.  
   2. Inspect columns; pick the metric column and any grouping dimensions (e.g., model version).  
   3. Clean/convert data types if needed.  
   4. Aggregate or slice per user requirement (mean, median, time‑series).  
   5. Choose an appropriate chart type: line for trends, bar for categorical comparison, scatter for correlation.  
   6. Generate the plot with clear labels, legend, and title.

**4. Common traps to avoid**  
   * Forgetting to handle missing or NaN values – can skew results.  
   * Choosing a chart that misrepresents data (e.g., pie for non‑compositional metrics).  
   * Ignoring axis scaling; using log scale without justification.  
   * Overcomplicating the plot with too many series—reduces readability.

**5. Sanity‑check & communicate**  
   * Verify plotted values against raw numbers or a quick manual calculation.  
   * Explain choices aloud: “I chose a line chart because we’re visualizing metric evolution over time.”  
   * Offer to tweak parameters (e.g., smoothing window, color palette) if the stakeholder requests refinement.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
