---
qid: vq_b690e9dfcf__star__local
question: What is the Result of the following ‘VIK’||NULL||’RAM’ ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 325
total_tokens: 569
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T22:16:03-05:00'
sources: []
---

**Situation:** While refactoring a legacy payroll system, I discovered that employee names were being built by concatenating first and last names in an Oracle view. A junior developer had written the expression `'VIK'||NULL||'RAM'` as a test case, but our unit tests kept failing with unexpected NULL values.

**Task:** I needed to identify why the expression returned NULL instead of `"VIKRAM"` and correct the logic so that any missing middle name didn’t break the concatenation.

**Action:** I reminded the team that in Oracle, the `||` operator propagates nulls. To avoid this, I replaced the direct concatenation with `COALESCE` around each component: `COALESCE(first_name,'') || COALESCE(middle_name,'') || COALESCE(last_name,'')`. I also added a unit test that explicitly passed a NULL middle name and verified the output was `"VIKRAM"`.

**Result:** After the change, all tests passed and the view now correctly renders full names even when parts are missing. The payroll system processed 12,000 employee records per month without any NULL‑related errors—saving us a potential audit issue and improving data reliability. I learned to always guard against null propagation in string operations.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
