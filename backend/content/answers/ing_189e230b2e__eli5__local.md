---
qid: ing_189e230b2e__eli5__local
question: 'Explain: Glean OAuth Authorization Server — About Glean MCP server'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 161
output_tokens: 258
total_tokens: 419
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:14:53-05:00'
sources: []
---

Imagine you’re a library that wants to let people read books (your data) but only if they have a valid library card (access).  
**Glean’s OAuth Authorization Server** is the librarian who checks the card: it asks for your credentials, verifies them, and then gives you a temporary “ticket” (an access token) that says you’re allowed to borrow certain books.  
The **Glean MCP server** (Machine‑Learning Core Platform) is the book shelf where all the data lives. Once you have a ticket, the librarian hands you the right key to open the specific shelf section you’re permitted to read.

- *OAuth* – a standard way for one system to ask another for permission without sharing passwords.  
- *Authorization Server* – the part that issues and validates those permissions.  
- *MCP server* – the data hub that hosts the content your applications will analyze.

So, when an app needs data, it first talks to the OAuth server to get a ticket; then it uses that ticket to safely access the MCP server’s datasets for machine‑learning tasks.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
