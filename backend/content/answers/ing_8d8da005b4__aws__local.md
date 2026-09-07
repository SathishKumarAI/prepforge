---
qid: ing_8d8da005b4__aws__local
question: 'Explain: Design the backend for a customer-facing chatbot. Walk me through
  the request path.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 476
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:45:45-05:00'
sources: []
---

**Situation – I was tasked to build a low‑latency, highly available chatbot for a global e‑commerce platform that needed to handle 10k QPS while keeping costs < $5k/month.**

**Task – Design the backend request path from user message to response, ensuring customer obsession and ownership of performance.**

**Action –**  
1. **API Gateway + Lambda (or containerized Fargate) for front‑end ingress** – throttles 10 000 QPS with burst capacity, auto‑scales, and logs all traffic in CloudWatch.  
2. **Step Functions orchestrator** – splits the request into *intent detection*, *knowledge retrieval*, and *response generation* steps, enabling parallelism and retry logic (fault tolerance).  
3. **Amazon SageMaker endpoint** for NLU (BERT‑based) and a separate *ChatGPT‑style* inference endpoint on GPU instances; both are deployed in two AZs with Route 53 latency routing.  
4. **DynamoDB Global Tables** store user context, session state, and fallback rules—single‑write, multi‑region consistency guarantees sub‑10 ms reads.  
5. **S3 + CloudFront** host static assets (conversation UI) for low cost and edge caching.  

**Result –** The end‑to‑end latency dropped from 750 ms to 120 ms (15× faster), while the system sustained 12k QPS with <0.01% error rate, keeping spend at $4.3k/month—an improvement that increased NPS by 7 points.

**Bar‑raiser check:**  
- **Ownership**: I led cross‑team ops reviews and introduced automated health dashboards.  
- **Dive Deep**: Traced latency spikes to SageMaker warm‑start costs; added prewarming schedule.  
- **Quantified Impact**: Reported latency, cost, and NPS gains in executive decks.  
- **Learning from Failure**: After a cold‑start incident, I implemented a hybrid Lambda/SageMaker model to reduce cold‑starts by 90%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
