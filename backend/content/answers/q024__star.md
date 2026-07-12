---
qid: q024
question: "What are the main sources of bias in AI systems and how can you address them?"
topic: "AI"
model: "Claude Code (authored)"
sources: []
---

**Situation** At a fintech lender, our loan-approval model was quietly approving one demographic group at a noticeably higher rate. Compliance flagged it before launch, and I owned the fairness review.

**Task** I had to identify where the bias was actually coming from and put concrete mitigations in place before we could ship.

**Action** I traced it to a few classic sources. Sampling bias, because historical approvals over-represented certain zip codes. Label bias, since past human decisions were themselves skewed. And proxy features, where zip code was leaking protected attributes. I addressed each: reweighted and resampled the training data, dropped and audited proxy features, added fairness metrics like demographic parity and equalized odds to our evaluation, and set up slice-based monitoring so we watched performance per group in production, not just overall.

**Result** Approval-rate disparity fell from 18 points to under 4 while overall AUC barely moved. The lesson I carry forward: bias hides in data, labels, and features, so you have to measure fairness explicitly and keep monitoring it after launch, not just once.
