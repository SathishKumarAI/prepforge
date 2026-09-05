---
qid: ing_01c770df7e__eli5__local
question: What does FlashAttention actually do, and how is it different from PagedAttention?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 298
total_tokens: 462
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:37:51-05:00'
sources: []
---

Imagine you’re a librarian (the GPU) trying to answer a question about every book in a huge library (all the tokens in a transformer).  
With **regular attention**, the librarian looks at each book one by one, copies its title and page number into a notebook, then later reads that notebook again. That’s slow because the notebook is tiny and gets full of copy‑and‑paste work.  

**FlashAttention** is like giving the librarian a giant whiteboard where all titles can be written side‑by‑side in one sweep. The board is huge enough to hold every book’s information at once, so the librarian never has to go back and forth between notebook and books. This saves memory and time because data stays on the board (GPU memory) instead of being repeatedly moved around.

**PagedAttention** is another trick: the librarian keeps a small stack of books in hand (a “page” of memory). When the stack fills, she swaps it out for the next stack, like paging through files on disk. It uses less memory than FlashAttention but still needs to move stacks back and forth, so it’s slower.

So, FlashAttention keeps all data on‑device and processes it in one big block; PagedAttention breaks the work into smaller pages that are swapped in and out, trading speed for lower memory use.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
