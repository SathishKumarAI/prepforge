---
qid: ing_3b8eb0639b__eli5__local
question: What is MCP and what problem does it solve?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 157
output_tokens: 387
total_tokens: 544
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:10:40-05:00'
sources: []
---

**MCP – Maximum Correlation Principle**

Imagine you’re picking the best set of spices to flavor a soup. You want each spice to add something distinct, but you also don’t want two spices that are almost identical (e.g., cumin and coriander) because they would just repeat the same note.  

In machine‑learning feature selection, **MCP** does exactly this: it chooses variables (features) that are strongly correlated with what we’re trying to predict—just like a spice that gives a clear flavor—while keeping them as independent from one another as possible so each adds new information.  

The problem MCP solves is the “too many, too similar” dilemma. If you feed a model hundreds of highly correlated features, it can overfit or become slow, just as an overly spicy soup can taste muddled. MCP trims the feature set to a lean, informative mix that keeps models fast, accurate, and easier to interpret.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
