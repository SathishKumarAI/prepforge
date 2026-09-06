---
qid: ing_2566134412__think__local
question: 'Explain: Authentication — What is an API? | System Design'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 439
total_tokens: 630
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T05:08:36-05:00'
sources: []
---

**1️⃣ Clarify the scope & assumptions**  
   - Confirm that “API” refers to a *Programmatic Interface* exposed by a service, not a user‑auth system.  
   - Assume we’re dealing with web‑based services (REST/GraphQL) and common authentication flows (OAuth2/OIDC).  

**2️⃣ Mental model / framework**  
   - **Layered architecture:** Client → API Gateway → Service Layer → Data Store.  
   - **Security layers:** Transport (TLS), Authentication (tokens), Authorization (scopes/claims).  
   - **Authentication patterns:** Resource Owner Password Credentials, Authorization Code, Implicit, Client Credentials, Device Flow.  

**3️⃣ Step‑by‑step reasoning**  
   1. Define an API: a set of endpoints with contracts (HTTP verbs, URLs, payloads).  
   2. Explain how authentication is required to protect these endpoints.  
   3. Walk through the OAuth2 flow: user authenticates → authorization server issues an access token → client presents token to API.  
   4. Show token validation at the API gateway (signature, expiration, scopes).  
   5. Highlight common pitfalls: short‑lived tokens vs refresh tokens, storing secrets, revocation.  

**4️⃣ Common traps & wrong turns**  
   - Mixing up *authentication* with *authorization*.  
   - Assuming all APIs are public; many need API keys or JWTs.  
   - Forgetting to enforce TLS (man‑in‑the‑middle attacks).  
   - Overlooking token revocation and rotation strategies.  

**5️⃣ Sanity‑check & communicate**  
   - Verify that each step maps to real protocol messages (e.g., `POST /token`).  
   - Use a concrete example: “Imagine a banking API; the client obtains an OAuth2 access token after user login, then calls `/accounts`.”  
   - Summarize by stressing the separation of concerns: the API defines contracts; authentication ensures only legitimate callers hit those contracts.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
