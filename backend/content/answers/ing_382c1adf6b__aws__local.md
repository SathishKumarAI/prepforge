---
qid: ing_382c1adf6b__aws__local
question: 'Q: When would you use LLM-based reranking?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 477
total_tokens: 708
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:31:33-05:00'
sources: []
---

**Situation & Task**  
In my last role I led the search‑enhancement project for a SaaS marketplace (1 M daily active users). The existing TF‑IDF ranking produced a click‑through rate (CTR) of **3.2 %**, far below our target of 5 %. I proposed an LLM‑based reranking layer to surface more relevant listings.

**Action**  
- *Requirements*: Latency < 300 ms for the top‑10 results, cost ≤ $0.05 per query, and 99.9 % availability.  
- *Design*: Use a two‑stage pipeline—first retrieve candidates with Elasticsearch, then rerank using an **Amazon Bedrock** (GPT‑4) model wrapped in an AWS Lambda@Edge function for sub‑200 ms inference. Cache the top 50 scores per query in **ElastiCache Redis** to amortize calls.  
- *Scalability*: The lambda scales horizontally; we set a concurrency limit of 10 k requests/sec, backed by an API Gateway with throttling.  
- *Cost/Trade‑offs*: Each inference costs ~$0.0006; with 2 M queries/day the extra spend is $720/month—acceptable against a projected 1.8 % lift in CTR → $12 k additional revenue per month.

**Result**  
Within two weeks of rollout, CTR rose to **5.7 %**, a **78 % increase** over baseline, and revenue grew by **$18 k/month**. We achieved 99.95 % availability during peak traffic.  

**Reflection (Bar‑raiser notes)**  
- *Ownership*: Took full responsibility for end‑to‑end performance and cost.  
- *Dive Deep*: Benchmarked multiple models, tuned cache hit ratios, and profiled latency at the byte level.  
- *Quantified Impact*: Directly linked metric improvements to revenue.  
- *Learning from Failure*: Initial prototype suffered 450 ms latency; we identified cold‑start in Lambda and switched to provisioned concurrency, a lesson that guided future serverless designs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
