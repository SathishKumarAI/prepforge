---
qid: ing_687f5e9cf0__aws__local
question: 'Explain: Building an Agentic RAG with Fallback to Websearch'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 391
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:20:31-05:00'
sources: []
---

**Situation & Task (Amazon Leadership Principles: Ownership, Customer Obsession)**  
In my last role I led a cross‑functional team tasked with delivering an *Agentic Retrieval Augmented Generation* (RAG) system for our knowledge‑base chatbot. The product had to answer complex user queries while keeping latency < 200 ms and handling up to 50k concurrent users.  

**Action (Dive Deep, Bias for Action)**  
1. **Architecture** – I designed a two‑tier retrieval pipeline:  
   *Primary:* ElasticSearch index on internal documents; *Fallback:* AWS Lambda orchestrating a real‑time Bing Web Search API call.  
2. **Agentic layer** – A SageMaker endpoint running a fine‑tuned T5 model receives the top‑k passages and decides whether to generate an answer or trigger websearch based on confidence thresholds.  
3. **Scalability & Cost** – I leveraged Amazon OpenSearch Service for horizontal scaling, reserved instances for predictable load, and SQS queues to buffer fallback requests, keeping Lambda concurrency under 10 000 (AWS limit).  
4. **Monitoring** – CloudWatch metrics + a custom dashboard tracked hit‑rate, latency, and fallback frequency; alerts triggered if fallback > 15% of queries.  

**Result (Deliver Results)**  
- Reduced average response time from 350 ms to 180 ms.  
- Fallback usage dropped by 60%, saving ~$12k/month on API calls.  
- Customer satisfaction scores rose 18 points (CSAT).  

**Learnings & Bar‑raiser cues**  
I documented the fallback policy and maintained a post‑mortem repository, ensuring continuous improvement and transparency—key bar‑raiser expectations for ownership and learning from failure.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
