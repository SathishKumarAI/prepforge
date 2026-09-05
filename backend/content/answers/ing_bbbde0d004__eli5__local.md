---
qid: ing_bbbde0d004__eli5__local
question: 'Explain: Query an Absent URL — Bloom Filters | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 381
total_tokens: 542
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T13:35:00-05:00'
sources: []
---

Imagine you’re at a big library that keeps track of every book in its catalog, but it can’t afford to write down each title on paper because that would take forever and cost a fortune. Instead, the librarian uses a clever trick: she rolls up a long strip of rubber bands (the *bloom filter*) and pretends each band is a tiny “yes/no” question about whether a book might be in the library.

When someone asks if a particular book (say, *The Odyssey*) is present, the librarian quickly checks a few spots on the rubber strip—she doesn’t look at every single one. If any of those spots say “no,” she knows for sure the book isn’t there and can immediately answer “not in the library.” If all checked spots say “yes,” she says “maybe” – it could be present, or it might just be a coincidence caused by another book’s rubber band touching the same spots. That small chance of a false “maybe” is called a *false positive*.

A Bloom filter works exactly like that:  
- **Hash functions** are the quick checks on the strip; they convert a URL into several positions in an array of bits.  
- **Bits set to 1** mean “this URL might be stored.”  
- When you query an absent URL, you see if all its hashed positions are 1. If any is 0, it’s definitely absent. If all are 1, you can’t be sure—there’s a tiny risk of a false positive.

So, querying an absent URL with a Bloom filter is like asking the librarian to quickly check the rubber band strip: if she sees any “no,” the answer is certainly “absent.” Otherwise, she says “maybe” and you accept that small chance of error.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
