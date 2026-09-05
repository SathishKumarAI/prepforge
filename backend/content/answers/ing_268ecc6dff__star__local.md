---
qid: ing_268ecc6dff__star__local
question: 'Explain: Creating a Multi-Agent System with Haystack'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 364
total_tokens: 600
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:45:50-05:00'
sources: []
---

**Situation:**  
At my previous company we had a knowledge‑base chatbot that was struggling with context switching and answer latency during peak support hours. The team needed a way to let multiple specialized agents handle user queries in parallel while still maintaining a unified conversation flow.

**Task:**  
Design and deploy a multi‑agent system on Haystack that could route intents to dedicated models (FAQ retrieval, policy compliance, sentiment analysis) and aggregate their outputs into coherent responses within 1 s per request.

**Action:**  
I first mapped user intent patterns using spaCy and created a lightweight intent classifier. In Haystack I instantiated separate `DocumentStore` pipelines for each agent: a dense retriever for FAQs, a rule‑based policy checker, and an NLU sentiment module. Using the `Pipeline` API I built a master orchestrator that dispatched incoming queries to all agents concurrently via asyncio tasks. Results were merged with a custom scoring function that weighted policy compliance highest, then relevance, finally sentiment. To keep latency low, I leveraged Haystack’s `FastAPI` deployment and cached frequently accessed FAQ vectors in Redis.

**Result:**  
After rollout the average response time dropped from 2.8 s to 0.9 s, and the accuracy of policy‑compliant answers rose from 78% to 95%. The system also reduced manual ticket escalation by 35%. I learned how Haystack’s modular architecture can be harnessed for real‑time multi‑agent orchestration without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
