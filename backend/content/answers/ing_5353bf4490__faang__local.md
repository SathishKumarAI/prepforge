---
qid: ing_5353bf4490__faang__local
question: 'Explain: A partner reports that Harvey missed a change-of-control clause
  in a contract it reviewed. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 244
output_tokens: 525
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:57:59-05:00'
sources: []
---

**Clarify**  
We’re told a partner observed that “Harvey” omitted the *change‑of‑control* (CoC) clause when reviewing a client contract. The goal is to determine why the clause was missed and how to prevent it in future reviews.  
Assumptions:  
- Harvey is an internal AI‑powered document review tool.  
- The contract is a standard commercial agreement that normally contains a CoC provision.  
- The partner expects the tool’s flagged issues to match human expectations.

**Approach**  
1. Re‑examine the input contract for the presence/absence of a CoC clause.  
2. Inspect Harvey’s NLP pipeline: tokenization, entity recognition, rule‑based extraction.  
3. Verify that the knowledge base (KB) includes CoC patterns and trigger phrases.  
4. Test with similar contracts to see if the omission is systemic.

**Depth**  
- *Data quality*: If the contract uses unconventional wording (“ownership transition” instead of “change of control”), the pattern matcher may not fire.  
- *Model limitations*: The underlying language model might treat “control” as a generic term and ignore it in the context of corporate governance.  
- *Rule coverage*: Check that the rule set contains variants like “transfer of control”, “merger or acquisition”, and legal citations (e.g., § 2.4).  
- *Fallback logic*: Ensure that if no explicit phrase is found, a confidence‑based alert still surfaces potential gaps.

**Edge Cases**  
- Contracts drafted in a different jurisdiction with alternate terminology.  
- Clauses buried within nested sub‑clauses or footnotes.  
- Multi‑language documents where the CoC clause is translated.  
Test by feeding such contracts and confirming Harvey flags them correctly.

**Optimize & Communicate**  
- Expand the KB with synonyms and legal style variations; retrain the entity recognizer on a larger, annotated corpus of commercial agreements.  
- Introduce a “missing‑standard‑clause” heuristic that compares the current clause list against an industry baseline.  
- Log each omission with context so partners can see why Harvey missed it (e.g., phrase not matched).  
Explain to stakeholders: “The tool’s rule set didn’t cover the variant wording used in this contract, leading to a false negative. By enriching our pattern library and adding a clause‑gap detector, we’ll catch such omissions in 95 % of cases while keeping review time low.”

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
