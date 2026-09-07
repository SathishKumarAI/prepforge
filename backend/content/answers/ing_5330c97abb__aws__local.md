---
qid: ing_5330c97abb__aws__local
question: 'Explain: Scenario 4: Design a code assistant — Question Bank'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 461
total_tokens: 693
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:32:58-05:00'
sources: []
---

**Scenario 4 – Design a Code‑Assistant (AI)**  

*Situation*: Our team was asked to launch an AI‑powered code assistant that could generate snippets, refactor legacy code, and auto‑document APIs for 10,000+ developers across the organization.  
*Task*: Deliver a system that handles 1 M queries/day with <200 ms latency, scales to peak bursts (up to 5×), and stays under $0.05/query.

**Action**  
I scoped requirements by interviewing stakeholders → identified core features: code generation, linting, documentation. I chose **Amazon SageMaker for model training**, **AWS Lambda + API Gateway** for stateless inference, and **Amazon DynamoDB** for caching frequent prompts. To meet latency, I pre‑warm Lambda shards during high‑traffic windows (using CloudWatch Events) and leveraged **Edge Lambda@Edge** to reduce round‑trip time. For cost, I enabled **SageMaker Neo** to compile models for CPU/EFA inference, cutting GPU usage by 60 %.  

I drafted a **CI/CD pipeline** with CodePipeline & SAM templates, ensuring every model version had automated A/B testing against production traffic (50/50 split).  

*Result*: Deployed in 3 weeks; query latency dropped to 180 ms avg. Daily cost fell from $12k to $4.5k (60 % savings). Adoption reached 7,800 developers within the first month, and we logged a 35 % reduction in code review time.

**Leadership Principles Highlighted**  
- **Customer Obsession**: Built features directly from developer feedback.  
- **Ownership & Dive Deep**: Handled end‑to‑end design, cost optimization, and performance tuning.  

*Bar‑raiser focus*: Demonstrated ownership by owning the entire stack, deep dive into AWS services for trade‑offs, quantified impact (cost & latency), and learned from a failed initial Lambda scaling attempt—pivoted to pre‑warm strategy that solved the issue.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
