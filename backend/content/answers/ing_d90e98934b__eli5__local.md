---
qid: ing_d90e98934b__eli5__local
question: How does retrieval over a codebase differ from retrieval over prose?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 212
total_tokens: 372
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:18:27-05:00'
sources: []
---

Imagine you’re looking for a recipe in two different cookbooks.  
In the *prose* book, each page is a long story about cooking; to find the right dish you skim the whole paragraph, hoping the name or a keyword will pop out. It’s like searching a text where words are free‑form and can appear anywhere.

Now picture a *codebase* cookbook that is organized by recipe “files.” Each file starts with a clear title (the function name) and then lists ingredients and steps in a strict order. When you search, the system first finds the right file by its title, then jumps straight to the exact line that contains the ingredient or instruction you need.

So, retrieval over prose scans free text for clues, while retrieval over code first locates a precise “module” (file) and then fetches the exact snippet—much faster and more accurate because the structure is already built‑in.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
