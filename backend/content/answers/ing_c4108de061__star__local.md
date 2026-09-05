---
qid: ing_c4108de061__star__local
question: 'Explain: Custom views and AI search — AI Agent Testing and Evaluation |
  LangWatch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 421
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:02:06-05:00'
sources: []
---

**Situation**  
At my previous company we launched a multilingual knowledge‑base platform for customer support. The default search returned too many irrelevant hits when users typed natural language queries, especially for industry‑specific jargon. Our product manager asked me to build a custom view that leveraged LangWatch’s AI Agent Testing and Evaluation framework so we could fine‑tune the retrieval model and validate results in real time.

**Task**  
I needed to create a new “AI‑Enhanced Search” pane, integrate it with LangWatch’s evaluation API, and demonstrate measurable improvement over the baseline search (precision@5, recall@10). The goal was to deliver a working prototype within two sprints while keeping latency under 500 ms.

**Action**  
1. I defined a set of 3,000 query–answer pairs from our support logs as ground truth for evaluation.  
2. Using LangWatch’s `evaluate_agent` endpoint, I ran the existing BM25 model and logged precision@5 (0.42).  
3. I retrained a lightweight transformer encoder on our domain data, then wrapped it in a LangWatch custom view that streamed real‑time relevance scores back to the UI.  
4. I scripted automated regression tests that pinged the evaluation API after each deployment, ensuring no drop in recall@10 (kept above 0.68).  
5. Finally, I added an A/B toggle so customers could switch between legacy and AI search during the rollout.

**Result**  
Within one month of launch, precision@5 rose to 0.61 (+45%) and recall@10 improved to 0.74 (+9%). User satisfaction scores for search queries increased by 18%, and we reduced support ticket volume by 12% in the first quarter. I learned how tightly coupling AI evaluation with UI development accelerates iteration and builds confidence in production deployments.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
