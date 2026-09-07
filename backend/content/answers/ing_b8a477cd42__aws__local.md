---
qid: ing_b8a477cd42__aws__local
question: 'Q114: Design a skill system for a fleet of internal agents using Agent
  Skills. How do skills differ from MCP tools and from fine-tuning?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 611
total_tokens: 860
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T12:21:36-05:00'
sources: []
---

**Answer (Amazon‑style)**  

**Situation:**  
I led the redesign of our internal agent fleet for a large retail platform that needed to support 10 k concurrent users and 50 thousand daily queries. The goal was to make agents *adaptive*—able to pick the right “skill” per context—without redeploying code or fine‑tuning every time.

**Task:**  
Build a **Skill System** that:  
1. Keeps skills decoupled from core agent logic (MCP tools).  
2. Allows rapid addition of new capabilities without retraining the base model.  
3. Provides measurable ROI in latency and cost.

**Action:**  

| Design Choice | AWS Service | Reasoning |
|---------------|-------------|-----------|
| **Skill Registry & Metadata Store** | DynamoDB + Lambda authorizer | O(1) lookup, schema‑flexible for skill tags (topic, intent). |
| **Skill Execution Layer** | API Gateway → Step Functions → SageMaker Runtime (inference endpoints) | Orchestrates multi‑step skills; keeps core agent stateless. |
| **Fine‑Tuning vs Skill** | Sagemaker Pipelines (fine‑tune) for *core* model only once a month; Skills use prompt‑engineering & retrieval from knowledge base via Bedrock. | Fine‑tuning is heavy, infrequent; skills are lightweight, plug‑and‑play. |
| **Observability** | CloudWatch + X-Ray | Tracks latency per skill and cost per invocation. |

- **Ownership:** I defined a “Skill Owner” role with CI/CD pipelines (CodePipeline) that could deploy new JSON skill definitions in minutes.  
- **Dive Deep:** Tracked 0.2 ms extra latency per skill, <5 % cost increase vs monolithic model.  
- **Bias for Action:** Rolled out the first “Return‑Policy” skill within two weeks; it reduced manual ticket volume by 30 % and saved ~$15k/month on compute.

**Result:**  

| Metric | Before | After |
|--------|--------|-------|
| Average response latency (ms) | 850 | 860 (+0.2%) |
| Compute cost per query ($/k) | 1.20 | 1.26 (+5%) |
| Customer support tickets handled by skill | 0 | 15 % of total |

**Learnings:**  
- Decoupling skills from core models drastically cuts deployment risk and speeds iteration.  
- Fine‑tuning is still essential for foundational language capabilities; keep it isolated to avoid “model drift” across skills.

**Leadership Principles Highlighted:**  
*Customer Obsession* – faster, more accurate responses improve shopper experience. *Ownership* – clear ownership of skill lifecycle. *Dive Deep* – quantitative monitoring drove iterative improvements.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
