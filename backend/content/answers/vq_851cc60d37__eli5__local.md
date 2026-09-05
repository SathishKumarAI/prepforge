---
qid: vq_851cc60d37__eli5__local
question: what is reducer in hadoop?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 155
output_tokens: 236
total_tokens: 391
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:18:37-05:00'
sources: []
---

Think of Hadoop like a giant library that has millions of books (data). A **reducer** is the librarian who sits at a desk after the books have been sorted and handed out to different readers.

First, the **mapper** (another librarian) reads each book and pulls out little notes—tiny “key/value” pairs. For example, every time it sees a word “apple,” it writes the pair *(“apple”, 1)*. These notes get shuffled around so that all the same keys end up in one place.

Now the **reducer** arrives with all the notes for a particular key—say every *(“apple”, 1)* from all readers. The reducer’s job is to “reduce” them into a single, useful answer: it counts how many ones there are and writes *(“apple”, totalCount)* back out. In short, a reducer aggregates repeated items so the final output is concise and meaningful.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
