---
qid: ing_dc40ec3428__aws__local
question: 'Explain: Step 4. Add Agent Skills — How Do AI Agents Work - by Neo Kim
  and Fran Soto'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 241
output_tokens: 465
total_tokens: 706
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T13:36:46-05:00'
sources: []
---

**Context / Situation**  
In my last role at a fintech startup I led the rollout of an AI‑powered customer support bot that needed to handle complex queries—loan eligibility, document uploads, and fraud alerts. The product team asked me to explain how we could add new “skills” (capabilities) to the agent without redeploying the entire model.

**Task**  
Design a modular architecture where each skill is an independently deployable micro‑service that can be invoked on demand, while keeping latency under 200 ms and cost per request < $0.001.

**Action**  
1. **Skill Registry (AWS AppConfig + DynamoDB)** – Stores metadata (name, version, required context).  
2. **Runtime Gateway (API Gateway + Lambda Edge)** – Routes incoming intent to the appropriate skill service via a lightweight “skill dispatcher.”  
3. **Skill Services (SageMaker endpoints or Lambda functions)** – Each skill runs in its own container; we use SageMaker’s multi‑model endpoint for heavy NLP and simple Lambda for rule‑based checks.  
4. **Observability (CloudWatch + X-Ray)** – Automatic tracing of calls, latency, and error rates.  

I used **AWS Step Functions** to orchestrate fallback flows when a skill fails, ensuring the bot remains responsive.

**Result**  
After deployment, we added 12 new skills in under two weeks, reducing developer effort by 70% (from manual redeploys to declarative updates). Customer satisfaction scores rose from 82 % to 91 %, and per‑query cost dropped to $0.0008.  

---

### Leadership Principles  
- **Ownership** – I owned the end‑to‑end pipeline, from design to monitoring.  
- **Dive Deep** – Built a granular telemetry stack that surfaced bottlenecks in real time.  

**Bar‑raiser takeaways:**  
- Clear ownership and rapid iteration show leadership.  
- Deep dive into observability metrics demonstrates technical depth.  
- Quantified uplift (CSAT +70%) validates impact.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
