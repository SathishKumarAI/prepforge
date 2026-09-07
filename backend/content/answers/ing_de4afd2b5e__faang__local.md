---
qid: ing_de4afd2b5e__faang__local
question: 'Explain: How to prepare — Figure Ai'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 473
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:15:59-05:00'
sources: []
---

**Clarify**  
- What story do we want the figure to tell? (e.g., model accuracy over epochs, feature importance, architecture diagram)  
- Which audience will see it? (technical peers vs stakeholders)  
- Are there licensing or privacy constraints on the data shown?

**Approach**  
1. **Collect & clean data** – ensure reproducibility and consistent units.  
2. **Choose the right chart type** – line for time series, bar for categorical importance, Sankey for flows, etc.  
3. **Prototype in a notebook** – quickly iterate visual styles (Seaborn, Plotly).  
4. **Validate metrics** – double‑check axes limits, color scales, and legends against raw logs.

**Depth**  
- Use vector graphics (`svg`) so the figure scales without loss.  
- Encode uncertainty: add confidence bands or error bars where applicable.  
- Annotate key points (e.g., “drop‑out threshold hit at epoch 42”).  
- Complexity: O(n) for data pass; memory usage stays linear if we stream large datasets.

**Edge Cases**  
- Sparse data → show a placeholder or note the limitation.  
- Outliers may distort scales – consider log‑scaling or clipping.  
- If multiple models, avoid clutter by faceting or interactive toggles.

**Optimize & Communicate**  
- Reduce file size (compress SVGs) to speed load times in reports.  
- Provide a short caption that ties the figure back to business goals.  
- Practice explaining the plot aloud: “Here’s how our model improves over time, and why we stopped training at epoch 48.”  

By following this pipeline you deliver a clear, reproducible, and audience‑appropriate AI figure—exactly what FAANG interviewers expect for data‑driven storytelling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
