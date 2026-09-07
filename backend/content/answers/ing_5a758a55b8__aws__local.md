---
qid: ing_5a758a55b8__aws__local
question: 'Explain: 🎬 Mock Interview Kit'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 226
output_tokens: 501
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:50:13-05:00'
sources: []
---

**Answer (Amazon style)**  

> *“In my last role I built a **Mock Interview Kit** to help our data‑science interns land their first roles.”*  

### Situation  
Our internship cohort had a 30 % lower interview pass rate than the industry average because they lacked realistic practice.  

### Task  
Design an end‑to‑end solution that delivers tailored, AI‑generated mock interviews and tracks progress for each intern.

### Action  
1. **Requirements & Architecture** –  
   *Front‑end:* React SPA on S3 + CloudFront (low latency).  
   *Back‑end:* Serverless API (API Gateway + Lambda) in Python, calling OpenAI’s GPT‑4 via the Bedrock runtime for interview questions and realistic answers.  
   *Data Store:* DynamoDB for user state; Step Functions orchestrate multi‑step interview flows.  
   *Analytics:* Athena on S3 logs + QuickSight dashboards to surface pass rates, question difficulty, and time spent.  

2. **Scalability & Availability** – Lambda scales automatically; Bedrock has 99.9 % SLA. Global CloudFront distribution keeps response <200 ms for all interns.  

3. **Cost Control** – Spot‑based Lambda concurrency limits keep compute under $0.02/hr, and we batch GPT calls to reduce token usage by ~25 %.  

4. **Bias for Action & Ownership** – I shipped the MVP in 6 weeks (vs planned 10) and iterated based on live feedback.  

### Result  
- Intern pass rate rose from **30 % → 68 %** within two months.  
- Average interview prep time dropped by **40 %**.  
- The solution is now used by the global Data‑Science Academy, saving ~$15k/yr in external training costs.

---

#### Leadership Principles Highlighted
* **Customer Obsession** – focused on intern success metrics.  
* **Ownership & Dive Deep** – drove end‑to‑end design, cost analysis, and rapid iteration.  

Bar‑raisers look for quantified impact (68 % pass rate), depth in architecture choices (Bedrock vs Lambda), and learning from failure (iterative A/B testing).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
