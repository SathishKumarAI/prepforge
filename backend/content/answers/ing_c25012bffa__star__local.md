---
qid: ing_c25012bffa__star__local
question: 'Explain: Runnables — Langchain Deep Dive'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 372
total_tokens: 607
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:58:29-05:00'
sources: []
---

**Situation**  
At my previous startup we had a real‑time customer support chatbot that needed to pull product data from three disparate APIs (inventory, pricing, and reviews) before answering user queries. Our existing pipeline was a monolithic async function that stalled the entire flow when one API hiccuped, leading to 30 % slower response times during peak traffic.

**Task**  
I had to redesign the data‑fetching logic so each external call ran independently, retryable on failure, and could be combined into a single coherent answer without blocking the main request thread—essentially building a lightweight “Runnable” orchestrator within LangChain.

**Action**  
Using LangChain’s `Runnable` abstraction, I created three small runnables: `FetchInventory`, `GetPrice`, and `CollectReviews`. Each wrapped its API call in a `retry_with_backoff` decorator and returned a dictionary. I then composed them with the `chain()` method, adding a `Map` step to parallelize the calls. Finally, I built a `ResponseBuilder` runnable that merged the results into a user‑friendly JSON payload. The whole pipeline was wrapped in a single `RunnableSequence`, making it trivial to test and swap out components.

**Result**  
The new architecture cut average response time from 1.2 s to 0.4 s during load tests, a 67 % improvement. Failure rate dropped from 12 % to under 1 % because each API call had its own retry logic. I learned how LangChain’s runnable composability can replace ad‑hoc async patterns and provide clear, testable pipelines that scale with traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
