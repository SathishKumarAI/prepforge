---
qid: ing_95b8226a6d__faang__local
question: 'Q: Your RAG system''s costs have tripled over the last month with no increase
  in query volume. How do you diagnose and fix this?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 517
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:32:20-05:00'
sources: []
---

**Clarify**  
*Restate*: A Retrieval‑Augmented Generation (RAG) pipeline’s operational cost has risen 3× last month, yet query traffic is unchanged.  
*Assumptions to verify*:  
1. Query volume and user distribution are indeed flat (no hidden spikes).  
2. Cost components: embeddings, vector search, LLM calls, storage, networking.  
3. No recent code or configuration changes.

**Approach**  
1. Instrumentation audit – gather fine‑grained cost metrics per component.  
2. Temporal analysis – correlate cost surges with deployment events or provider price changes.  
3. Resource profiling – check CPU/GPU utilization and idle times.  
4. Cost‑per‑query decomposition – identify which step consumes the most.

**Depth**  
- **Embeddings**: If using an external API, a 1× increase in token size or a pricing tier shift can double costs. Verify model version and payload length.  
- **Vector search**: An index rebuild or increased replication factor inflates storage/compute fees. Inspect the vector store logs for re‑indexing windows.  
- **LLM calls**: A switch to a higher‑capability model (e.g., GPT‑4) will raise per‑token cost. Check if the prompt template changed.  
- **Networking**: Data egress from on‑prem or cloud regions may have risen due to mis‑routed traffic.  

Apply `Cost Explorer` or equivalent, then run a targeted A/B test: revert suspected configuration changes and measure cost regression.

**Edge Cases**  
- Sudden spike in token length per query (e.g., longer user inputs).  
- Hidden background jobs (cron, indexing) that started running more frequently.  
- Provider billing anomalies (over‑provisioned instances).

**Optimize & Communicate**  
1. **Fix**: Roll back to the last known good config; if a new model is needed, request a dedicated pricing tier or batch requests to amortize costs.  
2. **Prevent**: Add automated alerts on cost thresholds and enforce rate limits per user.  
3. **Narrative**: “We isolated the cost hike to the embeddings step, traced it back to an accidental upgrade of the embedding model, and rolled back. Going forward we’ll lock embedding versions in IaC and monitor token usage.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
