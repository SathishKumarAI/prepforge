---
qid: ing_3ab8f4417f__eli5__local
question: How do you evaluate whether a pipeline change - parser, chunker, embedding
  model - made retrieval better or worse?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 170
output_tokens: 223
total_tokens: 393
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:09:16-05:00'
sources: []
---

Think of your AI system like a library that wants to find the right book quickly.  
A *parser* is the librarian who reads the title and splits it into key words; a *chunker* decides how big each page fragment should be; an *embedding model* turns those fragments into a digital fingerprint so the computer can compare them.

To know if changing one of these tools helped or hurt, you run a **test book search**:  
1. Pick a set of 100 questions (the “search queries”).  
2. For each query, let the old pipeline and the new pipeline fetch a list of top‑10 books.  
3. Measure how many of those lists contain the correct answer using metrics like *Recall@10* or *Mean Reciprocal Rank*.  

If the numbers go up, the new tool made retrieval better; if they drop, it’s worse. It’s just comparing two librarians’ performance on the same set of tests.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
