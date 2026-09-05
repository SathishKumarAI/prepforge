---
qid: vq_7392f07a57__eli5__local
question: What is the procedure for installing a package in R?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 158
output_tokens: 246
total_tokens: 404
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:16:02-05:00'
sources: []
---

Imagine you’re at a library and want to read a new book that isn’t on your shelf yet. You ask the librarian (R) for it, and she pulls it from the catalog, brings it in, and places it where you can use it. Installing a package in R works the same way.

1. **Ask for the package** – call `install.packages("dplyr")`.  
2. **Download it** – R contacts CRAN (the “catalog”) and grabs the zip file.  
3. **Unpack it** – R extracts the files into a folder called `library/` on your computer.  
4. **Make it ready** – Once installed, you can load it with `library(dplyr)` to start using its functions.

*Package*: a bundled set of code and data that adds new features to R. *CRAN*: the official repository where R packages live. The process is just a few lines of code, but it’s like borrowing a book from the library so you can read it whenever you need.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
