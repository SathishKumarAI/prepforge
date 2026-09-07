---
qid: ing_94c77dda9f__aws__local
question: 'Explain: Tier 3 - frontier model / human review — Content Moderation Pipeline'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 483
total_tokens: 718
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:02:17-05:00'
sources: []
---

**Situation (S)**  
While leading the new AI‑driven content moderation service for our global marketplace, we needed a Tier 3 “frontier model + human review” pipeline to catch nuanced policy violations that automated classifiers missed.

**Task (T)**  
Design an end‑to‑end system that scales to 10 M daily posts, guarantees <5 s latency for flagged content, and keeps the human review queue at ≤2 % of total traffic without overspending.

**Action (A)**  
1. **Frontier model** – Trained a transformer (BERT‑based) fine‑tuned on 200k manually labeled examples, deployed behind an autoscaling *AWS SageMaker Endpoint* with GPU instances (p3.8xlarge).  
2. **Human review layer** – Flagged items routed to a *Step Functions* workflow that queues into *Amazon SQS* (visibility timeout 10 min) and triggers *Lambda* workers pulling from an *Amazon DynamoDB* table for reviewer assignment.  
3. **Feedback loop** – Each review updates the model via incremental learning in *SageMaker Ground Truth*, retraining nightly.  
4. **Cost & availability** – Spot instances reduce compute cost by 35 %; Multi‑AZ SQS + DynamoDB ensures 99.999 % availability; Lambda concurrency capped to prevent queue backlogs.

**Result (R)**  
Within three months, false‑positive rate dropped from 12 % to 3 %, human review latency fell to 2.8 s, and overall moderation cost decreased by $450k annually. The system now processes 10 M posts/day with a 99.9 % success rate.

**Leadership Principles Highlighted**  
- **Customer Obsession** – Delivering accurate, fast moderation protects user trust.  
- **Ownership & Dive Deep** – Built an end‑to‑end pipeline, continuously refined models based on real feedback.  

*Bar‑raiser check:* Demonstrated ownership of the full lifecycle, deep technical understanding (SageMaker, Step Functions), quantified impact, and iterative learning from failure (false positives).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
