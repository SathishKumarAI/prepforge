---
qid: ing_dd28607b3d__eli5__local
question: 'Explain: Docker Registry — Top 8 Must-Know Docker Concepts'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 319
total_tokens: 480
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:24:31-05:00'
sources: []
---

Think of a **Docker Registry** as a big, organized library where every book is a *container image*—a ready‑to‑run snapshot of an app and all its parts. When you want to run that app on any computer, Docker pulls the right “book” from this library.

Here are the 8 key ideas that let you use Docker like a librarian:

1. **Image** – The book’s contents (code, libraries, config).  
2. **Tag** – A label on a book (“v1.0”, “latest”) so you know which edition to pull.  
3. **Repository** – A shelf holding all editions of one app (e.g., `nginx`).  
4. **Registry** – The whole library, whether it’s public (Docker Hub) or private (your own server).  
5. **Push** – Uploading a new book to the library.  
6. **Pull** – Downloading a book so you can read it on any machine.  
7. **Layer** – Chapters of a book; each change creates a new layer that can be shared across books, saving space.  
8. **Dockerfile** – The recipe card telling how to bake the book (build the image).

Just as a librarian knows where to find and update books, Docker uses these concepts to manage, share, and run applications reliably anywhere.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
