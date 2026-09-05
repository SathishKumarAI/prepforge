---
qid: ing_8813e936b7__star__local
question: 'Explain: Pitfall 14: Defending Wrong Answers — Common Pitfalls'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 240
output_tokens: 343
total_tokens: 583
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T04:04:52-05:00'
sources: []
---

**Situation:**  
At my last job I was leading the QA automation team for a consumer‑facing mobile app. The release cycle had shrunk from four weeks to two, so we relied heavily on automated test suites that ran overnight. One night, an engineer reported that the “login” feature was failing in production, but our tests had passed 98% of the time.

**Task:**  
I needed to investigate the discrepancy, confirm whether it was a real defect or a false alarm, and decide if we should roll back the latest deployment or push a hotfix.

**Action:**  
First I checked the test logs and saw that the failing case was only triggered when the device’s locale was set to French. The test environment didn’t cover that locale because our coverage matrix had omitted non‑English locales after a prior sprint. I pulled the production traffic logs, which showed that 12% of users were in France, and their sessions hit the same code path. Rather than immediately pushing a rollback, I added a new localized test case, reran the suite, and then deployed a quick patch to correct the locale‑specific string handling.

**Result:**  
The issue was resolved before any user could experience a login failure. The patch prevented an estimated 1,200 affected users from being locked out, and we increased our test coverage for non‑English locales from 0% to 100%. I learned that defending a “wrong” answer—here the assumption that English‑only tests were sufficient—can hide real bugs; always validate assumptions with data before acting.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
