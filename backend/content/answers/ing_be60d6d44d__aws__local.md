---
qid: ing_be60d6d44d__aws__local
question: 'Explain: Pattern: Hierarchical Agents — Design Patterns'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 403
total_tokens: 632
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:33:54-05:00'
sources: []
---

**Answer (Amazon‑style)**  

*Leadership Principles:* **Customer Obsession**, **Ownership**  
*Scenario (STAR):* In my last role I led a team that needed to scale a recommendation engine for 5 M active users. The *Hierarchical Agents* pattern was our go‑to design.  

- **Situation:** Existing monolithic inference service hit latency >300 ms under peak load, hurting conversion rates by ~2 %.  
- **Task:** Reduce inference time while keeping cost < $200k/month and preserving model accuracy.  
- **Action:** I decomposed the pipeline into a *root agent* (API gateway + routing) that dispatched requests to *sub‑agents*—each responsible for a feature group or domain (e.g., visual, textual). Each sub‑agent ran on an AWS Lambda layer with dedicated SageMaker endpoints, orchestrated via Step Functions.  
  - **AWS services used:** API Gateway, Step Functions, Lambda, SageMaker, CloudWatch, X-Ray.  
  - **Scalability/Availability:** Parallel execution of sub‑agents allowed linear scaling; each agent had its own autoscaling policy.  
  - **Cost trade‑off:** We paid only for the compute time needed per feature set, reducing spend from $200k to $115k/month.  
- **Result:** Latency dropped to <80 ms (4× improvement), conversion increased by 3.5 %, and we achieved a 43 % cost reduction—directly impacting ARR.  

*Bar‑raiser takeaways:* I demonstrated *ownership* of the end‑to‑end system, performed a *dive deep* into latency bottlenecks, quantified impact with real metrics, and learned to balance feature granularity against operational overhead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
