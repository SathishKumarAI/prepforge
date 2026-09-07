---
qid: ing_487eb77d6a__aws__local
question: 'Explain: Layer 6: Presentation — OSI Model | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 423
total_tokens: 657
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:09:18-05:00'
sources: []
---

**Situation & Task (Customer Obsession)**  
In my last role I led the redesign of our customer‑facing recommendation engine. The existing presentation layer (Layer 6) was a monolithic Flask app that rendered HTML from raw model outputs, causing 35 % slower page loads during peak traffic and leading to a 12 % drop in conversion rates.

**Action (Dive Deep & Ownership)**  
1. **Requirement clarification** – I scoped the need for real‑time rendering, mobile responsiveness, and A/B testability.  
2. **Architecture proposal** – Switched from monolith to a *server‑less* presentation stack:  
   - **API Gateway + Lambda** for stateless request handling (auto‑scales to 10 k RPS).  
   - **Amazon S3 + CloudFront** to host static assets and pre‑rendered JSON templates.  
   - **AWS Amplify** with React for client‑side rendering, consuming the Lambda endpoint.  
3. **Scalability & Availability** – API Gateway guarantees 99.999 % uptime; Lambda’s provisioned concurrency eliminates cold starts. CloudFront reduces latency to <50 ms globally.  
4. **Cost trade‑offs** – Server‑less eliminates idle VM costs, cutting the presentation layer spend from $12k/month to $3k/month (75 % savings).  

**Result (Deliver Results)**  
- Page load time dropped 42 %, improving conversion by 18 %.  
- Peak traffic handled 7× more requests without additional engineering effort.  
- Operational cost reduced by $9k/month, freeing budget for model training.

**Learning & Bar‑raiser cues** – I documented the failure modes of the monolith, shared a post‑mortem with the team, and set up automated performance dashboards in CloudWatch. This ownership mindset ensured we caught regressions early and kept the customer experience first.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
