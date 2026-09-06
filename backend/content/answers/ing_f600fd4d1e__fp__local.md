---
qid: ing_f600fd4d1e__fp__local
question: A stakeholder wants to send sensitive customer data (PII) to a third-party
  model API. They say the business need justifies it. What do you do?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 515
total_tokens: 707
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T00:42:38-05:00'
sources: []
---

**First‑principle reasoning**

The core problem is *information leakage*: PII is high‑value data that, if exposed, can be misused or trigger regulatory penalties. The API call is an **information channel** whose capacity equals the amount of data that could in principle flow from client to server. By sending raw PII we open a channel with full bandwidth for the third party to observe every bit.

Why must we close this channel?  
1. **Privacy‑as‑a‑service**: The law (GDPR, CCPA) treats any personal data transfer as a contractual obligation; the customer’s consent is insufficient if the provider cannot guarantee confidentiality.  
2. **Risk‑based optimization**: A cost–benefit analysis that includes the *expected loss* from a breach outweighs short‑term business gains. The expected loss \(E[L] = P_{\text{breach}} \times V_{\text{PII}}\) grows linearly with the amount of data sent; reducing the data volume reduces both \(P_{\text{breach}}\) and \(V_{\text{PII}}\).  
3. **Information‑theoretic leakage**: Even if the model is “black box”, side‑channels (response timing, error messages) can leak up to a few bits per query. By sending only *feature‑encoded* data we constrain the mutual information between request and PII.

**Non‑obvious insight**  
Most stakeholders assume that “business need justifies” any transfer. In practice, *de‑identification is not a substitute for encryption*. A third party can re‑identify de‑identified data when combined with external datasets; thus the only safe path is to avoid sending PII at all.

**Action plan**

1. **Redact or mask**: Strip identifiers and replace them with pseudonyms that cannot be reversed without an internal key.  
2. **Feature engineering**: Convert raw attributes into model‑ready features (e.g., embeddings, one‑hot encodings) that retain predictive power but omit PII.  
3. **Zero‑knowledge proof or differential privacy**: If the API requires raw values for accuracy, enforce a local DP mechanism to add calibrated noise before transmission.  

By treating the data transfer as an information channel and applying risk‑based optimization, we ensure compliance, protect customers, and preserve business value without exposing PII.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
