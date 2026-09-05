---
qid: ing_9c63f21def__eli5__local
question: 'Explain: Security: ACLs and multi-tenancy — Rag And Retrieval'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 246
total_tokens: 407
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:45:17-05:00'
sources: []
---

Think of a library that serves many schools at once.  
**Multi‑tenancy** is like each school having its own section of shelves—students from one school can only see books in their section, not the others’. The library’s software keeps those sections separate so data stays private.

An **ACL (Access Control List)** is the librarian’s rule book for who may touch which shelf. It says “Teacher A can add or edit books on Shelf 3; Student B can only read Shelf 2.” When a student asks the AI to pull up a document, the system checks both the school section and the ACL rules before handing over the text.

In Retrieval‑Augmented Generation (RAG), the AI first fetches relevant documents from the right “school shelf” and then writes an answer. By combining multi‑tenancy (separate shelves) with ACLs (strict reading/writing rules), the library keeps each school’s information safe while still letting the AI provide useful, on‑demand answers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
