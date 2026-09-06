---
qid: ing_d6671fa6d3__think__local
question: 'Explain: You have two days in our codebase and no assigned task. What do
  you build, and how do you spend the time? (The work-trial meta-question.)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 214
output_tokens: 385
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T15:04:21-05:00'
sources: []
---

**1️⃣ Clarify first + assumptions**  
- Ask what “two days” means in context: are we allowed to touch any module, or only the parts I’m familiar with?  
- Assume I have no blockers, but must deliver something demonstrable within 48 h and that it aligns with product goals.  

**2️⃣ Mental model / framework**  
Use a *value‑first* approach:  
1. Identify a high‑impact pain point (bug, slow query, missing feature).  
2. Validate its priority with stakeholders or data (e.g., user feedback, analytics).  
3. Pick a small, self‑contained scope that can be fully tested and reviewed.  

**3️⃣ Step‑by‑step reasoning**  
1. Scan the repo for recent commits/issues flagged “urgent” or “needs refactor”.  
2. Choose one (e.g., an endpoint returning stale data).  
3. Outline a quick fix: write unit tests, patch logic, run integration test.  
4. Document changes and add a short demo or regression note.  

**4️⃣ Common traps to avoid**  
- *Scope creep*: don’t start on a feature that will require weeks of design.  
- *Assuming “it works”*: always verify with tests; a quick manual check is not enough.  
- *Ignoring communication*: fail to update the team leads or Slack channel.  

**5️⃣ Sanity‑check & communicate out loud**  
Re‑read the problem statement, confirm that my chosen task directly addresses it, and then share a concise status: “I’ll refactor X endpoint to eliminate Y latency; expect commit by end of day 2.” This shows intentionality, keeps expectations clear, and demonstrates disciplined time use.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
