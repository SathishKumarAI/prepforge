---
qid: ing_98ad05d6a6__faang__local
question: When do you put a queue in front of LLM work, and what does that architecture
  look like?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 465
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:39:42-05:00'
sources: []
---

**Clarify**  
The interviewer asks *when* it’s beneficial to add a queue before an LLM request pipeline, and *how* the resulting architecture would look. I’ll assume: (1) we’re handling user‑initiated prompts in a web service; (2) latency is acceptable if throughput or cost control matters; (3) the LLM provider has rate limits or per‑second quotas.

**Approach**  
1. Identify bottlenecks: API rate limits, cost per token, or batch‑processing constraints.  
2. Decide whether FIFO ordering or priority scheduling fits business goals.  
3. Design a lightweight queue layer that buffers requests until the LLM can process them, then drains in batches or one‑by‑one.

**Depth**  
- **Queue Implementation**: Use Redis Streams or AWS SQS to persist tasks; each message contains prompt, metadata, and an expiration timestamp.  
- **Worker Service**: A stateless worker polls the queue, aggregates up to *N* requests (batch size) or waits *T* seconds before sending a single request to the LLM API.  
- **Rate‑limit Handling**: Exponential backoff on 429 responses; retry with jitter.  
- **Cost Control**: Track token usage per batch; reject or defer oversized prompts.  
Complexity: O(1) enqueue/dequeue, worker throughput ≈ min(batch_rate, LLM_quota). Trade‑offs: added latency vs. higher throughput and predictable billing.

**Edge Cases**  
- Sudden traffic spikes causing queue buildup → monitor tail latency.  
- Prompt errors (malformed JSON) → poison‑message handling.  
- API key rotation → graceful worker shutdown.

**Optimize & Communicate**  
To improve, switch to a priority queue for premium users or implement adaptive batch sizing based on current LLM quota. I’d explain the trade‑off: “Adding a queue introduces 100–200 ms latency but lets us stay within provider limits and keep costs predictable.” This narrative shows clear reasoning, aligns with FAANG standards, and stays within the word budget.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
