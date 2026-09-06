---
qid: ing_5240e8855e__think__local
question: 'Explain: GitHub - lib/pq: Go PostgreSQL driver for database/sql · GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 198
output_tokens: 478
total_tokens: 676
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:25:56-05:00'
sources: []
---

**1️⃣ Clarify the request & set assumptions**  
- *What is the user asking?* They want an explanation of “GitHub – lib/pq: Go PostgreSQL driver for database/sql.”  
- *Assumptions:* The reader knows basic GitHub and Go, but not the specifics of `lib/pq`.  We’ll explain what it is, why it matters, and how it’s used.

**2️⃣ Adopt a mental‑model framework**  
1. **Contextual layer** – where it lives (GitHub repo).  
2. **Technical core** – what the package does (PostgreSQL driver for Go's `database/sql`).  
3. **Practical usage** – how developers import and use it in code.  
4. **Ecosystem fit** – its role among other drivers, maintenance status, community.

**3️⃣ Step‑by‑step reasoning**  
- *Locate the repo:* “github.com/lib/pq” is the canonical driver.  
- *Explain purpose:* Implements `database/sql/driver` interface → allows any Go app to talk to PostgreSQL via standard library.  
- *Key features:* TLS, connection pooling, COPY support, JSONB handling.  
- *Installation:* `go get github.com/lib/pq`.  
- *Usage snippet:* show `sql.Open("postgres", connStr)`.  
- *Mention alternatives:* pgx, go-pg for richer feature sets.  
- *Highlight maintenance:* Active community, frequent releases, compatibility with Go 1.x.

**4️⃣ Avoid common traps**  
- Don’t conflate it with the PostgreSQL server itself.  
- Don’t assume it handles migrations; that’s a separate tool.  
- Beware of outdated docs—always check README for latest usage patterns.

**5️⃣ Sanity‑check & communicate**  
- Re‑read the explanation aloud: “GitHub repo … driver … how to use.”  
- Ensure each bullet maps back to the user’s original query.  
- Offer a concise summary: *“It’s the Go library that lets you run PostgreSQL queries through Go’s standard `database/sql` package, hosted on GitHub under lib/pq.”*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
