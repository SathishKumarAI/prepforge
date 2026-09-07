---
qid: ing_87bacc3a44__aws__local
question: 'Explain: The Job Specifications: Must-Have vs. Nice-to-Have Skills'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 516
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:31:05-05:00'
sources: []
---

**Situation (S)**  
When launching a new AI‑platform in Q2 2024, we had to build an internal “Job Spec Matcher” that could automatically rank candidate skills as *Must‑Have* or *Nice‑to‑Have*. The goal was to cut hiring time by 40 % and improve fit scores from 70 % to >85 %.

**Task (T)**  
I owned the end‑to‑end solution: ingesting millions of job postings, normalizing skill vocabularies, scoring candidates against each spec, and delivering a real‑time API for recruiters.

**Action (A)**  
1. **Data‑driven requirement gathering** – interviewed 12 hiring managers; mapped 3 k unique skills to 2 k high‑impact “must” categories using TF‑IDF on job titles.  
2. **Design** – built a microservice architecture in AWS:  
   * **Amazon S3 + Glue** for raw data ingestion and ETL.  
   * **Amazon SageMaker** training a BERT fine‑tuned model to classify skills (accuracy = 92 %).  
   * **DynamoDB** as low‑latency key/value store for skill taxonomy.  
   * **API Gateway + Lambda** for the public API; **AppSync** for GraphQL queries.  
3. **Scalability/Availability** – autoscaling Lambda, multi‑AZ DynamoDB, and CloudFront caching reduced latency to <120 ms globally.  
4. **Cost control** – reserved instances on SageMaker (‑35 %) + spot training jobs; overall spend cut 25 % vs. on‑prem.

**Result (R)**  
- Hiring time dropped from 12 days to 7 days (−42 %).  
- Candidate fit score increased to 88 %.  
- Model drift monitoring via CloudWatch triggered retraining every 90 days, preventing accuracy loss.

---

### Leadership Principles Highlighted
* **Ownership** – led the project through all phases.  
* **Dive Deep** – built and tuned a custom NLP pipeline; quantified every trade‑off.  

Bar‑raisers will notice my focus on measurable impact, deep technical justification, and continuous learning from model drift alerts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
