---
qid: ing_0f9c9b1ae4__fp__local
question: Design the human approval flow for an agent that files expense reports.
  Where do the gates go, and how do you stop people from clicking through them?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 189
output_tokens: 479
total_tokens: 668
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:38:36-05:00'
sources: []
---

**Why a gate‑first design is inevitable**

An expense‑filing agent trades *speed* for *risk*: it must process millions of claims while keeping fraud and policy violations at bay. The fundamental optimisation problem is to **minimise false negatives (missed violations) + false positives (unnecessary human work)** under a cost function that weights time, money, and reputational risk.

The solution is a **hierarchical gate**: each claim passes through a *confidence‑threshold* filter before reaching a human. The thresholds are set so that the expected cost of an undetected error exceeds the cost of a manual review. This guarantees that every automated pass has a quantified probability of compliance, and any uncertainty triggers escalation.

**Where to place the gates**

1. **Submission gate** – verifies format, mandatory fields, and budget allocation (≈ 5 % of total volume).  
2. **Policy‑rule gate** – checks against per‑policy limits, travel vs. non‑travel categories, and currency rules (≈ 20 %).  
3. **Anomaly gate** – uses a lightweight ML model that flags outliers in spend patterns or duplicate receipts (≈ 10 %).  
4. **Approval gate** – only claims that survive all three gates are auto‑approved; the rest go to the *Human Review queue*.

**Stopping people from clicking through**

- **Dynamic UI locking**: The “Approve” button is disabled until every preceding gate clears, with a tooltip explaining the reason.  
- **Audit trail & replayability**: Every decision point is logged and tied to the claim ID; auditors can replay the exact state that led to auto‑approval.  
- **Escalation alerts**: If an employee attempts to override a gate (e.g., by editing the raw JSON), the system rejects the change and logs it for investigation.  
- **User‑role segregation**: Only users with “Compliance Reviewer” role can manually re‑open claims; others see read‑only views.

This layered, evidence‑based approach keeps the human in the loop only when uncertainty is statistically significant, while making bypasses both technically impossible and audibly traceable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
