---
qid: ing_10eae68c14__star__local
question: 'Explain: Context Relevance — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 292
total_tokens: 526
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:02:26-05:00'
sources: []
---

**Situation**  
In my last role as a data scientist at a fintech startup, we were rolling out an AI‑powered customer support chatbot. The internal audit flagged that the LLM’s responses were often accurate but not contextually relevant to users’ account issues, hurting satisfaction scores.

**Task**  
I had to design and implement a robust evaluation framework for “Context Relevance” so we could quantify how well the model understood user intent and provided actionable advice tied to their specific financial data.

**Action**  
First, I built a labeled validation set by mining 10k real support tickets, annotating each with relevance tags (high/medium/low). Then I created a custom metric: Context Relevance Score = Precision × Recall of relevant token overlap against the user’s account context. I integrated this into our nightly evaluation pipeline using Python and Pandas, and visualized trends in Grafana. To improve scores, I fine‑tuned the LLM with domain‑specific prompts that included dynamic placeholders for account balances and recent transactions.

**Result**  
Within two weeks, the Context Relevance Score rose from 0.42 to 0.78, and our customer satisfaction index improved by 12 percentage points. The exercise taught me how to turn qualitative concerns into measurable KPIs and iterate quickly with data‑driven insights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
