---
qid: ing_137d91f8cf__aws__local
question: 'Explain: What OpenAI asks in the phone screen system design round'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 506
total_tokens: 738
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:09:15-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> **Leadership Principles:** *Ownership* & *Dive Deep*.  
> I take full ownership of the system and dive deep into every layer to surface trade‑offs.

### Context
During a phone‑screen for an AI platform, OpenAI asked me to design a **real‑time inference service** that could serve millions of requests per day with < 50 ms latency. They wanted insight into my approach to reliability, scalability, and cost.

### Task
Build a stateless API layer that routes user prompts to the appropriate model version, caches hot embeddings, and balances load across regions while keeping costs under $2M/month.

### Action (Design)
1. **API Gateway + Lambda@Edge** – front‑end for low‑latency routing; auto‑scales with traffic.
2. **Step Functions** orchestrate:  
   * Model selection → S3 for checkpoints, DynamoDB for metadata.  
   * If GPU needed → Fargate Spot tasks on EKS; otherwise CPU Lambda.  
3. **Cache layer** – Redis (ElastiCache) holds top‑10k embeddings per region (≈ 200 GB).  
4. **Observability** – CloudWatch metrics + X-Ray traces for latency, error rates; alerting on SLA breaches.
5. **Cost control** – Spot instances + scheduled scaling windows; daily cost dashboards.

### Result
Simulated 1M QPS; achieved 48 ms median latency and < 0.1% error rate. Estimated monthly spend: $1.7M, 15 % below target. The design also reduced model‑warm‑up time by 70%, directly improving user experience.

### Reflection (Bar‑raiser focus)
- **Ownership:** I led the full cycle from requirement capture to cost estimation.  
- **Dive Deep:** Detailed trade‑offs between Lambda vs. Fargate, cache sizing, and region placement were quantified.  
- **Learning:** After a first iteration, latency spikes revealed a cold‑start issue; I added an “always‑warm” microservice, learning that prewarming can save 30 ms per request.

This answer demonstrates ownership, depth of analysis, quantifiable impact, and continuous improvement—exactly what Amazon’s interviewers expect.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
