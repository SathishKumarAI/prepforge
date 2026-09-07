---
qid: ing_989013effe__aws__local
question: 'Explain: What they emphasise — Glean'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 587
total_tokens: 815
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T11:10:26-05:00'
sources: []
---

**What Glean emphasizes**

> **Customer Obsession + Invent & Simplify**  
> Glean’s mission is to turn every *document* into a *searchable, actionable knowledge graph*. They focus on delivering instant, context‑aware results across an organization while keeping the user experience frictionless.

### STAR (Behavioral)

| Situation | Task | Action | Result |
|-----------|------|--------|--------|
| In 2022, our client’s internal docs were siloed in SharePoint and Confluence, causing a **25%** drop in employee productivity. | Build an enterprise‑wide search layer that unifies content and surfaces relevant insights within seconds. | Designed a serverless pipeline: ingest → Textract OCR → Comprehend for entity extraction → DynamoDB + OpenSearch domain for indexing; added Lambda authorizers for fine‑grained access control. | 99.9% uptime, **3×** faster query times (0.4 s vs 1.2 s), and a **30%** lift in user satisfaction scores on quarterly surveys. |

### Technical / System Design

- **Requirements:**  
  - Real‑time indexing of ~10M documents, multi‑tenant security, GDPR compliance, cost under $20k/month.
- **Proposed Architecture:**  
  - **S3 + EventBridge → Lambda (OCR/LLM)** → **DynamoDB** for metadata; **OpenSearch Service** for full‑text search.  
  - Use **KMS** and **Cognito** for encryption & auth.  
  - Autoscaling OpenSearch with spot instances to keep cost low.
- **Scalability:** Horizontal scaling via Lambda concurrency, OpenSearch shards.  
- **Availability:** Multi‑AZ deployments, daily snapshots.  
- **Cost Trade‑off:** Spot vs On‑Demand; we chose 80% spot for query nodes, keeping latency <0.5 s.

### Bar‑raiser Checklist

| What they listen for | How I demonstrated it |
|----------------------|------------------------|
| Ownership | Took end‑to‑end responsibility from data ingestion to UX. |
| Dive Deep | Quantified performance gains; logged detailed metrics in CloudWatch. |
| Impact | 30% productivity lift, $20k/month savings. |
| Learning | Iterated on the pipeline after a 12h outage: added retry logic and automated failover, reducing future incidents by 40%. |

**Bottom line:** Glean turns data into *actionable* knowledge while keeping cost, latency, and compliance in check—exactly what AWS services enable at scale.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
