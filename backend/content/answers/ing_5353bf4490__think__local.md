---
qid: ing_5353bf4490__think__local
question: 'Explain: A partner reports that Harvey missed a change-of-control clause
  in a contract it reviewed. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 484
total_tokens: 684
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T06:30:02-05:00'
sources: []
---

**1. Clarify the scenario and set assumptions**  
   * Who is “Harvey” (e.g., an attorney or AI‑powered contract review tool)?  
   * What type of change‑of‑control clause was expected?  
   * Is the partner’s claim based on a missing clause in the original document or a missed detection by Harvey?  
   * Assume the contract is in a standard format and the clause should be flagged by any competent review system.  

**2. Adopt a debugging framework**  
   - **Input‑analysis:** Inspect the raw contract text, metadata, and any preprocessing steps.  
   - **Rule‑extraction:** List all contractual clauses that trigger change‑of‑control requirements (e.g., “if the ownership of Company X exceeds 50%”).  
   - **Detection logic:** Map how Harvey identifies clauses—regex, NLP entity recognition, or rule‑based engine.  

**3. Step‑by‑step reasoning**  
   1. Verify that the clause is present in the contract (manual scan).  
   2. Check whether the clause text matches any of Harvey’s trigger patterns.  
   3. If it does not match, trace back to the pattern database: was the rule omitted or mis‑typed?  
   4. If it matches but was still missed, examine post‑processing filters that might suppress flags (confidence thresholds, blacklists).  

**4. Common pitfalls to avoid**  
   * Assuming the clause is absent when it’s just rephrased.  
   * Overlooking case sensitivity or whitespace in regex patterns.  
   * Ignoring updates to regulatory language that change what constitutes a “change‑of‑control.”  
   * Failing to test with a variety of contract samples (different jurisdictions, industries).  

**5. Sanity‑check & communicate**  
   * Re‑run Harvey on the same document after applying the fix and confirm the flag appears.  
   * Summarize findings: “The clause existed but was written in an uncommon phrasing; updating the regex pattern to include ‘acquisition of majority interest’ resolved the issue.”  
   * Document the change in the system’s changelog for future reference.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
