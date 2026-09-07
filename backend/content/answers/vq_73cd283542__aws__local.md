---
qid: vq_73cd283542__aws__local
question: Do you like to learn about different cultural festivals?
topic: Behavioral
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 380
total_tokens: 609
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:57:55-05:00'
sources: []
---

**Customer Obsession & Ownership**

*Situation:*  
When I joined a global e‑commerce startup, our marketing team launched a “World Fest” campaign to boost engagement across 12 regions. The launch was slated for Q3, but we had no clear insight into which festivals mattered most to each locale.

*Task:*  
I volunteered to own the research and deliver a data‑driven recommendation list that would guide creative assets and budget allocation.

*Action:*  
1. **Dive Deep** – I mapped 300+ cultural events worldwide using public APIs (Eventbrite, Facebook Graph) and cross‑checked with local news feeds.  
2. **Customer Obsession** – Conducted quick surveys (N=4,500) via Amazon Pinpoint to capture sentiment on each festival’s relevance.  
3. **Bias for Action & Invent** – Built a lightweight Lambda pipeline that ingested event data, scored festivals by “Relevance × Engagement Potential,” and stored results in DynamoDB.  
4. **Deliver Results** – Presented the top 15 festivals per region to leadership with a cost‑benefit model (estimated lift: +12% CTR, $1.8M incremental revenue).

*Result:*  
The campaign ran on schedule; we hit a 14% increase in global conversion and saved $250K by reallocating ad spend from low‑impact festivals to the prioritized ones.

**What a bar‑raiser looks for:**  
- Ownership of cross‑functional data pipelines.  
- Deep dive into noisy public datasets, turning them into actionable insights.  
- Quantified impact on revenue and cost.  
- Learning loop: after the first quarter we automated the scoring model with SageMaker to reduce manual review time by 60%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
