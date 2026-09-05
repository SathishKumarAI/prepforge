---
qid: vq_c46950a013__star__local
question: Which of the following packaged procedure is UNRESTRICTED ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 451
total_tokens: 689
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:18:38-05:00'
sources: []
---

**Situation** – In a recent migration to Oracle 19c, my team had to expose a set of data‑retrieval routines to the front‑end developers. The original package was created with `AUTHID DEFINER`, which meant any caller needed the underlying privileges granted to the owner. Several junior developers complained that they couldn’t run the procedures because their roles didn’t include those schema privileges, causing a bottleneck on the release schedule.

**Task** – I had to refactor the package so it became *unrestricted*, allowing any authenticated user to call the procedures without requiring explicit grants on the underlying tables or views. The goal was to keep the business logic intact while simplifying permissions and reducing maintenance overhead.

**Action** – I rewrote the package specification and body, adding `AUTHID CURRENT_USER` at the declaration level. This tells Oracle to execute the code under the caller’s privileges rather than the owner’s. I then added a single `GRANT EXECUTE ON my_pkg TO PUBLIC;`, which gives everyone permission to invoke the package. During testing, I verified that a user with only the `CONNECT` role could successfully run `my_pkg.get_customer_orders`. To ensure security, I also wrapped any direct DML in the body with explicit `AUTHID DEFINER` blocks for sensitive operations, preserving data integrity.

**Result** – After deploying the updated package, the front‑end team could hit the API endpoints immediately—no more privilege errors. The release went live two days ahead of schedule, and we reduced the number of required grants by 90%. I learned that choosing `AUTHID CURRENT_USER` is a powerful way to create truly unrestricted packaged procedures while still protecting critical operations with selective definer rights.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
