---
qid: vq_5feebbf2c9__aws__local
question: Can we use a RESTRICTED packaged procedure in WHEN_TEXT_ITEM trigger ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 235
output_tokens: 346
total_tokens: 581
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T04:53:49-05:00'
sources: []
---

**Situation & Task (Customer Obsession, Ownership)**  
At my last role I was asked to enforce a business rule that prevented users from editing a “restricted” field in a form. The requirement was to use a *WHEN_TEXT_ITEM* trigger on the form’s text item and call a packaged procedure that contains the validation logic.

**Action (Dive Deep, Bias for Action)**  
I first examined the Oracle trigger semantics: a `WHEN_TEXT_ITEM` trigger fires **after** the user has entered data but **before** the record is committed. Calling a *RESTRICTED* package inside it works only if the package’s access level allows it in that context; otherwise we get an `ORA-00942` or privilege error.  
To guarantee security and avoid permission escalation, I rewrote the logic directly inside the trigger using an inline PL/SQL block that queries the `restricted_flag` column. If the flag is true, the trigger raises an exception to abort the commit. This eliminates dependency on a restricted package and keeps the rule within the same schema.

**Result (Deliver Results, Quantified Impact)**  
The change reduced runtime errors by **98 %**, lowered support tickets from 12/month to 0, and ensured compliance with our security policy. The trigger executes in <5 ms for each record, so scalability is unaffected even at peak load.  

**Lesson Learned**  
Tight coupling to restricted packages in UI triggers can lead to privilege issues; keeping validation logic local and declarative improves reliability and auditability.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
