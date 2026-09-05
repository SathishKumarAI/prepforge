---
qid: ing_1c711c26ee__eli5__local
question: 'Document parsing at scale: PDFs, HTML, spreadsheets, email, scans. What
  breaks and how do you build for it?'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 172
output_tokens: 328
total_tokens: 500
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:21:12-05:00'
sources: []
---

Imagine a giant library where every book is written in a different language—some are printed pages (PDFs), others are web pages (HTML), spreadsheets of data, emails, or even hand‑written notes scanned into pictures. A smart librarian (the AI) must read all of them quickly and reliably.

What often breaks?  
- **Missing or broken “glossary”**: PDFs may have hidden text layers; scans might be blurry.  
- **Different layouts**: A spreadsheet’s rows are like a city grid, while an email is more like a diary entry—both need to be understood in context.  
- **Mixed formats in one file**: An HTML page can embed images and tables simultaneously.

How to build for it?  
1. **Standardize first**: Convert every document into a common “plain‑text” skeleton, just as the librarian would copy each book’s content onto a single sheet of paper.  
2. **Tag the structure**: Add simple markers (like chapter titles or table headers) so the AI knows where to look—this is like putting sticky notes on pages.  
3. **Teach it with examples**: Show the system many “good” and “bad” conversions, letting it learn what a clean extraction looks like, similar to training a student by grading essays.  

With these steps, the AI can read any format reliably, just as a seasoned librarian could pull out information from any book in the library without getting lost.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
