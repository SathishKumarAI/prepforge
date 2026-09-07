---
qid: ing_12b0f21aa4__aws__local
question: 'Explain: API vs Self-Hosted — Llm Infrastructure'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 440
total_tokens: 670
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:07:41-05:00'
sources: []
---

**Situation & Task (Customer Obsession, Ownership)**  
I was hired as a solutions architect for an e‑commerce startup that wanted to add conversational AI to its helpdesk. The product manager asked whether we should build our own LLM stack or consume a managed API (e.g., OpenAI).  

**Action (Dive Deep, Bias for Action)**  
I mapped the requirements: 1 M monthly active users, < 3 s response latency, GDPR‑compliant data handling, and $200k annual budget. I benchmarked three options:

| Option | Avg Latency | Cost/10k req | Data control | SLA |
|--------|-------------|--------------|--------------|-----|
| OpenAI API | 0.8 s | $0.0004 | Limited | 99.9% |
| Self‑host on EC2 + S3 | 1.5 s | $0.003 | Full | 99.7% |
| SageMaker Endpoint (managed) | 0.9 s | $0.001 | Moderate | 99.95% |

I chose **SageMaker**: it hit latency targets, kept costs under budget, and allowed us to encrypt data at rest in KMS. I designed a blue‑green deployment pipeline with CloudWatch alarms for response time spikes and a fallback lambda that routes to the API if latency > 1.2 s.

**Result (Deliver Results)**  
We launched in 6 weeks, achieved < 0.9 s median latency, and reduced support tickets by **32%** within two months—$50k/month savings on live agents.  

**Learning & Bar‑raiser Insight**  
The bar‑raiser looked for ownership of the trade‑off analysis, depth in cost/latency modeling, quantified business impact, and a clear fallback plan after the initial failure (API throttling). This approach kept us aligned with Amazon’s “Customer Obsession” while delivering measurable results.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
