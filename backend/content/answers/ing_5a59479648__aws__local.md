---
qid: ing_5a59479648__aws__local
question: 'Explain: System Design Interview Angle — Tool Use Landscape'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 229
output_tokens: 615
total_tokens: 844
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T08:50:00-05:00'
sources: []
---

**Situation (S)**  
I led the redesign of our internal “AI Tool Use Landscape” at a SaaS company that had 2 M monthly active users and over 10 000 AI‑powered workflows across 30 teams. The legacy tool‑catalog was siloed, hard to discover, and caused duplicate effort.

**Task (T)**  
Build a unified, searchable, governance platform that scales globally, enforces policy, and drives measurable adoption—while staying cost‑effective for the enterprise budget.

**Action (A)**  

| Design choice | AWS service | Why |
|---------------|-------------|-----|
| Central metadata store | **Amazon DynamoDB** + **DAX** | 99.999 % availability, low latency at scale; DAX caches reduce read costs by ~70%. |
| Search & recommendation | **OpenSearch Service** (managed) | Full‑text search + AI‑based relevance; auto‑scales with traffic spikes. |
| Policy enforcement | **AWS Lambda + Step Functions** | Serverless compute, zero ops, pay‑per‑execution; 99.9 % SLA via Step Functions state machine. |
| Analytics & metrics | **Amazon QuickSight** + **Athena** on S3 | Self‑service dashboards with ad‑hoc queries; pay only for scanned data. |
| CI/CD & security | **AWS CodePipeline / IAM roles** | Strict least‑privilege, automated rollouts; 100 % audit trail in CloudTrail. |

I introduced a “Discovery Score” metric: the percentage of workflows linked to at least one approved AI tool. Adoption rose from 12 % to **58 %** within three months—cutting duplicated effort by **42 %** and saving $0.8 M annually.

**Result (R)**  
The platform now supports >50 K API calls/sec with <10 ms latency, 99.99 % uptime, and an annual cost of $1.2 M versus the previous $3.5 M infrastructure spend.

---

### Leadership Principles Anchored
- **Customer Obsession** – built features that directly cut developer toil.  
- **Ownership** – drove end‑to‑end delivery and post‑launch monitoring.

### What a Bar‑Raiser Listens For
- Deep dive into trade‑offs (e.g., DynamoDB vs RDS).  
- Quantified impact (metrics above).  
- Learning from failure: early prototype hit 400 ms latency; we pivoted to DAX, learned cache invalidation patterns.  

This showcases ownership, depth, and data‑driven results—core Amazon qualities.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
