---
qid: ing_c078945b17__eli5__local
question: 'Explain: Algorithm Comparison — Vector Databases'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 214
total_tokens: 369
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:41:46-05:00'
sources: []
---

Think of a vector database like a giant library that stores every book as a *fingerprint* instead of a title.  
When you ask for “books about space,” the system first turns your question into its own fingerprint (a vector). It then looks in the library and pulls out the fingerprints that are closest to yours, just as you would pull the books whose covers look most like the one you have in mind.  

*Vector* – a list of numbers that represents something (your book’s content, an image, a sound).  
*Database* – a place where many vectors are kept and can be quickly compared.  

Unlike a regular database that matches exact words, this method measures similarity, so it finds relevant items even if they use different wording or come from different media. The result is a fast, flexible way to search by meaning rather than by exact match.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
