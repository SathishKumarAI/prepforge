---
qid: ing_d15ff1b08c__eli5__local
question: 'Explain: Constitutional Classifiers: Defending against universal jailbreaks'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 159
output_tokens: 242
total_tokens: 401
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T14:07:04-05:00'
sources: []
---

Imagine a library that has a special “book‑guard” system. Every time someone wants to read a book (ask the AI a question), the guard checks the book’s title against a list of rules: is it allowed? Does it follow the library’s policy? If the title tries to slip past by rephrasing itself in many clever ways—like saying “I need a recipe” instead of “I want a cake”—the guard still catches it because it looks for the underlying intent, not just the exact words.

**Constitutional classifiers** are that guard. They learn from a “constitution” (a set of safety rules) how to judge whether an answer stays within bounds. When a user tries a *universal jailbreak*—an attempt to trick the AI into breaking rules by constantly changing phrasing—the classifier keeps checking each new version against the same core principles, preventing any one clever wording from slipping through.

So think of it as a vigilant librarian who never lets a book slip past because it’s cleverly disguised.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
