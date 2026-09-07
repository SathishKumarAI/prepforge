---
qid: ing_1d46200fa1__faang__local
question: 'Explain: Overview — The five laws of cloud-native authorization'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 497
total_tokens: 731
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T19:53:07-05:00'
sources: []
---

**Clarify**  
*Question*: “Explain the five laws of cloud‑native authorization.”  
Assumptions: you’re talking about best‑practice principles for building secure, scalable access control in microservices/cloud environments (e.g., OAuth2/OIDC, ABAC, JWT).  

---

### 1. Least Privilege
Grant only the minimal scopes/claims needed per service or user. *Why?* Reduces blast radius if a token is compromised.

### 2. Identity‑First Design
Treat identity as the first class object; services should never assume ownership of authentication logic but rely on a trusted IdP (e.g., Keycloak, Cognito).  

### 3. Token‑Based Delegation
Use short‑lived access tokens with embedded claims, optionally refreshed via a secure token endpoint. Enables stateless service‑to‑service calls.

### 4. Policy as Code
Encode authorization rules in declarative policies (OPA/Policy‑Engine) rather than imperative checks scattered across codebases. Allows versioning, audit, and automation.

### 5. Observability & Auditing  
Log every token issuance, revocation, and access decision. Feed logs into a SIEM or monitoring stack for anomaly detection and compliance reporting.

---

**Depth**  
- Tokens: JWTs signed with RS256; include `iss`, `sub`, `aud`, `exp`.  
- Policies: Example OPA rule – “allow if user.role in service.allowedRoles AND request.method == 'GET'.”  

**Edge Cases**  
- Token revocation latency (e.g., using short TTL + refresh).  
- Cross‑tenant isolation: ensure claims cannot be spoofed across namespaces.  
- Service mesh interceptors for token validation.

**Optimize & Communicate**  
1. **Batch policy evaluation** to reduce OPA calls.  
2. Use **JWKS rotation** to avoid downtime.  
3. Explain trade‑offs (short TTL → more traffic vs. revocation latency).  

*Result*: A concise, interview‑ready explanation that demonstrates structured reasoning and deep technical grasp.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
