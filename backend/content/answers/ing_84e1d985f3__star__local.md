---
qid: ing_84e1d985f3__star__local
question: How do you design tool permissions for an agent, and how do you stop human
  approval gates from becoming rubber-stamping?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 249
output_tokens: 392
total_tokens: 641
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T03:59:08-05:00'
sources: []
---

**Situation** – In my last role at FinTechX we were building a conversational AI that could execute API calls to our payment gateway. Early pilots showed the bot was over‑permitting itself: it could initiate transfers up to 10 % of the user’s balance without human oversight, and reviewers quickly started rubber‑stamping approvals because every request looked “normal.”  

**Task** – I had to create a fine‑grained permission model that let the agent run routine tasks while still enforcing strict human approval for high‑risk actions, and design an audit trail so reviewers could see exactly why a request was allowed or blocked.  

**Action** – I introduced a role‑based access control layer using JSON Web Tokens (JWTs) with custom scopes (“transfer_small”, “transfer_large”). The agent’s policy engine checked the token before each API call and routed “large” requests to an approval queue in Slack, attaching a signed evidence bundle (request payload + contextual logs). I also built a lightweight web UI that displayed the decision tree and the confidence score from our intent classifier. Finally, we set up alerts: any “large transfer” that bypassed human review triggered an automatic rollback after 2 hours.  

**Result** – Within two weeks of deployment, high‑risk transaction approvals dropped from 96% to 4%, while routine small transfers maintained a 99.8% success rate. Reviewers reported the UI saved them 35 minutes per day, and we logged over 3,000 safe transactions without any fraud incidents. I learned that embedding permissions in the token payload and coupling automated checks with transparent audit logs is key to preventing rubber‑stamping while keeping users productive.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
