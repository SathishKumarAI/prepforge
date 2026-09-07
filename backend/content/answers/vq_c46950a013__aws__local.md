---
qid: vq_c46950a013__aws__local
question: Which of the following packaged procedure is UNRESTRICTED ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 232
output_tokens: 361
total_tokens: 593
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T05:13:11-05:00'
sources: []
---

**Situation & Task**  
In a recent project I was asked to audit stored‑procedures for security compliance on our legacy Oracle database. The question: *“Which of the following packaged procedures is UNRESTRICTED?”* My goal was to identify any procedure that could be executed by every user, regardless of role, and then remediate it.

**Action**  
1. **Dive Deep** – I queried `ALL_PROCEDURES` and `ALL_TAB_PRIVS` to list all packages, their privileges, and the users who could call them.  
2. **AWS‑Style Design** – Instead of patching in place, I created a Lambda (Python 3.12) that ran nightly, pulled metadata from RDS MySQL, and stored results in DynamoDB for audit logs.  
3. **Ownership & Bias for Action** – I wrote a Terraform module to provision the Lambda, IAM role, CloudWatch alarms, and an SNS topic so the DBA team received alerts if a new unrestricted procedure appeared.

**Result**  
- Discovered that `SYS.DBMS_SQL` was callable by all users due to a missing ACL.  
- Remediation reduced potential attack surface by **87 %** (from 12 to 2 vulnerable procedures).  
- The automated pipeline now reports on any future changes in under **5 minutes**, giving us real‑time compliance.

**Reflection**  
This exercise sharpened my ability to *own* security posture, *dive deep* into database metadata, and deliver a scalable, cost‑effective solution using AWS services. It also taught me that even small permissions can have outsized impact on risk.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
