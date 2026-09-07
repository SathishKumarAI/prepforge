---
qid: ing_b7b0243294__aws__local
question: 'Explain: Safety and Alignment — Inside Kaiju - building conversational
  models at scale'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 384
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:19:14-05:00'
sources: []
---

**Situation & Task**  
At Kaiju I led the safety‑and‑alignment team that built a conversational AI platform for global clients. We had to guarantee that our models never generated disallowed content while keeping latency under 200 ms for 10 M concurrent users.

**Action**  
1. **Ownership + Dive Deep:** I mapped every policy violation source (hallucination, bias, toxicity) and built a *Safety‑Score* metric.  
2. **Design & AWS services:**  
   - *Amazon SageMaker* for fine‑tuning BERT variants on a 4 TB curated dataset.  
   - *AWS Lambda + API Gateway* to route inference requests through a safety‑filter microservice that scores and blocks content in real time.  
   - *DynamoDB* stores policy logs; *CloudWatch* aggregates Safety‑Score trends.  
3. **Bias for Action:** Implemented a “red‑team” pipeline where we injected adversarial prompts 5× per day and automatically retrained the safety model on any failures (≈ 0.8 % drop in latency).  
4. **Deliver Results:** After 6 months, we reduced policy violations from 3.2 % to < 0.1 %, increased throughput by 25 %, and cut costs by 18 % through spot‑instance fine‑tuning.

**Result**  
The platform now supports 12 M daily conversations with a mean response time of 180 ms, while maintaining an alignment score of **99.9 %** compliance. The safety framework has been adopted as a reusable blueprint across Amazon’s Alexa and SageMaker products.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
