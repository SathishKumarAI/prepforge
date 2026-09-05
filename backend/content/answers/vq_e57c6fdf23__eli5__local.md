---
qid: vq_e57c6fdf23__eli5__local
question: What are different metadata options in GetMetadata Activity ?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 279
total_tokens: 437
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:32:08-05:00'
sources: []
---

Think of **GetMetadata** as asking a librarian for a book’s “book‑cover” information before you actually borrow it.  
The activity can pull several kinds of cover data—each is a *metadata option*:

| Option | What it gives you | Analogy |
|--------|-------------------|---------|
| **ItemName** | The file or folder name (like the book title). | “What’s the book called?” |
| **Size** | How many bytes the item uses (like how thick the book is). | “How heavy is this volume?” |
| **LastModified** | When it was last changed (like the edition date). | “When was the latest revision made?” |
| **Type** | Whether it’s a file or folder (like hardcover vs paperback). | “Is this a single story or an anthology?” |
| **Properties** | Custom key‑value pairs you added (like author notes). | “What extra tags did the librarian put on this shelf?” |

You pick the ones that matter for your workflow. Just as a librarian gives you the cover details you need to decide if the book fits your research, GetMetadata hands you the exact bits of information you want about a dataset before moving it forward.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
