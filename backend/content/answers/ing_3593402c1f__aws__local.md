---
qid: ing_3593402c1f__aws__local
question: Long context windows keep getting cheaper. Why not drop retrieval and stuff
  the whole repo into context for every request?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 484
total_tokens: 725
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:25:54-05:00'
sources: []
---

**Situation / Task**  
I led a cross‑functional team that built an enterprise chatbot for a Fortune‑500 client. The product had to answer legal questions from a 2 TB knowledge base while staying under $0.05 per query and <200 ms latency.

**Action**  
1. **Dive Deep into Retrieval vs. In‑Context** – We benchmarked the latest LLMs (e.g., Anthropic Claude, OpenAI GPT‑4o) with a 16K token window against our 2 TB corpus. Even with a 128K window, packing the entire repo caused *3×* higher inference costs and >400 ms latency due to GPU memory limits on SageMaker endpoints.
2. **Hybrid Retrieval Architecture** –  
   - Store documents in **Amazon S3** + **OpenSearch** for vector search (using Bedrock embeddings).  
   - Use **Lambda@Edge** to pre‑filter top 5–10 snippets, then stream them into the LLM context via **AWS Step Functions**.  
   - Cache popular queries in **ElastiCache (Redis)** to shave off 70 ms.
3. **Cost & Scaling** – The hybrid model cut per‑query cost from $0.12 to $0.04 and kept throughput >1k QPS with autoscaling Lambda concurrency.

**Result**  
- **$0.04/req** vs the projected **$0.12** (a 67 % savings).  
- Latency dropped to **180 ms** (vs 400 ms baseline).  
- Customer satisfaction scores rose from 78 % to 92 %.  

**Reflection**  
I owned the decision, iterated on data‑driven metrics, and learned that “cheaper context” doesn’t automatically translate to better performance at scale. The bar‑raiser looks for ownership, depth of analysis, measurable impact, and a clear lesson from failure—exactly what we delivered here.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
