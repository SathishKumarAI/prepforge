---
qid: ing_ed52ea6636__aws__local
question: 'Q: Why is it important to separate "Tool Logic" from the "Agent App" using
  MCP servers?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 385
total_tokens: 626
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T14:15:05-05:00'
sources: []
---

**Answer (Amazon‑style)**  

**Situation / Task:**  
When building a conversational AI that serves multiple clients, we discovered that embedding business rules (“tool logic”) directly inside the agent application caused frequent regressions and slowed feature rollouts.

**Action:**  
I led a refactor to separate tool logic into **Micro‑Containerized Policy (MCP) servers** and let the agent app focus on dialogue flow.  

*Technical design:*  
- **AWS ECS Fargate** hosts each MCP server, scaling automatically with CloudWatch metrics (CPU/Memory).  
- **API Gateway + Lambda** provides a lightweight, versioned REST endpoint for the agent to invoke.  
- **Secrets Manager** stores API keys, ensuring no hard‑coded secrets in the agent container.  

*Why it matters:*  
1️⃣ **Ownership & Customer Obsession:** Clients can update tools without redeploying the entire bot, reducing downtime and improving trust.  
2️⃣ **Dive Deep & Deliver Results:** We logged invocation latency; post‑split latency dropped from 450 ms to 120 ms (≈73% faster) and error rate fell from 3.4% to <0.5%.  

**Result:**  
Deployment frequency for new tool integrations increased from once per quarter to biweekly, cutting release cycle time by 60%. The system now handles 10× the concurrent users with <$2/day additional cost, meeting SLA targets.

**Bar‑raiser takeaways:**  
- Demonstrated ownership of end‑to‑end performance.  
- Quantified impact (latency & error reductions).  
- Showed learning loop: monitored failures, iterated on API contract, and documented best practices for future teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
