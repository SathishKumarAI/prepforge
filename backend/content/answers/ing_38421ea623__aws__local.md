---
qid: ing_38421ea623__aws__local
question: 'Explain: Building Systems with the ChatGPT API - DeepLearning.AI'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 409
total_tokens: 642
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:31:56-05:00'
sources: []
---

**Situation / Task**  
When I joined a fintech startup, we needed an instant‑reply chatbot for KYC queries that could scale to 10 k concurrent users while keeping latency under 200 ms. My goal was to prototype quickly with the ChatGPT API and then ship a production‑grade service.

**Action (Technical Design)**  
1. **Front‑end:** Amazon API Gateway + Lambda (Python) for stateless request routing.  
2. **Compute:** Step Functions orchestrate:  
   - *Validate* → *ChatGPT invoke* → *Post‑process*.  
   Each step runs in a dedicated Lambda to avoid cold starts; we used Provisioned Concurrency for the ChatGPT Lambda, paying $0.0000167/req × 1 k req/s ≈ $5.8/day.  
3. **Data & State:** DynamoDB stores conversation context (TTL 24 h).  
4. **Monitoring:** CloudWatch metrics + X-Ray tracing to capture latency and error rates; alerts trigger auto‑scaling of API Gateway stages.  

**Result**  
- Deployment took 5 days, a 90% reduction from the original 3‑week estimate (Bias for Action).  
- In production, average response time was **165 ms**, with 99.9% SLA met over 30 days (Deliver Results).  
- Cost per user request dropped by **35%** versus our earlier server‑based GPT deployment.  

**Reflection**  
I owned the project end‑to‑end, diving deep into Lambda limits and Step Function costs—learning that pre‑warming was critical for latency. The bar‑raiser would note my ownership, data‑driven impact, and continuous learning from the cold‑start failure we resolved early.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
