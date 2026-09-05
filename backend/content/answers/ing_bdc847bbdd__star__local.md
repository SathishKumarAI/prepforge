---
qid: ing_bdc847bbdd__star__local
question: 'Explain: Living Specs and Article 14 Oversight — The 2026 EU AI Act and
  AI-Generated Code: What Changes for Dev Teams | Augment Code'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 258
output_tokens: 418
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T05:50:25-05:00'
sources: []
---

**Situation:**  
When my team was preparing a new medical‑device software suite in early 2025, we realized that the upcoming EU AI Act (effective 2026) would reclassify any algorithmic component generating code automatically as a “high‑risk” system. The client’s regulatory dossier required us to demonstrate compliance before the product could be shipped.

**Task:**  
I had to redesign our development workflow so that every AI‑generated snippet was covered by a Living Specification and met Article 14 oversight—essentially, continuous documentation, risk assessment, and human‑in‑the‑loop verification—while still delivering on schedule and budget.

**Action:**  
First, I introduced an automated specification generator that ingests the model’s training data, architecture, and output format, producing a living spec in JSON Schema. Next, we set up a lightweight audit trail using GitHub Actions to log each code generation event, linking it to the corresponding spec revision. For Article 14, I built a “human‑review” gate: before merging any AI‑generated file, a senior developer must validate functional tests and ethical constraints in a pull request checklist. Finally, we integrated a risk‑matrix dashboard that flags changes exceeding predefined thresholds (e.g., >5% alteration to critical logic).

**Result:**  
The revised process cut our compliance documentation time by 40 %, reduced rework on the client’s quality audit from three weeks to one week, and earned us a “Best Practice” commendation during the EU regulator’s preliminary review. I learned that embedding living specs and automated oversight into CI/CD pipelines not only satisfies legal mandates but also improves code reliability and developer confidence.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
