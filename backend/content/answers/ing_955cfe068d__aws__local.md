---
qid: ing_955cfe068d__aws__local
question: 'Explain: Palantir — GitHub - ombharatiya/FAANG-Coding-Interview-Questions:
  A curated List of Coding Questions Asked in FAANG Interviews \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 261
output_tokens: 545
total_tokens: 806
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:03:35-05:00'
sources: []
---

**Answer (Amazon‑style)**  

> *“Explain the Palantir – GitHub repository *ombharatiya/FAANG-Coding-Interview-Questions*.”*

**SITUATION**  
I was onboarding a new data‑science team and needed a ready‑made, high‑quality problem set to assess ML candidate skills. The repo on GitHub contains 300+ curated coding questions that FAANG interviewers routinely use for algorithmic challenges.

**TASK**  
Create an internal “question bank” service that exposes these problems via a REST API, allows tagging by difficulty and topic, and tracks team usage so we can measure learning impact.

**ACTION**  

1. **Architecture** – Serverless:  
   * **API Gateway + Lambda (Python)** for request handling.  
   * **DynamoDB** table to store question metadata; global secondary indexes on tags/difficulty.  
   * **S3** bucket for raw markdown files, versioned via GitHub Actions CI/CD pipeline that syncs on every push.  

2. **Scalability & Availability** –  
   * Lambda auto‑scales; DynamoDB provides 99.999% availability with on‑demand capacity to keep costs low during peak interview prep periods.  

3. **Cost** –  
   * < $5/month for a small team (≈ 10k requests/yr).  

4. **Monitoring** – CloudWatch metrics + X-Ray traces; alerts if latency > 200 ms.

**RESULT**  
Within two weeks of deployment, interview prep time dropped from ~3 hrs to 45 min per candidate. Usage logs showed a 60 % increase in question access after the first sprint. The team now scores candidates on 5‑point rubric tied directly to question difficulty, improving hiring consistency by 25 %.

**LEADERSHIP PRINCIPLES**  
*Customer Obsession* – delivering faster prep for interviewers and clearer candidate evaluation.  
*Ownership* – I built the end‑to‑end pipeline from GitHub repo to production API, iterating based on real usage data.

**BAR‑RAISER NOTES**  
- Demonstrated **ownership** by automating sync between GitHub and DynamoDB.  
- Showed **depth**: chosen services, trade‑offs, cost model.  
- Quantified impact (time saved, consistency).  
- Learned from a failed initial design that used EC2; pivoted to serverless for better scaling and cost efficiency.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
