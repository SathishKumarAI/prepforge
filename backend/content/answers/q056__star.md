---
qid: q056
question: "What is the difference between structured, semi-structured, and unstructured data?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Situation** I was designing the storage layer for a new analytics platform that had to ingest transaction tables, event logs, and customer support call recordings all at once, and the team wanted to jam everything into one relational database.

**Task** I needed to pick the right storage and processing approach for each data type instead of forcing one shape on all of them.

**Action** I broke it down by structure. Structured data, like our transaction tables, fits neatly in rows and columns and lives well in PostgreSQL. Semi-structured data, like the JSON event logs, has tags and hierarchy but no rigid schema, so I stored it in a document store and queried it with schema-on-read. Unstructured data, the audio recordings, has no inherent model, so I put it in object storage and ran a speech-to-text step before analysis. Each got a fit-for-purpose pipeline.

**Result** Query performance on the structured side stayed fast while we still captured 100% of the log and audio data, and analysts got clean access to all three. The lesson: match storage to structure rather than flattening everything into tables.
