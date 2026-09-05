---
qid: ing_77c3763336__star__local
question: 'Explain: Memory Pruning and Decay — Long Term Memory'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 325
total_tokens: 562
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:33:27-05:00'
sources: []
---

**Situation:**  
At my previous role, we built a conversational agent that stored user preferences for up to six months to personalize responses. By month four the model’s embedding database had grown to over 1.2 million vectors, slowing inference by 35% and inflating storage costs.

**Task:**  
I was tasked with designing an automated pruning strategy that kept the most relevant memories while trimming redundant or stale data, without hurting user experience.

**Action:**  
I implemented a two‑stage decay system. First, every vector received a time‑based weight calculated from its last access timestamp and a semantic similarity score to newer entries (using cosine similarity on 768‑dim embeddings). Second, I scheduled nightly batch jobs that removed the lowest‑scoring 20% of memories or those older than 180 days. To preserve critical long‑term context, we flagged “high‑impact” intents (e.g., recurring purchase habits) and exempted them from pruning. The pipeline was built in Python with Faiss for efficient nearest‑neighbor lookups and persisted to a PostgreSQL index.

**Result:**  
After deployment, inference latency dropped by 28%, storage costs fell by 40%, and user satisfaction scores remained unchanged (NPS stayed at +42). I learned that combining temporal decay with semantic relevance yields a balanced long‑term memory system, keeping models lean while retaining meaningful context.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
