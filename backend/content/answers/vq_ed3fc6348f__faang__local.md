---
qid: vq_ed3fc6348f__faang__local
question: What are all different types of collation sensitivity?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 567
total_tokens: 800
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:41:35-05:00'
sources: []
---

## 1️⃣ Clarify  
*Question:* “What are the different types of collation sensitivity?”  
- Assume we’re talking about SQL/DBMS collations (e.g., MySQL, PostgreSQL, SQL Server).  
- Collation determines how string comparisons are performed: case‑sensitivity, accent‑sensitivity, width‑sensitivity, and locale‑specific rules.  

## 2️⃣ Approach  
Outline the four canonical sensitivity flags, explain each’s impact on equality/ordering, then give a quick mapping to common DBMS syntax.

## 3️⃣ Depth – The Core Types  

| Sensitivity | What it compares | Typical flag / example |
|-------------|-----------------|------------------------|
| **Case‑Sensitive (CS)** | Upper vs. lower case characters are distinct (`'a' ≠ 'A'`). | `SQL_Latin1_General_CP1_CS_AS` |
| **Accent‑Sensitive (AS)** | Diacritics affect comparison (`é` ≠ `e`). | `..._AS` |
| **Width‑Sensitive (WS)** | Full‑width vs. half‑width forms are distinct (Japanese/Unicode). | `..._WS` |
| **Kana‑Sensitive / Binary** | In some locales, small vs. large kana or binary byte order matters. | `..._KS` or `BINARY` |

*Behavior:*  
- If a collation is CS but not AS, `'a' = 'A'` but `'e' ≠ 'é'`.  
- Combining flags gives fine‑grained control: e.g., `SQL_Latin1_General_CP1_CS_AS_WS_KS`.

## 4️⃣ Edge Cases  
- **Unicode normalization:** Some collations treat composed vs. decomposed forms as equal; others don’t.  
- **Locale changes:** Switching locale may reorder alphabetic order (e.g., German “ß” ≈ “ss”).  
- **Performance:** Binary collations are fastest but ignore linguistic rules.  

## 5️⃣ Optimize & Communicate  
When designing a schema:  
1. Choose the minimal sensitivity needed for correctness.  
2. Prefer case‑insensitive + accent‑insensitive for user‑facing search; add binary collation only where exact byte matching is required (e.g., password hashes).  
3. Document the chosen collation per column to avoid silent bugs during migrations or cross‑DB replication.

*Summary:* Collation sensitivity in databases comes down to **case, accent, width,** and **locale/Kana** flags—each controlling a distinct dimension of string comparison, with trade‑offs between correctness, performance, and cultural appropriateness.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
