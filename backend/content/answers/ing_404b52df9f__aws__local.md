---
qid: ing_404b52df9f__aws__local
question: 'Explain: Example 1: Check for Markdown in Text Messages'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 231
output_tokens: 424
total_tokens: 655
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:51:15-05:00'
sources: []
---

**Situation & Task (S)**  
While launching a real‑time customer support chat for our SaaS platform, we discovered that users were pasting Markdown in the message field. The UI rendered it as raw text, breaking the user experience and causing a 12 % drop in NPS for the chat feature.

**Action (A)**  
I took full ownership:  
1. **Requirements & Design** – Build an idempotent micro‑service that sanitizes Markdown, preserving formatting but stripping unsafe tags.  
2. **AWS Stack** – API Gateway → Lambda (Python) → DynamoDB for audit logs; optional SQS if we anticipate burst traffic.  
3. **Implementation** – Use `markdown-it` in Lambda to parse & whitelist allowed tokens, then return safe HTML.  
4. **Testing & Rollout** – Deploy via CodePipeline with Canary 5 % traffic, monitor latency (≤50 ms) and error rate (<0.01%).  

**Result (R)**  
Within two weeks the feature was live:  
* NPS for chat rose from 72 to 84 (+12 pts).  
* Serverless architecture cut ops cost by 35 % vs our previous EC2‑based parser.  
* 99.999% availability achieved through Lambda’s built‑in scaling and DynamoDB’s global replication.

**Learnings (L)**  
I dove deep into parsing edge cases (nested lists, code blocks) that initially caused 3 % false positives—fixed with a custom rule set. This experience reinforced the *Customer Obsession* principle by turning a pain point into measurable delight, and *Ownership* by delivering an end‑to‑end solution within budget and SLA constraints.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
