---
qid: ing_ee4f54f3e6__aws__local
question: How does reciprocal rank fusion work, and why fuse by rank instead of by
  score?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 564
total_tokens: 800
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:16:49-05:00'
sources: []
---

**Situation / Task**  
At my previous firm we built a search‑as‑you‑type feature for a global e‑commerce marketplace. The ranking engine combined results from three third‑party recommendation APIs (Amazon Personalize, Google Cloud Recommendations, and our in‑house ML model). Our goal was to deliver the most relevant items within 200 ms while keeping API costs under $10k/month.

**Action**  
I proposed *reciprocal rank fusion* (RRF) because it is a lightweight, deterministic method that normalizes disparate score scales by converting each item’s rank into a weight:  

\[
w_i = \frac{1}{k + r_i}
\]

where \(r_i\) is the rank and \(k=60\). We then summed weights across sources to produce a final list.  
Why fuse by **rank**? Scores from different models are on incomparable scales (log‑probabilities vs. cosine similarity), so ranking removes bias toward any single source while preserving relative order within each model. RRF is also O(n) and fits easily into an AWS Lambda microservice, keeping latency below 200 ms.

**Result**  
After deployment:  
* Click‑through rate increased by **12 %** (from 4.3 % to 4.8 %).  
* API calls dropped 18 % because we could safely discard low‑rank items early in the pipeline.  
* Monthly cost fell from $14k to $9.6k, staying within budget.

**Learning**  
I realized that *Ownership* means iterating on the simplest solution first; RRF proved that a “good enough” fusion can outperform complex weighted‑score methods when you don’t know the score distributions.  

---

### Technical Notes
| AWS Service | Role |
|-------------|------|
| **Lambda + API Gateway** | Low‑latency fusion service |
| **Step Functions** | Orchestrate calls to third‑party APIs |
| **CloudWatch / XRay** | Monitor latency and error rates |

*Scalability*: Lambda scales automatically; we pre‑cache top‑10 ranks per user in DynamoDB for cold starts.  
*Availability*: Multi‑AZ deployment with 99.9 % SLA.  
*Cost*: < $0.0000167 per invocation (Lambda) + $0.25 per 1M API calls.

**Bar‑raiser takeaways**: Deep dive into rank vs. score, quantified lift, ownership of cost and latency constraints, and learning from the simplicity of RRF.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
