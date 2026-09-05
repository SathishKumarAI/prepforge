---
qid: ing_336fe1615f__star__local
question: 'Explain: Ani Galstian — The 2026 EU AI Act and AI-Generated Code: What
  Changes for Dev Teams | Augment Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 254
output_tokens: 364
total_tokens: 618
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T00:11:36-05:00'
sources: []
---

**Situation:**  
When my team was building a new micro‑service in the cloud, we started using an LLM to auto‑generate boilerplate code for API endpoints and database migrations. By September 2025 we had about 30 % of our commits coming from the model, but we hadn’t considered how the upcoming EU AI Act would treat that code as “AI‑generated”.

**Task:**  
I needed to ensure compliance before we shipped the feature in Q3 2026: identify all AI‑generated artifacts, document their provenance, and set up a review pipeline that met the Act’s transparency and safety requirements.

**Action:**  
1. Created a tagging system (`ai-generated:true`) in our Git repo and a CI job that flags any file with that tag.  
2. Added an automated linting step that runs the model’s output through a static‑analysis tool (SonarQube) to catch bias or insecure patterns.  
3. Built a lightweight dashboard that lists all AI‑generated lines, their origin prompt, and a human reviewer score.  
4. Drafted a policy memo for legal that mapped each compliance requirement (risk assessment, data protection impact analysis) to concrete code‑review checkpoints.

**Result:**  
We reduced the time from commit to production by 15 % while meeting the Act’s transparency audit trail. The dashboard was adopted company‑wide, and we avoided a regulatory penalty that could have cost €250k in fines. I learned that proactive tooling and clear documentation turn legal risk into a competitive advantage for dev teams.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
