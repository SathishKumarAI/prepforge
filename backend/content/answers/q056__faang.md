---
qid: q056
question: "What is the difference between structured, semi-structured, and unstructured data?"
topic: "Data Science"
model: "Claude Code (authored)"
sources: []
---

**Clarify** — I'll assume the interviewer wants clear definitions with examples and the storage/processing implications of each, since that's what makes the distinction useful.

**Approach** — Define the three along a spectrum of how rigidly the data is organized, give examples, then note where each is stored and how it's processed.

**Depth** — The categories sit on a spectrum of schema rigidity. Structured data follows a fixed, predefined schema, rows and columns with typed fields, like a relational database table or CSV. It's easy to query with SQL and analyze directly. Semi-structured data has some organizational tags or markers but no rigid tabular schema, so structure is flexible and self-describing, examples are JSON, XML, and log files with key-value pairs. It's queryable but needs parsing. Unstructured data has no predefined model, free text, images, audio, and video. It carries rich information but requires heavy processing (NLP, computer vision, embeddings) to extract features before analysis. Most enterprise data is unstructured.

**Edge cases** — The boundary is fuzzy: a JSON column inside a SQL table mixes categories; text can be given structure via extraction. Volume skews unstructured, driving different storage.

**Optimize & communicate** — Storage maps to type: relational databases and warehouses for structured, document stores (NoSQL) for semi-structured, data lakes and object storage for unstructured. I'd frame it as a schema-flexibility spectrum rather than three rigid bins, which shows nuanced understanding.
