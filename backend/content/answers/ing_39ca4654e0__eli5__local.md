---
qid: ing_39ca4654e0__eli5__local
question: 'Explain: Designing an Authorization Model for an Enterprise | Cerbos'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 160
output_tokens: 294
total_tokens: 454
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T10:07:53-05:00'
sources: []
---

Imagine your company is a big library. Every book (resource) has a rule about who can read it, and every visitor (user) has a card that says what they’re allowed to do—borrow, return, or just look. Cerbos is like the smart librarian that checks both the book’s rule and the visitor’s card in one go.

**Designing the Authorization Model**

1. **Define Roles (Bookshelves)** – Decide which groups of people (e.g., Sales, HR) will need access to which shelves.  
2. **Set Permissions (Book Rules)** – For each shelf, write simple rules: *read only*, *edit*, *delete*.  
3. **Create Policies (Library Hours)** – Combine roles and permissions into clear policies that say, “Sales can read sales reports; HR can edit employee records.”  
4. **Centralize the Policy Store** – Keep all these rules in one place (Cerbos’ policy server) so every app asks the same librarian instead of each having its own list.  

When an employee tries to open a file, Cerbos checks: *Does this user’s role match the rule for that file?* If yes, it lets them; if not, it politely says “Sorry.” This keeps your enterprise safe and makes adding new rules as easy as moving a book to a different shelf.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
