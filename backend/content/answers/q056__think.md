---
qid: q056
question: "What is the difference between structured, semi-structured, and unstructured data?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

1. **Clarify first.** Frame the axis of comparison: *how much predefined schema/organization* each type has, and note that they sit on a spectrum. Assume they want examples and storage/analysis implications.

2. **Mental model.** Line them on a schema continuum: rigid schema, then some tags but no rigid schema, then no schema at all. That single spine organizes the whole answer.

3. **Reason step by step.** Structured: rows/columns with a fixed schema (relational tables, spreadsheets), queried with SQL. Semi-structured: organizational markers but flexible (JSON, XML, YAML, emails), often in NoSQL/document stores. Unstructured: no predefined model (free text, images, audio, video, PDFs), needs NLP/computer vision to analyze and dominates enterprise data volume.

4. **Traps to avoid.** Do not miscategorize JSON/XML as unstructured, they are the canonical semi-structured examples. Do not say unstructured data lives in relational tables, and do not claim the distinction is meaningless.

5. **Sanity-check and communicate.** Check each example lands in the right bucket. Add the practical implication that ties it together: pipelines often convert unstructured/semi-structured data into structured features, and unstructured data (in data lakes) powers most modern ML, which shows you grasp the downstream consequences.
