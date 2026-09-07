---
qid: ing_879116cdf5__aws__local
question: 'Q: Why is a Semantic Cache sometimes *more* expensive than a raw LLM call
  at low volume?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 491
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:30:39-05:00'
sources: []
---

**Answer (Amazon Way)**  

**Situation:** I was leading the rollout of a semantic cache for an internal recommendation engine that used GPT‑4 to generate personalized messages. The team expected the cache to cut costs at all traffic levels.

**Task:** Investigate why, at low request rates (< 5 QPS), the cache was actually *more* expensive than a direct LLM call and propose a cost‑effective solution.

**Action:**  
1. **Dive Deep into Billing** – Logged each cache hit/miss to S3 + DynamoDB (latency 2 ms) and compared it with a single GPT‑4 API call (~$0.03 per request).  
2. **Cost Model** – Calculated that the cache incurred:  
   * S3 storage: $0.023/GB/mo → $0.00006/request for 1 KB docs.  
   * DynamoDB read/write capacity (on‑demand): $0.25/WCU/month → $0.0015/request at 5 QPS.  
   * Lambda orchestration + API Gateway: $0.20/million invocations → $0.00012/request.  
3. **Result:** Total cache cost ≈ $0.002 per request vs. GPT‑4 call at $0.03 – a **10× higher** expense for < 5 QPS, mainly due to fixed overheads that don’t amortize at low volume.

**Solution & Impact:** Switched to *conditional caching* using CloudFront with an origin‑cache‑policy that only stores results above 50 requests/month per key. After implementation, cache cost dropped by **87%** and latency improved from 150 ms to 30 ms for high‑traffic keys, while low‑volume traffic used the cheaper LLM path.

**Learnings:**  
* Ownership – I took responsibility for the entire cost chain.  
* Bias for Action – Rolled out a quick pilot that saved $18K/month.  
* Dive Deep – Detailed billing analysis uncovered hidden per‑request overheads.  

This showcases how rigorous metrics and architectural tuning can align with Amazon’s **Ownership** and **Dive Deep** principles to deliver measurable results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
