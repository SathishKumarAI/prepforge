---
qid: ing_cfccb7f9ba__eli5__local
question: 'Explain: Evaluation Criteria — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 219
total_tokens: 374
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:04:30-05:00'
sources: []
---

Imagine you’re in a huge library where every book is split into tiny “pages” called **vectors**—numeric fingerprints that capture the book’s content. When someone asks for a story about *rainbow butterflies*, the library’s system doesn’t read each book; it compares the question’s vector to all page vectors, picking those most similar.  

The **evaluation criteria** are like the librarian’s checklist:  
- **Recall** – how many relevant pages the system surfaces (does it find all rainbow‑butterfly stories?).  
- **Precision** – how many of those surfaced pages actually match the request (are the stories truly about rainbow butterflies?).  
- **Latency** – how fast the answers arrive (quickly turning the page).  
- **Scalability** – can the system keep up when the library grows to millions of books?  

These metrics help us judge whether a vector database is “reading” and returning useful, timely information.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
