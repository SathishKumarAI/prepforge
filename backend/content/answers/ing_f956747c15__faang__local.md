---
qid: ing_f956747c15__faang__local
question: 'Q55: Your RAG system works great on test data but fails in production.
  What do you check?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 476
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:19:24-05:00'
sources: []
---

**Clarify**  
We’re asked: *“Your Retrieval‑Augmented Generation (RAG) model performs well on held‑out data but crashes or underperforms in production.”*  
Assumptions to confirm:  
1. The same architecture and hyperparameters are deployed.  
2. Production data distribution matches the test set.  
3. The retrieval component is reachable and returns relevant passages.  

**Approach**  
1. Validate data pipelines (ingestion, tokenization).  
2. Inspect retrieval latency/quality.  
3. Check model inputs vs training inputs.  
4. Monitor system resources & scaling behavior.  

**Depth**  
- **Data drift**: Compute KL‑divergence between test and live query distributions; re‑train if > threshold.  
- **Retriever health**: Log cache hit rates, latency, and recall@k on a held‑out “live” subset. If retrieval fails, fallback to default knowledge base.  
- **Tokenizer mismatch**: Ensure same vocab, special tokens, and max length are used; mismatches can cause OOV or truncation errors.  
- **Resource constraints**: GPU/CPU memory spikes can trigger model swapping → latency blow‑up. Use Prometheus metrics to spot outliers.  
- **Batching & concurrency**: Over‑aggressive batching may overflow the inference queue, causing timeouts. Implement backpressure or a request throttling policy.  

**Edge Cases**  
- Sudden surge in query volume (DDoS).  
- Retrieval index corruption or network partition.  
- Unexpected input length > model’s max seq_len.  
- Tokenizer update without redeploying the model.  

**Optimize & Communicate**  
- Automate drift detection and trigger a “shadow” retraining pipeline.  
- Add graceful degradation: if retrieval fails, return a generic answer or log for later analysis.  
- Document each component’s health checks in a single‑page ops dashboard; explain to stakeholders how each metric correlates with user experience.  

By systematically validating data flow, retrieval reliability, and resource usage—and by monitoring drift—you can pinpoint why a RAG system that shines on paper falters under real traffic.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
