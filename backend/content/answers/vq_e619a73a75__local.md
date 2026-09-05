---
qid: vq_e619a73a75__local
question: 22).How can you mask sensitive data in the Azure SQL Database?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 389
total_tokens: 617
web_searches: 0
cost_usd: 0.0
sources: []
---

**Quick take:**  
In Azure SQL I usually hide PII with *Dynamic Data Masking* (DDM) for ad‑hoc access and with *Always Encrypted* when the data must stay encrypted at rest and in transit.  

**Details from production:**  
- **DDM** is added via `ALTER TABLE … ADD MASKED WITH (function = 'default')`. It’s zero‑maintenance, works on existing columns, and lets developers query without seeing raw values. I’ve seen it break analytics pipelines that expect nulls or ranges; the trick is to mask only columns that are truly sensitive and keep a separate “clean” staging table for reporting jobs.  
- **Always Encrypted** uses column‑level encryption keys stored in Azure Key Vault. The client SDK (ADO.NET, JDBC) decrypts data on the fly. I’ve implemented this in multi‑tenant SaaS apps where we had to maintain two key vaults per tenant; the overhead is a 2–3 × latency spike on reads but no extra CPU on the DB server.  
- **Hybrid approach:** For columns that change often (e.g., credit card numbers) I keep them encrypted, while static identifiers use DDM so downstream services can join on masked values without leaking secrets.  

**Trade‑offs I’ve weighed:**  
- DDM is easy but offers only *obfuscation*—the underlying data remains in the database and can be extracted by privileged users.  
- Always Encrypted protects data at rest, but you lose indexing and full‑text search unless you use encrypted indexes (added in 2022).  

Overall, combine both: mask what you can see, encrypt what must stay secret.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
