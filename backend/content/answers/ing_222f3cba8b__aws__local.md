---
qid: ing_222f3cba8b__aws__local
question: 'Explain: Two-tier human confirmation — Computer Use Agent Production'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 230
output_tokens: 430
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T06:44:20-05:00'
sources: []
---

**Question:** *Explain the “Two‑Tier Human Confirmation – Computer Use Agent Production” approach.*

---

### What I did  
When launching a new AI‑driven recommendation engine for our e‑commerce catalog, I realized that an automated model alone could not guarantee business‑critical quality. I proposed a **two‑tier human confirmation** workflow:  

| Tier | Role | Responsibility |
|------|------|----------------|
| 1️⃣ | *AI Agent* | Generates candidate recommendations, scores them with the latest ML pipeline, and flags any outliers. |
| 2️⃣ | *Human Curator* | Reviews flagged items, validates against brand guidelines, and approves or rejects them before they reach production. |

### Why it mattered (Customer Obsession & Ownership)  
- **Risk Mitigation:** Prevents inappropriate content from surfacing to customers.  
- **Speed vs Accuracy:** Allows the AI to push most recommendations quickly while still catching edge cases.

### Technical design  
1. **Model** – SageMaker endpoint, auto‑scaling based on request volume (10k req/s).  
2. **Human Interface** – Custom UI on AWS AppRunner; uses DynamoDB for flag storage and SQS for queueing review tasks.  
3. **Audit Trail** – CloudTrail logs every approval/rejection with timestamp and reviewer ID.

### Impact (Deliver Results)  
- **Reduction in manual review time:** 70% fewer items required human touch, cutting labor cost by $45K/month.  
- **Customer complaints dropped 35%** within two weeks of deployment.  

### What a bar‑raiser hears  
- *Ownership:* I owned the entire flow from model to production gate.  
- *Dive Deep:* Quantified review load and latency; iterated on SQS batch size for optimal throughput.  
- *Learning from failure:* After an initial false negative, we added a secondary anomaly detector, improving precision by 12%.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
