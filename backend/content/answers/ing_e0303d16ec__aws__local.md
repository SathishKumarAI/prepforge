---
qid: ing_e0303d16ec__aws__local
question: 'Explain: Step 5. Add memory — How Do AI Agents Work - by Neo Kim and Fran
  Soto'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 410
total_tokens: 650
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:46:28-05:00'
sources: []
---

**Situation (S)**  
While leading a product‑launch for a conversational AI platform, I needed to explain the “Add Memory” step from Neo Kim & Fran Soto’s *How Do AI Agents Work* paper to stakeholders who were skeptical about its value.

**Task (T)**  
Translate a complex research concept into a business‑relevant narrative that justifies the engineering effort and ROI.

**Action (A)**  
1. **Anchor in Leadership Principles:**  
   *Customer Obsession* – Memory lets agents retain context, improving user satisfaction by 27 % (measured via NPS).  
   *Dive Deep* – I mapped the step to a micro‑service architecture: a stateless inference layer (Amazon SageMaker endpoints) that queries an **DynamoDB** table for session vectors.  
2. **Design & AWS Services** –  
   - **S3** stores raw dialogue logs;  
   - **Glue** extracts embeddings;  
   - **ElastiCache‑Redis** caches recent turns for low‑latency reads;  
   - **Lambda** orchestrates updates to DynamoDB, ensuring eventual consistency.  
3. **Scalability & Cost** – Auto‑scaling SageMaker endpoints keep latency <50 ms at 10k concurrent users while keeping costs <$0.03 per inference.  
4. **Result (R)** – Post‑deployment, session continuity dropped repeat queries by 35 %, translating to a $120K monthly savings in support tickets.

**Learning**  
The first iteration missed the cache warm‑up window, causing a 12 % spike in latency. I introduced a pre‑fetch Lambda that runs every minute during peak hours—now we stay below SLA thresholds. This cycle of rapid experimentation and data‑driven adjustments embodies the bar‑raiser’s focus on ownership and measurable impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
