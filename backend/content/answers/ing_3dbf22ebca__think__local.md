---
qid: ing_3dbf22ebca__think__local
question: 'Explain: Amazon SNS message filtering — AWS-Services/4_MessageBrokers/AmazonSNS.md
  at main \u00b7 Anshul619/AWS-Services \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 220
output_tokens: 507
total_tokens: 727
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T02:50:40-05:00'
sources: []
---

**1. Clarify the ask and set assumptions**  
   - *What exactly is being requested?* The user wants an explanation of “Amazon SNS message filtering” as described in the referenced GitHub file.  
   - *Assume the reader knows basic SNS concepts but not the filtering specifics.*  
   - *Goal:* Deliver a concise, accurate description that references the key elements (filter policy syntax, attributes, matching logic).

**2. Adopt a mental‑model framework**  
   1. **Contextual layer** – place SNS in the AWS messaging ecosystem (topics → subscriptions).  
   2. **Mechanism layer** – describe how filtering is applied per subscription using JSON filter policies.  
   3. **Operational layer** – explain attribute extraction, matching rules, and default behaviors.

**3. Step‑by‑step reasoning toward the answer**  
   - Start with a quick recap: SNS sends messages to all subscribers unless a policy blocks it.  
   - Introduce the *filter policy* JSON structure (key → array of values or patterns).  
   - Explain that each message can carry *message attributes*; policies match against these.  
   - Detail the matching logic: exact value, prefix, suffix, numeric ranges, and regex support.  
   - Mention default “allow all” if no policy is attached.  
   - Conclude with practical tips (e.g., use simple string filters for most cases, watch out for cost implications of many attributes).

**4. Common traps to avoid**  
   - *Confusing message body vs. attributes:* filtering only applies to attributes.  
   - *Assuming all messages have the same attributes:* absent attributes mean no match → delivery blocked.  
   - *Overlooking the “$” syntax for numeric comparisons.*  
   - *Misreading the policy JSON as a single string rather than an object.*

**5. Sanity‑check & communicate clearly**  
   - Verify that each bullet logically follows from the previous one.  
   - Keep sentences short and use examples (e.g., `{"color": ["red", "blue"]}`).  
   - End with a brief “in practice” note: test policies in the console or via CLI before production.  

Follow this structure whenever explaining a feature that has a clear conceptual hierarchy, example syntax, and operational caveats.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
