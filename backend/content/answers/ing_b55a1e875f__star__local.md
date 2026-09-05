---
qid: ing_b55a1e875f__star__local
question: 'Q45: When should you use LangChain vs build from scratch?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 306
total_tokens: 545
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:34:12-05:00'
sources: []
---

**Situation:** At my previous company we were launching a new customer‑support chatbot that needed to pull data from our internal knowledge base and external APIs. The deadline was tight—just three weeks before the product launch.

**Task:** I had to decide whether to use LangChain, which provides ready‑made components for LLM orchestration, or build a custom pipeline from scratch using vanilla Python and OpenAI’s API.

**Action:** I evaluated both options on speed of development, flexibility, and cost. LangChain offered prebuilt chains for retrieval‑augmented generation, vector store integration (we used Pinecone), and prompt templates—all of which cut our setup time by ~70%. However, it abstracted away some control over token usage and caching. To keep costs low, I wrote a lightweight wrapper around the LangChain retriever that limited query frequency per user session and logged token counts for each call. For the few bespoke logic paths (e.g., handling ambiguous user intents), I added custom Python functions outside the chain.

**Result:** We launched on time with an average response latency of 1.2 s and a $12/month operating cost, compared to an estimated $30/month if we had built everything from scratch. The experience taught me that LangChain is ideal for rapid prototyping and standard retrieval pipelines, but custom code should still be used when fine‑grained control or cost optimization is critical.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
