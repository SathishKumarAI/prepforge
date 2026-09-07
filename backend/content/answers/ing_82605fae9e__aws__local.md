---
qid: ing_82605fae9e__aws__local
question: Some annotators are pasting your tasks into ChatGPT and submitting the output.
  How do you detect and handle it?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 243
output_tokens: 384
total_tokens: 627
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T10:19:53-05:00'
sources: []
---

**Situation & Task**  
While scaling our AI‑annotation platform to 10k daily users, I noticed a spike in duplicate responses that matched ChatGPT output (≈ 18 % of tasks). The goal was to detect and mitigate this abuse without hurting legitimate annotators.

**Approach (Dive Deep + Ownership)**  
1. **Signal extraction** – built a lightweight NLP model on AWS Comprehend to flag high‑cosine‑similarity text against the ChatGPT corpus (threshold 0.88).  
2. **Audit trail** – stored flagged tasks in an encrypted S3 bucket and triggered a Lambda that queries DynamoDB for user metadata.  
3. **Action** – if a user had > 3 flags in 24 h, we automatically revoked their annotation role via Cognito and sent a remediation email (AWS SES).  

**Result (Deliver Results)**  
- Reduced false‑positive flagging from 12 % to 4 %.  
- Cut duplicate submissions by **72 %**, saving ~$1.8k/month in compute (EC2 spot + SageMaker inference).  
- Maintained annotation throughput at 95 % of target while keeping a 99.9 % availability SLA.

**Learning & Bar‑Raiser Lens**  
I documented the trade‑off between strictness and user friction, iterated on thresholds based on A/B testing, and shared findings in a post‑mortem. This ownership mindset, coupled with data‑driven impact, aligns with Amazon’s **Customer Obsession** (protecting annotator integrity) and **Bias for Action** (rapid deployment of the detection pipeline).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
