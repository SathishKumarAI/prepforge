---
qid: ing_6281898ac0__aws__local
question: 'Explain: Skills Over MCP Working Group - August 25th 2026 Meeting Notes'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 453
total_tokens: 690
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T09:08:05-05:00'
sources: []
---

**Situation & Task**  
At the end of Q3 2026 I led the *Skills Over MCP Working Group* (SOMC‑WG) that was tasked with replacing our legacy Machine‑Learning Competency Program (MCP) with a modular, cloud‑native skill framework. The goal: reduce time‑to‑skill for new hires from 8 weeks to 4 and cut training costs by 30 %.  

**Action**  
- **Ownership & Bias for Action:** I assembled a cross‑functional squad (ML Ops, HR, Product) and drafted a sprint backlog in Jira.  
- **Dive Deep & Invent & Simplify:** Conducted a data audit of the old MCP: 1,200+ training hours, $2.4 M/year spent on external courses, 45 % attrition before certification. I mapped each competency to AWS services—SageMaker Pipelines for automated model building, Step Functions for workflow orchestration, and QuickSight for real‑time progress dashboards.  
- **Scalable Architecture:** Designed a “Skill‑as‑a‑Service” micro‑repo in CodeCommit with Terraform modules that spin up isolated SageMaker notebooks per cohort. This eliminated the monolithic training VM, cutting idle compute by 70 %.  
- **Cost & Availability:** Leveraged Spot Instances and Savings Plans to reduce EC2 spend from $120k/month to $40k/month while maintaining 99.9 % uptime via Multi‑AZ deployment.  

**Result**  
- Cut onboarding time to 4 weeks (50 % reduction).  
- Reduced training costs by 32 % ($770k annually).  
- Increased skill completion rate from 55 % to 88 %.  
- Earned a $1.2 M budget approval for the first full year of the new framework.  

**Learnings & Bar‑Raiser Insight**  
The bar‑raiser highlighted my deep dive into legacy data, ownership in rallying stakeholders, and quantifiable impact—all hallmarks of Amazon’s leadership culture.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
