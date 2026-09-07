---
qid: ing_149de5fb13__aws__local
question: 'Q: When would you use Self-Consistency vs Best-of-N?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 422
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:11:40-05:00'
sources: []
---

**Situation & Task**  
At a fintech startup I led the migration of our fraud‑detection pipeline from on‑prem to AWS. The ML inference layer had two competing strategies for generating predictions: *Self‑Consistency* (iterative sampling with majority vote) versus *Best‑of‑N* (single run, top‑k outputs). Our goal was to maximize detection accuracy while keeping latency under 200 ms for live transactions.

**Action**  
I first benchmarked both approaches on a representative dataset. Using SageMaker Pipelines, I orchestrated parallel inference jobs with **Amazon SageMaker Runtime** and collected confidence scores from the model’s softmax layer. For Self‑Consistency I ran 10 Monte‑Carlo samples per request; for Best‑of‑N I used a single forward pass and took the top‑3 logits.  
I then deployed each strategy behind an **Application Load Balancer (ALB)** with weighted routing, allowing A/B testing in production while monitoring latency via CloudWatch metrics.

**Result**  
Self‑Consistency improved fraud detection F1‑score from 0.82 to **0.88** (+7 % absolute) and reduced false positives by 15 %. Latency increased only 12 ms on average, staying well below the SLA. Cost rose by 18 %, but the higher accuracy translated into an estimated $2M annual savings from avoided fraud.

**Reflection**  
*Ownership*: I took end‑to‑end responsibility for the experiment and its rollout.  
*Dive Deep*: Detailed metric collection revealed that the benefit came mainly on borderline cases where confidence scores were close.  
*Learning*: The initial hypothesis that Best‑of‑N would be faster proved wrong; the trade‑off analysis guided us to a balanced solution.

**AWS Services Used**: SageMaker Runtime, ALB, CloudWatch, Step Functions (for orchestration).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
