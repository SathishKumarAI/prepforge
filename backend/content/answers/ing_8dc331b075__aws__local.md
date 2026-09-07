---
qid: ing_8dc331b075__aws__local
question: 'Explain: Live coding: build the prompt for the next turn under a fixed
  token budget. The catch is our prefix cache.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 494
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:46:27-05:00'
sources: []
---

**Situation & Task**  
In my last role I led an AI‑powered chat product where each user turn had a strict 4 K token budget. The challenge was to construct the prompt for the next LLM call while leveraging a *prefix cache* that stored common conversational context (system messages, persona, prior turns). The goal: maximize model usefulness without exceeding the budget and keep latency <150 ms.

**Action**  
1. **Requirements & Design** – I formalized the problem as a knapsack: pick prefix pieces + user turn so total tokens ≤ 4 K.  
2. **AWS Services** –  
   * **Amazon DynamoDB** (partitioned by session ID) for O(1) retrieval of cached prefixes and token counts.  
   * **AWS Lambda** (Python runtime) to perform the knapsack calculation on‑the‑fly, using a lightweight `heapq` algorithm.  
   * **Amazon API Gateway** + **Lambda@Edge** for low‑latency routing to the nearest edge.  
3. **Scalability & Cost** – The cache is hot‑cached in Lambda’s memory; DynamoDB throughput is provisioned at 5 WCU, costing <$0.05/hr. With 10k concurrent users we stay under 1 M requests/day (~$30/month).  
4. **Bias for Action & Ownership** – I shipped a 2‑week MVP, then monitored prompt length vs. GPT‑4 token usage (avg 3,200 tokens) and response quality (BLEU score ↑12%).  

**Result**  
- Reduced average token waste by **35 %**, saving ~$120/month on OpenAI calls.  
- Latency dropped from 210 ms to 140 ms, improving user satisfaction scores (+0.8 on NPS).  
- The solution is now a reusable microservice used across three product lines.

**Reflection (Bar‑raiser)**  
I documented the knapsack edge cases and created unit tests that cover token overflows. After an initial failure where the cache evicted too aggressively, I adjusted TTL logic, learned that *dive deep* into AWS metrics (DynamoDB `ConsumedReadCapacityUnits`) is essential for sustainable scaling.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
