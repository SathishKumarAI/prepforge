---
qid: ing_86692718ea__aws__local
question: 'Q: Why do we see a trend towards "Programming" (DSPy) instead of "Prompting"?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 412
total_tokens: 653
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:28:23-05:00'
sources: []
---

**Why the shift from “prompting” to “DSPy programming”?**

*Situation:* In a recent client‑onboarding sprint we were asked to build an AI‑driven recommendation engine for a retail platform that had to serve 10 M active users with <200 ms latency. The team initially used pure prompt‑engineering on GPT‑4, but hit performance and cost ceilings.

*Task:* Deliver a scalable solution that reduces API calls by 60% while keeping model quality above 0.88 BLEU for language tasks.

*Action:*  
1. **Ownership & Dive Deep:** I re‑architected the logic into DSPy workflows—modular, typed steps (data ingestion → feature extraction → inference → post‑processing).  
2. **AWS Services:** Deployed each step in **Amazon SageMaker** endpoints, orchestrated via **Step Functions**, and cached frequent responses in **ElastiCache for Redis**.  
3. **Bias for Action & Invent & Simplify:** Added a lightweight rule‑based filter to pre‑validate inputs, cutting GPT calls by 58%. The DSPy codebase (≈ 1 k LOC) is versioned in GitHub Actions with automated unit tests.

*Result:*  
- Cost dropped from $3.2 M/month to $1.4 M/month (56% savings).  
- Latency improved to 150 ms on average, meeting SLA.  
- Model accuracy remained >0.89 BLEU; user satisfaction score rose 12 points.

**Bar‑raiser takeaway:** Demonstrated true ownership by turning a costly prompt‑heavy design into an efficient, maintainable DSPy workflow—showing deep technical understanding, measurable impact, and a learning loop that reduced reliance on expensive prompts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
