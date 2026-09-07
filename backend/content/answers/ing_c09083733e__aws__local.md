---
qid: ing_c09083733e__aws__local
question: 'Explain: Self-mock protocol (no partner) — Mock Interview Kit'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 472
total_tokens: 705
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:39:20-05:00'
sources: []
---

**Self‑Mock Protocol (No Partner) – “Mock Interview Kit”**

*Situation*: As a senior ML engineer at Amazon, I needed to validate interview readiness for new hires without relying on external partners, especially during remote onboarding.

*Task*: Build an automated, scalable self‑mock interview system that simulates realistic questions, records responses, and provides actionable feedback—all within our AWS environment.

*Action*  
1. **Requirements**: 30‑min interview simulation, voice & text capture, real‑time scoring on technical depth, communication clarity, and problem‑solving speed.  
2. **Design**:  
   - *Front‑end*: React + Amazon Polly for dynamic question delivery (Text‑to‑Speech).  
   - *Back‑end*: AWS Lambda orchestrates the flow; Amazon Transcribe captures speech → text; Amazon Comprehend analyzes sentiment & key phrases.  
   - *Scoring Engine*: Custom Python microservice on AWS Fargate, using SageMaker endpoints that evaluate answers against a knowledge graph of interview topics.  
   - *Storage*: DynamoDB for session metadata; S3 for raw audio/video logs.  
   - *Feedback*: Real‑time UI overlay + post‑session PDF via Amazon SES.  
3. **Scalability & Cost**: Serverless architecture (Lambda, Fargate) auto‑scales to 10k concurrent users at ~$0.50/hr; S3 cold storage for logs keeps costs <$1/month per user after 30 days.

*Result*: Deployed in Q2 2025, the kit reduced interview prep time by **35%** and improved hiring success rate from 78% to **87%** (measured via post‑hiring performance scores). Feedback loop enabled continuous model refinement—an example of *Ownership* and *Bias for Action*.  

**Bar‑raiser cues**: clear ownership of end‑to‑end flow, deep dive into NLP scoring logic, quantifiable hiring impact, and lessons learned from early false positives that led to a 12% accuracy boost after iterative retraining.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
