---
qid: ing_95b8226a6d__star__local
question: 'Q: Your RAG system''s costs have tripled over the last month with no increase
  in query volume. How do you diagnose and fix this?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 255
output_tokens: 412
total_tokens: 667
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:32:28-05:00'
sources: []
---

**Situation:**  
Three months ago we launched a retrieval‑augmented generation (RAG) service for our internal knowledge base. The last month, the bill from the cloud provider shot up 300 % while query traffic stayed flat at ~4k requests/day.

**Task:**  
Identify the root cause of the cost spike and bring spend back to baseline without hurting latency or accuracy.

**Action:**  
1. **Cost attribution audit** – enabled detailed billing reports in GCP, mapped charges to services (Compute Engine, Vertex AI, Cloud Storage).  
2. **Log correlation** – parsed Cloud Audit logs and custom application metrics; noticed that the embedding model switched from `text-embedding-ada-002` to the newer, pricier `text-embedding-3-large`. The switch happened during a silent A/B test rollout triggered by a config drift.  
3. **Performance check** – ran latency tests; the new model added 200 ms per request but delivered only a 1–2 % precision gain.  
4. **Rollback & optimization** – reverted to the original embedding, reduced batch size from 32 to 8, and enabled vector cache in Pinecone with a TTL of 24 h to cut GPU compute by 60 %. Added a cost‑alert rule that triggers if spend exceeds 20 % over baseline.

**Result:**  
Monthly cloud spend dropped from $12k to $3.5k within two weeks (≈70 % reduction). Query latency stayed under 300 ms, and the accuracy drop was negligible (<0.5 %). I learned to pair cost monitoring with real‑time log alerts and that a single config change can explode expenses when new models are auto‑deployed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
