---
qid: ing_c4108de061__think__local
question: 'Explain: Custom views and AI search — AI Agent Testing and Evaluation |
  LangWatch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 433
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T13:54:39-05:00'
sources: []
---

**1. Clarify the scope & assumptions**  
- Identify what “Custom views” means in this context (e.g., user‑defined dashboards or filters).  
- Confirm that “AI Agent Testing and Evaluation” refers to assessing an AI system’s performance on a search task within LangWatch.  
- Assume we have access to LangWatch’s API, test data, and evaluation metrics.

**2. Adopt a mental model**  
- Treat the problem as **system testing**: input → agent → output → metric.  
- Use the *test‑evaluate‑refine* loop common in AI engineering.  
- Map custom views onto the *analysis layer*: they shape how results are visualized and interpreted.

**3. Step‑by‑step reasoning**  
1. **Define test cases**: create a diverse set of queries that reflect real user intent.  
2. **Configure custom view**: set filters, ranking criteria, or visualization options that the agent will use.  
3. **Run the agent** on each query through LangWatch’s search endpoint.  
4. **Collect outputs**: raw results, relevance scores, latency, etc.  
5. **Apply evaluation metrics** (precision@k, recall, NDCG).  
6. **Compare against baseline or expected thresholds** to decide pass/fail.

**4. Common traps to avoid**  
- *Over‑engineering the view*: adding too many filters can hide deficiencies in the agent’s core logic.  
- *Ignoring data drift*: test sets must be representative of current usage.  
- *Metric misinterpretation*: confusing precision with relevance or overlooking latency impacts on UX.

**5. Sanity checks & communication**  
- Verify that each metric makes sense (e.g., a higher NDCG should accompany better user satisfaction).  
- Summarize findings in a concise report: “Custom view X improved precision by Y% but increased latency by Z ms.”  
- Use visual dashboards to let stakeholders see the trade‑offs clearly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
