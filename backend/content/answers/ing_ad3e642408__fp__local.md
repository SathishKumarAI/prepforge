---
qid: ing_ad3e642408__fp__local
question: 'Explain: Privacy Considerations — RFC 8707: Resource Indicators for OAuth
  2.0 | RFC Editor'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 182
output_tokens: 370
total_tokens: 552
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T22:12:51-05:00'
sources: []
---

**Why resource indicators matter for privacy**

OAuth 2.0 was designed as a *delegated authorization* protocol: an access token grants the client permission to act on behalf of a user at a resource server.  
In practice, many providers issue **single‑issuer tokens that are valid across all their APIs**. A malicious or compromised client could simply replay that token against any other API endpoint, thereby leaking private data the user never intended to share.

RFC 8707 solves this by introducing *resource indicators*—a new request header (`oauth-resource`) that explicitly names the target resource server. The authorization server must then **bind** the issued access token to that indicator (e.g., via a `audience` claim). Thus, even if the same token is intercepted and sent elsewhere, it will be rejected unless the indicator matches.

**Deeper principle: mutual information minimization**

Binding tokens to resource servers reduces the *mutual information* between a user’s credential set and any single client. The more tightly we constrain where a token can be used, the less information leakage occurs per transaction—an instance of *information‑theoretic privacy*. This aligns with differential privacy’s goal: limit how much a single interaction reveals about the underlying data.

**Non‑obvious insight**

Most people overlook that resource indicators also mitigate **token replay across *different* issuers**. By requiring each issuer to include its own identifier in the indicator, cross‑issuer replay becomes impossible even if tokens are forged. Hence, RFC 8707 simultaneously strengthens token binding and enforces inter‑issuer isolation without changing existing OAuth flows or token formats.

---

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
