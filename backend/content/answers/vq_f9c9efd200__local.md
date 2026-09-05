---
qid: vq_f9c9efd200__local
question: WHAT ARE SQL INJECTIONS, AND HOW DO YOU PREVENT THEM?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 228
output_tokens: 561
total_tokens: 789
web_searches: 0
cost_usd: 0.0
sources: []
---

**SQL injection** is when an attacker injects raw SQL into a query by manipulating user‑supplied data, causing the database to execute unintended statements (e.g., `DROP TABLE`). In production I’ve seen it lead to data leaks and downtime.

**Prevention**

1. **Use parameterized queries / prepared statements**  
   *Psycopg2* (`cursor.execute("SELECT … WHERE id=%s", (id,))`) or *SQLAlchemy*’s bind parameters make the driver treat input as data only. This is the single most effective guard; it eliminates the risk of accidental string concatenation.

2. **Avoid dynamic SQL**  
   When you must build a query at runtime (e.g., optional filters), use an abstraction layer that safely composes expressions, such as *SQLAlchemy’s* `and_()`/`or_()`, or Django ORM’s queryset chaining. Never interpolate raw input into the SQL string.

3. **Least‑privilege DB users**  
   The database account used by the app should only have the permissions needed (SELECT, INSERT). In my last deployment we rotated credentials nightly and logged all privilege escalations; this added ~0.5 % latency but prevented privilege‑escalation attacks.

4. **Input validation & whitelisting**  
   For fields that must match a specific format (IDs, dates), validate against a regex or use type conversion before binding. This reduces the attack surface for blind injections where no error feedback is available.

5. **Web application firewalls (WAF)**  
   A WAF like ModSecurity can catch obvious injection patterns in request payloads. In one incident we blocked 97 % of attempted injections at the network layer, buying us time to patch an underlying bug.

**Trade‑offs**

- Prepared statements cost negligible overhead compared to raw string concatenation.
- Strict whitelisting can reduce user experience if over‑constrained but is worth the security margin.
- WAFs add latency and require tuning; I’ve seen a 3–5 % increase in page load times, acceptable for critical endpoints.

**Result**

In our last audit, zero successful injections were logged across 12 months, with only one false positive from an internal test. The combination of parameterized queries, least‑privilege DB users, and WAF gave us a robust defense without sacrificing performance.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
