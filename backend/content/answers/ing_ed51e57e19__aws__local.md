---
qid: ing_ed51e57e19__aws__local
question: 'Explain: Role-Targeted Mock Interviews — Data Science & AI Interview Prep
  | StrataScratch'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 456
total_tokens: 694
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:14:56-05:00'
sources: []
---

**Customer Obsession + Ownership**

*Situation*: A client in fintech wanted a ready‑to‑use platform that could run data‑science and AI mock interviews for hiring teams.  
*Task*: Deliver an end‑to‑end solution that scales to thousands of concurrent interview sessions, guarantees low latency, and provides analytics on candidate performance.

*Action*:  
- **Architecture**: Built a serverless stack on **AWS Lambda** (Python 3.11) triggered by API Gateway for each interview request.  
- **Data Layer**: Stored interview scripts, question pools, and results in **Amazon DynamoDB** with a global secondary index for skill tags; used **Amazon S3** to host large media assets.  
- **AI Service**: Integrated **Amazon SageMaker** endpoints for real‑time NLP scoring of candidate answers (BERT‑based model) and **AWS Comprehend** for sentiment analysis.  
- **Scalability/Availability**: Lambda’s auto‑scaling handled 10k RPS; DynamoDB provisioned throughput with on‑demand mode to avoid throttling. Global replication via **DynamoDB global tables** ensured sub‑200 ms latency worldwide.  
- **Cost Control**: Employed spot instances for SageMaker training, used Lambda reserved concurrency to cap peak costs—overall 30% cheaper than a provisioned EC2 solution.

*Result*: The platform launched in 6 weeks; interview sessions grew from 0 → 3,200 per month with < 1% error rate. Client reported a **45% faster hiring cycle** and a **$120k annual savings** on third‑party interview services.  
*Learning*: Initially over‑provisioned Lambda memory, causing cold‑start spikes; refined monitoring with CloudWatch Alarms and introduced provisioned concurrency to stabilize response times.

---

> **Bar‑raiser note**: Look for ownership of every layer, deep dive into performance metrics (latency, cost per interview), and clear evidence that failure was analyzed and improved upon.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
