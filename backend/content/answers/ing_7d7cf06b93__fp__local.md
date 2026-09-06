---
qid: ing_7d7cf06b93__fp__local
question: 'Explain: Design an agent that takes a draft NDA and returns a redlined
  Word document reflecting the firm''s playbook, not a chat response.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 187
output_tokens: 473
total_tokens: 660
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T20:32:24-05:00'
sources: []
---

**From first principles to a red‑line engine**

1. **Problem statement**  
   A legal firm wants an *automated* way to transform any incoming NDA into a document that already contains the firm’s standardized clauses and annotations—no manual copy‑paste, no human review of each sentence.

2. **Why this must be done**  
   The NDA is a *structured text artifact*: it has a fixed hierarchy (title, sections, paragraphs), a constrained vocabulary (legal terms), and a set of *semantic rules* (e.g., “Clause 5.1 must always reference the firm’s arbitration policy”). Treating it as unstructured text would waste the rich prior knowledge encoded in the playbook.

3. **Core design components**  

   | Layer | Function | Principle |
   |-------|----------|-----------|
   | *Parser* | Tokenise and build a parse tree (XML/DOM) of the draft. | Formal language theory; ensures deterministic access to clauses. |
   | *Schema mapper* | Map each node to an internal schema that captures clause semantics (e.g., `Confidentiality`, `Term`). | Ontology‑based information modelling. |
   | *Rule engine* | Apply playbook rules: insert, replace, or delete nodes; add comments and change formatting. | Constraint satisfaction + logic programming. |
   | *Redliner* | Generate a Word document with tracked changes by converting the updated DOM back to DOCX XML, preserving original content as “original” text and new clauses as “suggested”. | Document versioning (diff) algorithm, leveraging OpenXML specs. |

4. **Non‑obvious insight**  
   Treating the NDA as an *abstract syntax tree* rather than a flat string lets the system reason about clause dependencies (e.g., “if Clause 3 is present, Clause 8 must reference it”). This prevents contradictory edits and guarantees that every redline respects the playbook’s logical structure—something simple regex‑based editors cannot provide.

5. **Output**  
   A DOCX file with tracked changes, ready for review or direct acceptance, fully automating the firm’s compliance workflow.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
