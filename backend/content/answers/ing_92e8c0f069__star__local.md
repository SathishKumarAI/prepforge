---
qid: ing_92e8c0f069__star__local
question: 'Q: Why is Context Caching better than RAG for a 50k token document?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 375
total_tokens: 619
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:26:42-05:00'
sources: []
---

**Situation:**  
At my last job I was tasked with building a chatbot that could answer technical questions from our internal knowledge base—an archive of about 50 000 tokens worth of documentation on our cloud platform. The team wanted the bot to respond in real time without hitting latency limits.

**Task:**  
I needed to decide between two approaches: keep all relevant content in a local context cache (so the LLM could see it directly) or use Retrieval‑Augmented Generation (RAG), where the model would fetch snippets from an external vector store on each query.

**Action:**  
I benchmarked both. For context caching, I pre‑tokenized the entire doc and stored it in a shared memory pool accessed by the LLM via a simple key‑value API; this eliminated any network hop and let me limit the prompt to 2 000 tokens (the model’s max). For RAG, I set up an Elasticsearch index with cosine similarity search, then wrapped each retrieval in a prompt template. I measured latency, cost per inference, and answer quality.

**Result:**  
The cache approach cut response time from ~650 ms (RAG) to ~180 ms on average, while keeping the same accuracy (~92 % F1). Cost per query dropped by 40 %, and we avoided paying for external search queries. I learned that when the document size is modest and can fit comfortably in a prompt after token pruning, context caching gives lower latency and cost than RAG’s retrieval overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
