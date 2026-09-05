---
qid: ing_38d9241fd7__think__local
question: 'Explain: Live exercise: here''s our API and a folder of sample support
  tickets. In 60 minutes, build something that would impress a support-team lead.
  Narrate your choices.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 214
output_tokens: 604
total_tokens: 818
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:40:20-05:00'
sources: []
---

**1️⃣ Clarify the goal & constraints**  
- *What is “impressive” for a support‑team lead?* Likely: faster ticket triage, smarter routing, automated responses, or insights into common issues.  
- *Time limit*: 60 min → focus on quick prototyping, not production‑grade code.  
- *Available resources*: API docs (endpoints, auth), sample tickets folder (structure, fields).  
- *Assumptions*: The API supports CRUD on tickets; we can call it from any language; we have no database beyond the API.

**2️⃣ Pick a mental model / framework**  
Use the “Lean Startup” sprint mindset:  
1. Define MVP feature → e.g., an automated ticket‑classification tool.  
2. Sketch data flow: fetch tickets → preprocess → classify → push back or annotate.  
3. Choose tech stack that maximizes speed: Python + FastAPI for a quick web UI, or just a CLI if time is tight.

**3️⃣ Step‑by‑step reasoning**  
1. **Read API spec** – note auth header, pagination, ticket fields (subject, body, priority).  
2. **Load sample tickets** – inspect JSON/CSV; decide on a preprocessing pipeline (lowercase, stop‑words removal).  
3. **Model choice** – use a pre‑trained transformer (e.g., DistilBERT) fine‑tuned on a tiny labeled set (maybe just 5‑10 examples per class).  
4. **Build prototype** – script that:  
   - Calls API to pull recent tickets.  
   - Runs the model to predict category/priority.  
   - Updates ticket via API or writes a comment.  
5. **Demo interface** – simple Flask route showing last 20 tickets with predicted labels; add a “re‑classify” button.

**4️⃣ Common traps to avoid**  
- *Over‑engineering*: don’t build a full UI, just a quick endpoint.  
- *Ignoring auth*: hard‑code token for demo only.  
- *Large model latency*: use a lightweight transformer or even TF-IDF+SVM if time is tight.  
- *Data leakage*: don’t accidentally train on tickets that will be classified in the same run.

**5️⃣ Sanity‑check & verbalize**  
Run through: “I fetched 50 tickets, trained a DistilBERT classifier on 30 labeled samples, predicted categories with ~85 % accuracy on hold‑out, and exposed results via `/predict` endpoint.” If a lead asks why, explain trade‑offs (speed vs. precision) and next steps (add more training data, deploy to Slack bot). This narrative shows clear thinking, quick delivery, and practical impact—exactly what impresses a support‑team lead.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
