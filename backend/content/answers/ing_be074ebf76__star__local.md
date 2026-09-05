---
qid: ing_be074ebf76__star__local
question: 'Explain: Q6: Describe hybrid search and when you would use it'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 350
total_tokens: 589
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:51:01-05:00'
sources: []
---

**Situation** – At my last role I was tasked with improving the internal knowledge base for a SaaS support team that had over 12,000 FAQ articles plus a large repository of customer logs. The click‑through rate on the search bar was only 18%, and many support agents complained that they couldn’t find relevant answers quickly.

**Task** – My goal was to design a search system that could surface both structured FAQ content and unstructured log data in one unified interface, while keeping response time below 300 ms so agents wouldn’t be slowed down during escalations.

**Action** – I chose a hybrid search architecture: first, I indexed the FAQs using Elasticsearch’s inverted index for keyword matching; then I added a semantic layer with OpenAI’s embeddings to capture intent and context. For log data, which was semi‑structured JSON, I used vector similarity over fine‑tuned BERT embeddings stored in Pinecone. The query pipeline first performed a Boolean filter on the FAQ index, then sent the same query to the vector store; results were merged, de‑duplicated, and ranked by combined relevance score. I also implemented caching for the most common queries and added pagination for large result sets.

**Result** – After deployment, click‑through rose to 43% (a 140 % increase) and average search time dropped to 210 ms. Support agents reported a 30 % reduction in ticket turnaround time. I learned that combining keyword precision with semantic recall is key when you have mixed data types—hybrid search turns noisy, unstructured logs into actionable knowledge without sacrificing speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
