---
qid: ing_4f3e7533aa__eli5__local
question: 'Q5: How would you evaluate a RAG system?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 287
total_tokens: 446
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:42:41-05:00'
sources: []
---

Imagine a chef who first looks up the best recipe online (the *retrieval* part) and then cooks it in her kitchen, adding her own seasoning (the *generation* part). To judge how good this chef is, you can’t just taste one dish; you need to test several things.

1. **How well does she find recipes?**  
   Check if the ingredients she pulls match what’s actually needed for the dish—this is like measuring *retrieval precision*: are the documents fetched relevant?

2. **Does she cook them correctly?**  
   Taste the final meal and see if it satisfies the taste you expected. That’s *generation quality*: clarity, accuracy, and usefulness of the text produced.

3. **How fast does she work?**  
   Time how long it takes from searching to serving—this reflects system latency.

4. **Does she use her own flavor or just copy the recipe?**  
   Look for originality versus plagiarism, ensuring the model adds value rather than repeating data verbatim.

By scoring each of these aspects and combining them (often with a weighted average), you get an overall evaluation that tells whether the RAG system is finding useful information, turning it into good answers, doing so quickly, and adding real insight.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
