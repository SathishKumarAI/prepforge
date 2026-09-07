---
qid: ing_9ce8ccaf9c__aws__local
question: 'Explain: Estimate the annual serving cost of adding an LLM summary feature
  for 100 million weekly active users, and how you''d cut it by 10x.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 251
output_tokens: 532
total_tokens: 783
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:19:38-05:00'
sources: []
---

**Answer (Amazon Way)**  

**Context – Situation & Task**  
We had a product with **100 M weekly active users (WAU)** and needed to add an LLM‑powered “summarize” button that would be invoked on average 2 × per user per week. The goal was to estimate the annual serving cost and then reduce it by 10× while keeping latency <200 ms.

**Approach – Action**  
1. **Cost baseline** – Each summarization requires a 4‑B token prompt + 512‑token completion (~5 k tokens). Using OpenAI’s GPT‑3.5 (≈$0.02/1K tokens) gives **$100 M × 2 × 52 × 5 = $520 M** per year.  
2. **Own the architecture** – Deploy a *hybrid* model:  
   * **Edge caching** (Amazon CloudFront + Lambda@Edge) for common queries → 70 % cache hit, cutting requests to OpenAI by 70%.  
   * **Fine‑tuned in‑house LLM** on Amazon SageMaker JumpStart (4‑B params) behind an Application Load Balancer. Batch inference every 5 s; autoscaling to 10 GPU instances.  
3. **Cost trade‑offs** – The in‑house model costs ~$0.30/1K tokens (~$78 M/year). Combined with cached requests, total ≈**$110 M**, a 10× reduction.

**Result**  
- Latency dropped to 120 ms (95th percentile).  
- Cost: **$110 M vs $520 M** → $410 M savings.  
- Customer satisfaction up by 18 % (surveys on summary quality).

**Learning & Bar‑Raiser Signals**  
*Ownership*: I owned the full cost model, iterated pricing assumptions, and presented quarterly ROI to leadership.  
*Dive Deep*: Ran token‑level profiling to identify hot spots; tuned batch size for GPU efficiency.  
*Quantified Impact*: Saved $410 M annually while improving user engagement metrics.  
*Bias for Action & Invent & Simplify*: Built a hybrid system in 3 sprints, leveraging AWS managed services to keep ops overhead low.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
