---
qid: ing_32c69f165f__fp__local
question: 'Explain: Capture and Settlement Flow — How VISA Works When Swiping a Credit
  Card'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 176
output_tokens: 408
total_tokens: 584
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T17:52:54-05:00'
sources: []
---

**Capture and Settlement Flow – Why Visa Swipes Work the Way They Do**

When a merchant swipes a card, the terminal sends an *authorization request* to the issuer via the Visa network. This is a **capture** step: the issuer checks that the account has sufficient credit and returns a short‑lived token (often called “auth code”) that locks the requested amount for the transaction’s lifetime (typically 24 h).  

The merchant then *captures* the sale by submitting an *adjustment* message that references the original auth. This step is essentially a **commitment**: it tells Visa that the goods were delivered and that the issuer should debit the cardholder’s account. Because the authorization was already verified, the network can forward this adjustment without re‑checking balance—saving bandwidth and latency.

The final **settlement** occurs in batch at the end of the day. All merchants’ adjustments are aggregated into a *clearing file* that is sent to each issuer. The issuers then debit their customers and credit the merchant’s acquiring bank, which settles with the merchant through the *settlement* process. This aggregation minimizes the number of individual fund transfers, reducing transaction costs (a direct optimization of network resources).

**Non‑obvious insight:**  
The capture step is not a “pre‑payment”; it is a **resource reservation** in a distributed ledger (Visa’s system). By separating authorization from settlement, Visa turns each cardholder into a *dynamic account* that can be queried and updated in real time, while still allowing merchants to batch their settlements. This design mirrors modern cloud resource allocation: reserve before use, then pay once the job completes—ensuring both parties’ risk is minimized without sacrificing throughput.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
