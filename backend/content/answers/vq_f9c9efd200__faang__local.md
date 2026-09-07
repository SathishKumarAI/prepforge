---
qid: vq_f9c9efd200__faang__local
question: WHAT ARE SQL INJECTIONS, AND HOW DO YOU PREVENT THEM?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 238
output_tokens: 465
total_tokens: 703
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:43:17-05:00'
sources: []
---

**Clarify**  
The interviewer asks for an explanation of *SQL injection* and mitigation strategies. Assume we’re dealing with a web application that constructs SQL queries from user input and has no parameterization.

**Approach**  
1. Define what an injection is (arbitrary SQL executed by an attacker).  
2. List concrete prevention techniques.  
3. Mention tooling/validation, and touch on monitoring.

**Depth**  

| Prevention | How it works | Complexity |
|------------|--------------|------------|
| **Prepared Statements / Parameterized Queries** | Bind user data as parameters instead of string concatenation. Database treats input as literal values. | O(1) per query; minimal runtime cost. |
| **ORM/Query Builders** | Enforce parameterization under the hood (e.g., JPA, Sequelize). | Slight abstraction overhead but safe by default. |
| **Input Validation & Whitelisting** | Reject or escape unexpected characters (`'`, `--`, `/*`), especially for fields that must be numeric or match a pattern. | O(n) per input; cheap. |
| **Least‑Privilege DB Accounts** | Grant only the permissions needed (SELECT, INSERT). Even if injection succeeds, damage is limited. | No runtime cost. |
| **Web Application Firewall / WAF** | Detects suspicious payload patterns (`' OR 1=1--`). Adds a safety net but not a substitute for code‑level fixes. | Network overhead. |

**Edge Cases**  
- Dynamic SQL that legitimately needs variable table names → use a whitelist of allowed identifiers.  
- Stored procedures that concatenate strings inside the DB – still vulnerable if parameters aren’t used.  
- Legacy codebases: refactor in small increments, add automated tests for injection scenarios.

**Optimize & Communicate**  
Prioritize parameterized queries first; they are foolproof and inexpensive. Use ORMs to enforce this automatically. Add input validation as a secondary guard. Finally, monitor logs for failed query attempts—an early warning system. Conclude by stressing that the *single* most effective fix is never interpolating user data directly into SQL strings.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
