---
qid: ing_ae6207ba53__star__local
question: 'Explain: Token-Budget Aware Retrieval — Production Rag At Scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 382
total_tokens: 620
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:20:56-05:00'
sources: []
---

**Situation**  
In my last role, our customer‑support chatbot was deployed to millions of users worldwide. Every day it processed over 10 million queries, and we hit a bottleneck: the retrieval engine could fetch up to 20 documents per request, but each document was ~4 KB of text, pushing the LLM’s token limit (8k) and inflating latency.

**Task**  
I needed to redesign the retrieval pipeline so that the system stayed within a strict token budget while still delivering high‑relevance answers, all without compromising the user experience or requiring costly hardware upgrades.

**Action**  
1. Built a lightweight “budget calculator” that estimated token usage per query by sampling document lengths and the prompt template.  
2. Introduced *adaptive top‑k*: if the estimated tokens exceeded 6k, we reduced k proportionally; otherwise we kept it at 20.  
3. Added a pre‑filter using BM25 to score candidate passages and only forwarded the highest‑scoring 5–10 for LLM consumption.  
4. Deployed this logic in our microservice architecture (Python + FastAPI) behind an autoscaling GKE cluster, monitoring token usage via Prometheus.

**Result**  
Token usage dropped by 45 % on average, keeping us well below the 8k limit and reducing response latency from 1.3 s to 0.9 s. Accuracy (measured by F1‑score against a held‑out test set) improved from 0.62 to 0.68. I learned that real‑world RAG systems thrive when retrieval is tightly coupled with token budgeting, not just accuracy metrics.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
