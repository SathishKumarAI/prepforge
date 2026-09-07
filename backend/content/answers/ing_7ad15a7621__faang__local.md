---
qid: ing_7ad15a7621__faang__local
question: 'Explain: Database Tables — Urlshorteningservicetinyurl'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 612
total_tokens: 848
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:29:54-05:00'
sources: []
---

**1️⃣ Clarify**  
You want a relational schema for a URL‑shortener (TinyURL‑style). We assume: *a user can create many short URLs; each short code maps one long URL; we track clicks and expiry; we need fast lookups by code and by owner.*  

**2️⃣ Approach**  
Model three core entities: `User`, `ShortUrl`, and `Click`. Use surrogate keys, indexed columns for lookup, and constraints to preserve integrity.  

| Table | Key | Columns (type) | Indexes / Constraints |
|-------|-----|-----------------|------------------------|
| **Users** | `user_id PK` | `email VARCHAR(255) UNIQUE NOT NULL`, `created_at TIMESTAMP` | primary key + unique email |
| **ShortUrls** | `id PK` | `code CHAR(6) UNIQUE NOT NULL`, `original_url TEXT NOT NULL`, `owner_id FK → Users(user_id)`, `expires_at TIMESTAMP NULL`, `click_count INT DEFAULT 0`, `created_at TIMESTAMP` | index on `code`; foreign key; partial index for non‑expired rows |
| **Clicks** | `id PK` | `short_url_id FK → ShortUrls(id)`, `clicked_at TIMESTAMP`, `ip VARCHAR(45)` | composite index `(short_url_id, clicked_at)` |

*Why 6 chars?* Gives ~56B combos (62^6).  

**3️⃣ Depth**  
- **Lookup**: `SELECT original_url FROM ShortUrls WHERE code = ?` – O(log N) via B‑tree.  
- **Create**: Generate a unique 6‑char code, insert into `ShortUrls`. Use transaction to ensure uniqueness.  
- **Track click**: Insert row in `Clicks`; increment `click_count` atomically (`UPDATE ShortUrls SET click_count = click_count + 1 WHERE id = ?`).  
- **Expiry**: Query only rows where `expires_at IS NULL OR expires_at > NOW()`.  

Complexity: inserts O(log N), reads O(log N); clicks are write‑heavy but bounded by index.  

**4️⃣ Edge Cases**  
- Code collision → retry or use UUID+hash.  
- Very high click volume → consider sharding `Clicks` by hour.  
- Expired URLs still need to redirect to a “gone” page; enforce with `WHERE`.  

**5️⃣ Optimize & Communicate**  
To scale, move `click_count` into a Redis counter and sync nightly to the DB (eventual consistency). For read‑heavy traffic, cache `original_url` in memcached. I’d explain these trade‑offs to stakeholders: consistency vs latency. This structured design balances correctness, performance, and maintainability—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
