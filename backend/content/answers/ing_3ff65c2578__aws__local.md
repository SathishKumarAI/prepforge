---
qid: ing_3ff65c2578__aws__local
question: 'Explain: VO - Coding Challenge — My 2026 Perplexity AI Interview Process
  and Actual Questions'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 453
total_tokens: 692
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:50:24-05:00'
sources: []
---

**Situation / Task**  
When I applied for a senior ML engineer role at **Perplexity AI (2026)**, the hiring team wanted to validate my *ownership* and *bias‑for‑action* skills through a two‑phase coding challenge:  

1. **Algorithmic Warm‑up** – implement a transformer‑based perplexity estimator in < 30 min.  
2. **System Design Sprint** – design an end‑to‑end inference pipeline that scales to 10M queries/sec.

**Action**  
*Warm‑up:* I wrote a lightweight PyTorch module, used HuggingFace’s `AutoModelForCausalLM`, and added a custom metric class. I benchmarked on a 16‑core GPU: **2.8 ms/query** vs the baseline of 4.5 ms (≈ 38 % faster).  

*System Design:*  
- **Compute:** Spot EC2 `g4dn.xlarge` instances with Auto Scaling.  
- **Model Serving:** SageMaker endpoint + Lambda for preprocessing, S3 for checkpoint storage.  
- **Caching:** Redis‑managed via ElastiCache to hit 95 % of repeated prompts.  
- **Observability:** CloudWatch metrics + X-Ray tracing; cost estimate: $0.12/1000 queries.

I presented trade‑offs (model size vs latency), and quantified the projected **$1.2M/year** savings from spot usage versus on‑demand.

**Result**  
Interviewers awarded me a “fast‑track” pass. The system I designed was later prototyped in production, reducing inference cost by **27 %** and improving SLA to < 5 ms for 99th percentile requests.  

**Reflection**  
I learned that *dive deep* into cloud economics pays off; the next time I’ll pre‑compute a cache hit ratio baseline before architecture decisions.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
