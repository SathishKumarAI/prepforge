---
qid: ing_0f082683ee__aws__local
question: 'Explain: Use REST if: — REST vs GraphQL - by Ashish Pratap Singh'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 462
total_tokens: 700
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:59:34-05:00'
sources: []
---

**Context (S)**  
While leading the ML Ops team at a fintech startup, we had to expose our recommendation engine to mobile clients. The product manager asked whether we should use REST or GraphQL.

**Decision (T)**  
I owned the decision: evaluate trade‑offs, prototype both, and pick the one that best served *customer obsession* (fast, reliable responses) while keeping *cost* in mind for AWS usage.

**Action (A)**  
1. **Requirements:** Mobile apps needed single‑endpoint calls, minimal payload, and strict SLAs (≤ 120 ms).  
2. **Prototype:** Built two Lambda functions behind API Gateway – one exposing a RESTful `/recommend` endpoint, the other a GraphQL resolver (`query { recommendations }`).  
3. **Metrics:** Measured cold start latency, payload size, and cost per 1M requests on AWS.  
   - REST: Avg latency = 95 ms, payload ≈ 4 KB, cost ≈ $0.25/1M req.  
   - GraphQL: Avg latency = 140 ms (due to query parsing), payload ≈ 6 KB, cost ≈ $0.35/1M req.  
4. **Scalability:** Both scale via Lambda concurrency, but REST’s simpler schema made caching in CloudFront easier and reduced data transfer costs.

**Result (R)**  
Chose REST. Customer satisfaction scores rose 12% (faster loads), we saved ~$18k annually on API calls, and the team could focus on feature work instead of query tuning.  

**Learnings & Bar‑raiser cues:**  
*Ownership:* I drove the end‑to‑end decision.  
*Dive Deep:* Collected concrete latency/cost data.  
*Quantified Impact:* Reported 12% QoE lift and $18k savings.  
*Learning from Failure:* Early GraphQL prototype exposed hidden cost of query parsing; we pivoted quickly, demonstrating agility.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
