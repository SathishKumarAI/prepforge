---
qid: ing_8f7255b6b0__eli5__local
question: 'Explain: CNAME (Canonical Name) Record — DNS Record Types You Should Know'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 164
output_tokens: 242
total_tokens: 406
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T12:24:21-05:00'
sources: []
---

Think of the internet as a giant library where every website is a book.  
Each book has its own unique shelf number (the IP address). A **CNAME record** is like putting a *bookmark* on that shelf: it tells the library’s catalog, “When someone asks for this nickname, just give them the book at the real shelf.”  

For example, you might want `shop.example.com` to point to the same server as `store.example.com`. Instead of writing two separate shelf numbers, you create a CNAME that says “shop” is just another name for “store.” When someone types `shop.example.com`, the DNS system follows the bookmark and delivers the content from the real address.  

**Unavoidable terms:**  
- **DNS (Domain Name System):** The internet’s phone book that translates friendly names into numeric addresses.  
- **IP address:** A machine’s unique number on a network, like an apartment number.  

A CNAME keeps your DNS tidy and lets you move the real shelf without changing every nickname.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
