---
qid: ing_e18923cb78__star__local
question: 'Explain: Session vs SessionFactory — Java/Hibernate.md at main \u00b7 Anshul619/Java
  \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 256
output_tokens: 291
total_tokens: 547
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T07:00:01-05:00'
sources: []
---

**Situation**  
When I was refactoring the legacy inventory system, we were seeing a spike in database connections—up to 200 open sessions per request—causing timeouts during peak hours.

**Task**  
I had to redesign how Hibernate interacted with the database so that connection usage stayed below five active sessions per transaction while keeping query performance intact.

**Action**  
First, I introduced a **SessionFactory** singleton using `org.hibernate.cfg.Configuration` and built it once at application startup. Inside each service method, I opened short‑lived **Sessions** (`session = sessionFactory.openSession()`) within try‑with‑resources blocks, ensuring they were closed automatically after the transaction. I also enabled Hibernate’s second‑level cache (EHCache) to reduce DB roundtrips and configured batch fetching for collections. Instead of keeping a single `Session` open across requests, I leveraged stateless sessions (`sessionFactory.openStatelessSession()`) for bulk updates.

**Result**  
Connection count dropped from ~200 to under 5 per transaction, eliminating timeouts and improving throughput by 30 %. I learned that the SessionFactory is cheap to create once and should be shared; Sessions are lightweight wrappers around JDBC connections that must be scoped narrowly. This pattern kept our application responsive while maintaining data integrity.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
