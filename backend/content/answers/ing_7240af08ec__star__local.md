---
qid: ing_7240af08ec__star__local
question: 'Q: How would you select a model for a production RAG system?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 445
total_tokens: 685
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:15:49-05:00'
sources: []
---

**Situation:** At my last company we were building an internal FAQ chatbot that had to answer technical support questions in real time while staying under a $5/month per user cost cap. The existing Llama‑2 7B model was too slow for our 10 ms latency SLA, and the small GPT‑3.5 turbo version lacked domain knowledge.

**Task:** I needed to pick an RAG pipeline that balanced performance, cost, and freshness of data—retrieving from a proprietary vector store of 200k engineering docs and generating accurate answers within 50 ms per request.

**Action:** First, I benchmarked four embeddings (OpenAI Ada‑002, Cohere embed‑large, Sentence‑Transformers SBERT, and our own fine‑tuned model) on recall@10 against a held‑out query set. Ada‑002 gave the best recall (0.78) with 0.5 GB index size. Next, I tested LLMs—GPT‑4o, Claude 3.5 Sonnet, and an in‑house fine‑tuned Llama‑2 13B—in a 200‑query latency/accuracy sweep; Llama‑2 13B with a temperature of 0.1 hit 90% F1 at 45 ms. I wrapped the retriever in a FastAPI gateway, cached top‑10 vectors per session, and added a cost‑monitoring layer to cap token usage.

**Result:** The new RAG system achieved 92% F1 on live queries, met the 50 ms SLA for 95% of traffic, and reduced per‑user cost from $12 to $4.5/month—meeting our budget while improving user satisfaction by 18%. I learned that end‑to‑end profiling and a lightweight LLM can outperform heavyweight models when latency is critical.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
