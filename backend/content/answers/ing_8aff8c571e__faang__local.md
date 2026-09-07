---
qid: ing_8aff8c571e__faang__local
question: An agentic research query returns a memo citing a case that was overruled.
  Where does that get caught?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 245
output_tokens: 417
total_tokens: 662
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:07:12-05:00'
sources: []
---

**Clarify**  
You’re asking where an AI‑generated memo that cites a *now‑overruled* case would be flagged or corrected in the workflow. I’ll assume: (1) the memo is produced by a language model, (2) it’s used for legal research, and (3) there are internal review checkpoints before distribution.

**Approach**  
Map the pipeline:  
1️⃣ Model output → 2️⃣ Post‑generation QA → 3️⃣ Legal vetting → 4️⃣ Publication.  
Identify where factual integrity is verified—usually in step 2 or 3.  

**Depth**  
- **Model layer:** add a *knowledge‑base consistency check* that cross‑references cited cases against an up‑to‑date legal database (e.g., Westlaw, Lexis). If the case status flag shows “overruled,” inject a warning token.  
- **QA layer:** human reviewers receive the memo with automated flags; they verify citations manually or via a quick API call.  
- **Audit trail:** log every flagged instance and reviewer action for compliance records.  
Complexity: O(n) per citation, negligible latency if database is indexed by case ID.

**Edge Cases**  
- New overruling not yet reflected in the knowledge base → false negatives.  
- Model paraphrases a case name, breaking exact match; fuzzy matching solves this.  
- Multiple jurisdictions—ensure jurisdiction‑specific status lookup.

**Optimize & Communicate**  
Introduce an *“Citation Confidence Score”* that aggregates model certainty and database validity. Present this score to reviewers so they focus on low‑confidence items first. Communicate the system design in a concise slide deck: pipeline diagram, key metrics (flag rate, review time), and rollback procedures for discovered errors. This demonstrates structured problem solving, clear communication, and technical depth—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
