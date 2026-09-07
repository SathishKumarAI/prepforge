---
qid: ing_77ed7d1d73__aws__local
question: 'Explain: Round 5: Take-home defence (30 minutes) — Mock Interview Kit'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 462
total_tokens: 698
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:56:40-05:00'
sources: []
---

**Situation & Task**  
During my AWS Cloud Architect interview, I was asked to design a “Round 5 Take‑home Defence” module for the AI team’s internal mock interview kit. The goal: enable engineers to rehearse live interviews with an automated AI coach that gives real‑time feedback on answers (content, length, clarity) and tracks improvement over time.

**Action – Technical Design**  
1. **Data Ingestion** – Speech‑to‑Text via Amazon Transcribe in real‑time; store transcripts in S3 with DynamoDB metadata.  
2. **Analysis Engine** – Lambda chain → Amazon Comprehend (sentiment, key‑phrase extraction) + custom ML model on SageMaker for answer quality scoring (0–10).  
3. **Feedback Delivery** – WebSocket API Gateway pushes live score and suggested improvements to the front end; results stored in DynamoDB for longitudinal analytics.  
4. **Scalability & Availability** – Serverless stack eliminates cold‑start bottlenecks, auto‑scales with Lambda concurrency; Multi‑AZ S3 + DynamoDB Global Tables guarantees 99.999 % uptime.  
5. **Cost Control** – Spot instances for SageMaker training (≈ 30 % cheaper), use T4g compute for inference; overall projected $0.02 per minute of interview time.

**Result**  
Implemented a prototype in two weeks, ran 50 live tests: average score‑improvement of 1.8 points after the first session, and 70 % of participants reported higher confidence. The solution was adopted company‑wide, saving ~\$15K annually on external coaching services.

**Reflection (Bar‑raiser Lens)**  
- **Ownership** – Took full responsibility from requirement gathering to deployment.  
- **Dive Deep** – Benchmarked multiple NLP models; chose the one with lowest latency while maintaining 92 % accuracy.  
- **Quantified Impact** – Tracked score lift, cost savings, and user engagement metrics.  
- **Learning** – Early version had high false positives; iterated on confidence thresholds after A/B testing, improving precision from 78 % to 94 %.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
