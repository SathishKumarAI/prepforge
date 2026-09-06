---
qid: ing_7d7cf06b93__think__local
question: 'Explain: Design an agent that takes a draft NDA and returns a redlined
  Word document reflecting the firm''s playbook, not a chat response.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 534
total_tokens: 740
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T09:18:41-05:00'
sources: []
---

**1️⃣ Clarify the task & assumptions**  
- *What is being asked?* Build an AI‑powered agent that ingests a draft NDA (likely in plain text or PDF), applies firm‑specific editing rules, and outputs a Word document with tracked changes (“redlined”).  
- *Assumptions:* The firm’s playbook is codified as a set of style guidelines (phrasing, clauses to add/remove, formatting). Input files are machine‑readable. Output must be compatible with MS Word’s change‑tracking feature.

**2️⃣ Mental model / framework**  
Use a **pipeline architecture**:  
1. *Document ingestion* → parse text & structure.  
2. *Rule engine* → apply playbook rules to generate edits.  
3. *Change‑tracking layer* → produce Word XML with `<w:trackChanges>` tags.  
4. *Output delivery* → save as `.docx` and return.

**3️⃣ Step‑by‑step reasoning**  
- **Ingest:** Convert PDF/Word to a clean text tree (sections, clauses).  
- **Rule matching:** For each clause, run regex or NLP classifiers against playbook rules (e.g., “replace ‘shall’ with ‘must’”). Record intended changes.  
- **Apply edits:** Create an intermediate representation where original and revised texts coexist.  
- **Generate tracked Word:** Use a library like `python-docx` or `docxtpl`, inserting `<w:ins>` and `<w:del>` elements for each change, preserving formatting.  
- **Package & return:** Write the docx to disk/stream, ensuring metadata (author, timestamps) reflects the agent.

**4️⃣ Common traps to avoid**  
- *Ignoring Word’s XML schema:* Direct string edits can corrupt the file; always use a proper API or library.  
- *Over‑aggressive rule application:* Some clauses may be context‑sensitive—implement a confidence score or human‑in‑the‑loop flag.  
- *Performance bottlenecks:* Large NDAs with many rules can slow; batch process or cache parsed structures.

**5️⃣ Sanity‑check & communication**  
- Open the output in Word, verify tracked changes appear correctly and no formatting is lost.  
- Log the number of edits per rule for auditability.  
- Communicate to stakeholders: “The agent ingested your NDA, applied our playbook rules, and returned a Word file with all modifications highlighted—ready for review.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
