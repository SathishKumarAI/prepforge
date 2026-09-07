---
qid: ing_dcd24cdabb__faang__local
question: 'Explain: A customer signed a contract because their CEO said "we need AI."
  They can''t articulate a use case. Walk me through your first two weeks.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 253
output_tokens: 476
total_tokens: 729
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T03:11:54-05:00'
sources: []
---

**Clarify**  
I’d start by confirming the scope: *What does “AI” mean for this client?* Do they want generative models, recommendation engines, or process automation? I’ll ask about their current pain points, data assets, and the CEO’s vision. It’s also essential to understand constraints—budget, timeline, regulatory concerns, and any existing tech stack.

**Approach**  
Week 1:  
- **Discovery (2 days):** Stakeholder interviews, review of business metrics, and audit of data pipelines.  
- **Rapid Prototyping (3 days):** Build a minimal viable “use‑case” demo—e.g., an NLP summarizer for customer emails or a predictive model for churn.  
- **Validation (2 days):** Run the prototype against real data; gather feedback from end users and quantify ROI.

Week 2:  
- **Architecture Design (3 days):** Define scalable, secure infrastructure (cloud services, CI/CD, monitoring).  
- **Roadmap & Governance (2 days):** Draft a phased rollout plan with milestones, success metrics, and governance policies for model drift.  
- **Stakeholder Alignment (1 day):** Present the roadmap to executives; refine based on their feedback.

**Depth**  
The prototype will use an open‑source transformer fine‑tuned on internal data, deployed via serverless functions to keep latency low. Complexity: O(n) for inference per request; cost‑effective scaling with auto‑healing. Trade‑offs: quick wins vs. long‑term model ownership—initially rely on managed services, later transition to in‑house.

**Edge Cases**  
- Data privacy violations (GDPR/CCPA).  
- Model bias or hallucinations that could damage brand trust.  
- Integration friction with legacy systems. I’ll design tests for these scenarios early.

**Optimize & Communicate**  
I’d iterate on the prototype, tightening latency and accuracy, while documenting every decision. In meetings, I’ll narrate: *“We identified X pain point → built Y demo → validated ROI → now we have a scalable roadmap.”* This keeps stakeholders aligned and demonstrates measurable progress within two weeks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
