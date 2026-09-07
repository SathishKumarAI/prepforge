---
qid: ing_cd34fba020__aws__local
question: How does prompt caching work, and how should it change the way you structure
  prompts?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 450
total_tokens: 686
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:04:51-05:00'
sources: []
---

**Prompt Caching in a Production AI Service**

*Situation:* I led the rollout of an on‑premise LLM inference layer for a customer‑facing recommendation engine. The model (≈12 B params) ran on SageMaker endpoints, but each unique prompt caused a 200 ms tokenization + embedding overhead that pushed latency over the SLA.

*Task:* Reduce per‑request latency by 30% while keeping cost and accuracy unchanged.

*Action:*  
1. **Analyze** – logged 1.2 M prompts/day; 68 % were identical or highly similar (≤5 tokens diff).  
2. **Design** – implemented a *prompt cache* in DynamoDB with TTL, keyed by the prompt text hash.  
   - On request: check cache → if hit, return cached embedding + tokenized prompt.  
   - If miss: compute, store, and proceed.  
3. **Deploy** – wrapped SageMaker inference in an API Gateway → Lambda layer that does cache lookup.  
4. **Monitor** – used CloudWatch to track hit‑rate and latency.

*Result:* Cache hit rate climbed to 71 %, cutting average inference latency from 240 ms to 165 ms (−31 %). Cost savings were 18 % due to fewer compute invocations, and accuracy stayed at 99.8 %.  

**How it changes prompt design:**  
- **Shorten & normalize prompts**: since cache keys are exact strings, use canonical forms (e.g., lower‑case, remove punctuation).  
- **Batch identical prompts**: send a single request for repeated prompts to leverage the cache fully.  
- **Avoid long, unique “one‑off” prompts** unless business value justifies the latency hit.

*Leadership Principles:* **Customer Obsession** – delivering faster responses; **Ownership** – taking end‑to‑end responsibility for performance and cost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
