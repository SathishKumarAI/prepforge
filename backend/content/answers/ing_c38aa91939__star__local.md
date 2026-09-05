---
qid: ing_c38aa91939__star__local
question: 'Explain: Contextual Q&A — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 352
total_tokens: 590
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:01:05-05:00'
sources: []
---

**Situation:**  
When I joined the product team at a mid‑size SaaS company, our knowledge base was growing fast but users were still struggling to find relevant answers. The analytics dashboard showed that over 30 % of search queries returned no results or irrelevant documents, and support tickets about “how to use feature X” kept piling up.

**Task:**  
I was tasked with building a contextual Q&A layer on top of our existing Glean MCP (Machine‑Learning Content Platform) server so that the system could understand user intent and surface the most relevant knowledge articles in real time, cutting down search friction by at least 25 %.

**Action:**  
First, I mapped the query logs to identify common intents and built a lightweight intent classifier using spaCy’s transformer pipeline. Next, I integrated this classifier with Glean’s MCP server via its REST API, passing the intent as an additional feature vector in the request payload. To improve ranking, I fine‑tuned the MCP’s embedding model on our internal document corpus with contrastive loss, ensuring that semantically similar articles were closer in vector space. Finally, I set up A/B testing and continuous monitoring with Grafana dashboards to track precision@3 and latency.

**Result:**  
Within three months, the contextual Q&A reduced “no‑results” incidents by 37 % and increased user satisfaction scores from 78 % to 92 %. The project also taught me how to balance model accuracy against response time in a production environment, ensuring that every millisecond counted for our end users.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
