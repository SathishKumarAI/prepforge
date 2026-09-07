---
qid: ing_306fd9c980__aws__local
question: 'Explain: Where to go next — Glossary'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 485
total_tokens: 713
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:14:40-05:00'
sources: []
---

**Where do I go next—Glossary of AI Terms?**  
*Leadership Principles: Customer Obsession & Dive Deep*

**Situation** – My product team launched an internal chatbot that answered user queries, but adoption stalled because engineers and customers kept asking “What’s the difference between *model*, *algorithm*, and *dataset*?” The glossary was missing.  

**Task** – Deliver a living AI‑terminology resource that reduces friction for both developers and non‑technical stakeholders, while ensuring it scales with our product roadmap.

**Action**  
1. **Research & Curate** – I gathered 60 core concepts (e.g., *model*, *algorithm*, *dataset*, *training loop*, *inference latency*, *bias mitigation*) from the AWS AI/ML whitepapers and open‑source docs.  
2. **Structure for Impact** – Created a two‑tier hierarchy:  
   * Tier 1: “Foundational” vs. “Advanced”.  
   * Tier 2: Cross‑cutting tags (e.g., *Performance*, *Ethics*, *Deployment*).  
3. **Platform & Services** – Hosted the glossary in an AWS Amplify front end, backed by DynamoDB for fast reads and S3 for versioned markdown files. Used CloudFront CDN to serve globally with < 200 ms latency.  
4. **Governance** – Implemented a lightweight review workflow (Lambda + SNS) so any team member can propose edits; approvals go through a senior ML engineer.  
5. **Measure Success** – Tracked page views, time‑to‑answer on support tickets, and adoption of new features.

**Result** – Within 4 weeks:  
* 75% drop in “definition” questions (from 120/day to 30/day).  
* New feature sign‑ups increased by 28% because engineers could quickly understand prerequisites.  
* Cost < $200/month (Amplify + DynamoDB) while serving > 10k requests/day.

**Takeaway** – By owning the knowledge base, diving deep into user pain points, and leveraging AWS services for scalability & low cost, we turned a bottleneck into a customer‑centric asset that fuels product velocity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
