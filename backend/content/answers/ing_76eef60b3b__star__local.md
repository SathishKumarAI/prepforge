---
qid: ing_76eef60b3b__star__local
question: 'Explain: Query Type Analysis — Hybrid Search'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 327
total_tokens: 560
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:31:48-05:00'
sources: []
---

**Situation**  
At my previous company we launched a new knowledge‑base portal for our B2B clients. The search engine was purely keyword‑based and the click‑through rate dropped to 12% within two months because users were asking complex, multi‑intent questions that returned irrelevant results.

**Task**  
I was tasked with redesigning the search pipeline so we could handle both structured data queries (e.g., “Show me all invoices for client X”) and natural language questions (“What are the tax implications of moving to a new jurisdiction?”) in one seamless experience, while keeping response time under 800 ms.

**Action**  
I introduced a query‑type analysis module that first classifies incoming queries using a lightweight BERT fine‑tuned on our logs. If the classifier flagged a structured intent, we routed the request to our SQL engine; otherwise it went to an embedding‑based semantic search over the document corpus with FAISS. To keep latency low I pre‑computed embeddings for all documents and used vector quantization to reduce memory usage by 40%. I also built a fallback rule that merged results from both engines when the confidence scores overlapped.

**Result**  
After deployment, overall click‑through rose to 27% (a 125% increase) and average search latency remained below 750 ms. The project taught me how to balance deep learning with traditional indexing, ensuring scalability without sacrificing speed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
