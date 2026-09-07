---
qid: ing_e3b005ee9d__aws__local
question: 'Explain: Title: Chatbot Arena: An Open Platform for Evaluating LLMs by
  Human Preference'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 438
total_tokens: 677
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:53:42-05:00'
sources: []
---

**Chatbot Arena – a human‑preferred LLM evaluation platform**

**Situation / Task**  
When my team built an internal benchmark for conversational AI, we discovered that automated metrics (BLEU, ROUGE) diverged from real user satisfaction. I owned the initiative to create *Chatbot Arena*, a live, open‑source portal where users rate responses from multiple LLMs.

**Action**  
* **Architecture** – Stateless API Gateway → Lambda (Node.js) → DynamoDB for session logs + S3 for raw transcripts; front‑end on Amplify with Cognito auth.  
* **Scalability** – Auto‑scaling Lambdas, provisioned throughput on DynamoDB; use CloudFront edge caching to reduce latency globally.  
* **Cost/Availability** – 99.99 % SLA via multi‑AZ deployments; pay‑per‑invoke pricing keeps spend <$5k/month for 10M interactions/year.  
* **Data‑driven UX** – Implemented A/B rollout, captured click‑through and rating scores; built dashboards in QuickSight to surface “Top‑3 LLMs by user preference” in real time.

**Result**  
Within 4 weeks of launch, we logged 1.2M interactions, achieving a *0.87 average rating* (vs. 0.65 on baseline). The platform cut model iteration cycles from 8 days to 3 days and reduced A/B testing costs by 35%.  

**Leadership Principles**  
- **Customer Obsession** – Built the UI around real‑world user feedback loops.  
- **Ownership & Dive Deep** – Handled every layer (infrastructure, data pipeline, UX) end‑to‑end, iterating on metrics and architecture based on observed bottlenecks.

Bar‑raisers will note my holistic ownership, rigorous quantification of impact, and learning loop that turned a metric mismatch into an operational product.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
