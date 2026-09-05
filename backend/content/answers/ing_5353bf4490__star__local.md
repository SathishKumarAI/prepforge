---
qid: ing_5353bf4490__star__local
question: 'Explain: A partner reports that Harvey missed a change-of-control clause
  in a contract it reviewed. Debug it.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 247
output_tokens: 386
total_tokens: 633
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T01:14:51-05:00'
sources: []
---

**Situation:**  
During a quarterly compliance audit for one of our largest fintech partners, I discovered that the automated contract‑review tool had flagged an agreement as “complete” even though it was missing a critical change‑of‑control clause. The partner’s legal team reported that Harvey, our AI‑assisted review engine, failed to detect the omission.

**Task:**  
I needed to pinpoint why the clause was missed, remediate the current contract set, and tighten the system so future reviews would catch this oversight—ideally without adding manual steps for every document.

**Action:**  
First, I ran a forensic audit of the clause‑detection pipeline: extracted the rule sets, verified the regex patterns against a sample of 500 contracts, and logged every false negative. The issue turned out to be a mis‑indexed keyword list; “change of control” was stored under an alternate phrase (“control transition”) that the NLP model hadn’t been trained on. I updated the entity dictionary, retrained the transformer model with additional labeled examples, and introduced a secondary rule‑based check that scans for any clause containing both “ownership” and “transfer.” Finally, I added a confidence‑threshold flag so documents with low certainty trigger manual review.

**Result:**  
The re‑trained model reduced false negatives by 92 % (from 8 % to 0.6 %) on the test set, and the partner’s compliance score improved from 78 % to 97 %. I learned that even a robust AI system can slip on domain‑specific phrasing, so continuous data enrichment and hybrid rule checks are essential for reliable contract validation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
