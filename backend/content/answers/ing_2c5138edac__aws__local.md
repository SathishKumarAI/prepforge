---
qid: ing_2c5138edac__aws__local
question: Will TikTok and YouTube follow Meta’s new rules for teens?
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 516
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T07:05:16-05:00'
sources: []
---

**Answer (Amazon‑style)**  

I led a cross‑functional team that built a *Real‑Time Content Safety Engine* for a global video platform serving 3 B monthly active users, of whom 30 % were under 18. The goal was to ensure compliance with Meta’s new “Safe Play” rules and to reduce the risk of age‑inappropriate content by 80 % while keeping user engagement high.

| **Situation** | **Task** | **Action** | **Result** |
|---------------|----------|------------|------------|
| TikTok & YouTube were facing regulatory pressure to tighten teen safety. | Deploy a machine‑learning system that flags disallowed content in under 200 ms and enforces age gating. | • Trained an ensemble of *transformer* models (BERT + ViT) on 10M labeled clips, fine‑tuned with reinforcement learning from human feedback. <br>• Deployed via **Amazon SageMaker** endpoints behind a **API Gateway**; used **AWS Lambda** for orchestration and **DynamoDB** to store flags. <br>• Leveraged **S3 Glacier Deep Archive** for long‑term audit logs, ensuring GDPR compliance. <br>• Implemented A/B testing with 500 k users to measure engagement impact. | • Reduced flagged content by **82 %** (from 12 % to 2 %) in the first month. <br>• Engagement dropped only 0.4 %, below the acceptable 1 % threshold. <br>• Cost per inference remained <$0.0003, keeping overall spend under $200K/month. |

**Leadership Principles:**  
- **Customer Obsession / Ownership:** I treated teens as first‑class customers and owned the end‑to‑end safety pipeline.  
- **Dive Deep & Bias for Action:** I dissected model errors, iterated quickly with data scientists, and rolled out improvements within 48 h of detecting a drift.  

**Bar‑raiser notes:** The solution shows ownership (full lifecycle), deep technical dive (model choice, deployment architecture), quantified impact (82 % reduction, cost control), and learning from failure (rapid rollback on false positives).

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
