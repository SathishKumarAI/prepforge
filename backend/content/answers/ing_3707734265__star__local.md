---
qid: ing_3707734265__star__local
question: You've connected six MCP servers. There are now 130 tool definitions and
  ~45k tokens of schema in context before the user says a word. What do you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 259
output_tokens: 377
total_tokens: 636
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:18:19-05:00'
sources: []
---

**Situation:**  
In our latest AI platform rollout we connected six MCP (Multi‑Container Processing) servers to serve a real‑time chatbot for enterprise customers. The system automatically pulled in 130 tool definitions and about 45,000 tokens of schema data into the prompt before any user utterance arrived. Our LLM had a 32k token limit, so we were already over capacity.

**Task:**  
I needed to keep all relevant tool metadata available while staying within the token budget, ensuring the model could answer promptly without dropping context or incurring excessive latency.

**Action:**  
First I profiled the token usage per tool and identified that ~70% of definitions were rarely invoked. I built a two‑layer retrieval pipeline: (1) an in‑memory inverted index on the MCP servers to pre‑filter tools by keyword relevance, and (2) an embeddings cache that stores only the top‑5 most similar tool snippets for each incoming user query. I also refactored the schema into concise JSON schemas and compressed them with Brotli before serialization. During startup, the system loads a lightweight “tool index” (~3k tokens) and defers full definitions until requested.

**Result:**  
Token usage dropped to 18k on average, freeing up space for user context and reducing response latency by 30%. The platform now scales to 50 concurrent users with consistent SLA compliance. I learned that proactive token budgeting combined with selective retrieval is essential when juggling large knowledge bases in real‑time AI services.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
