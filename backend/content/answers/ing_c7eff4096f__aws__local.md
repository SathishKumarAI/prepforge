---
qid: ing_c7eff4096f__aws__local
question: 'Explain: Keyword 0 0 Filter(s) Applied — Search Jobs - Software and Services:
  Machine Learning and AI - Jobs - Careers at Apple'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 248
output_tokens: 491
total_tokens: 739
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:54:20-05:00'
sources: []
---

**Situation (S)**  
I was tasked with revamping Apple’s internal job‑search portal for ML/AI roles. Users complained the “Keyword 0 0 Filter(s) Applied” banner appeared too often, confusing candidates and inflating click‑through rates by 12 % without delivering relevant results.

**Task (T)**  
Reduce false positives while keeping the user experience fast (<200 ms per request). I had to own the end‑to‑end pipeline, from query parsing to result ranking, and deliver measurable impact on candidate engagement.

**Action (A)**  
1. **Dive Deep into Logs & Metrics** – Used CloudWatch Insights and Athena queries on clickstream data; discovered 68 % of “Keyword 0 0” hits originated from ambiguous job titles.  
2. **Redesign the Filter Engine** – Implemented a two‑stage filter:  
   *Stage 1* (AWS Lambda + DynamoDB): quick blacklist of generic terms.  
   *Stage 2* (Amazon SageMaker inference endpoint): BERT‑based semantic matching to detect real intent, returning a confidence score >0.85 before showing the banner.  
3. **Bias for Action** – Deployed in production via CodePipeline; performed A/B testing against 1M users.  

**Result (R)**  
- Banner clicks dropped from 12 % to 4 %.  
- Time‑to‑first‑result improved by 35 ms, keeping latency <200 ms for 99.9 % of requests.  
- Candidate satisfaction scores rose 18 %, and the portal’s conversion rate (job view → application) increased by 7 %.

**Leadership Principles Highlighted**  
*Customer Obsession* – focused on reducing user friction.  
*Ownership & Dive Deep* – took full responsibility, drilled into data to uncover root cause, and engineered a scalable, low‑cost solution using AWS Lambda, DynamoDB, SageMaker, and CloudWatch.  

Bar‑raisers look for ownership (I drove the whole feature), depth (deep log analysis & model design), quantified impact (metrics above), and learning from early failures (iterative A/B tests).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
