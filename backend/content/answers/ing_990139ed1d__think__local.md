---
qid: ing_990139ed1d__think__local
question: 'Explain: RFC 8707 : Resource Indicators for OAuth 2.0'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 194
output_tokens: 575
total_tokens: 769
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T11:12:54-05:00'
sources: []
---

### 1. Clarify the ask and set assumptions  
- **What is being asked?** The user wants an explanation of *RFC 8707*—the specification that defines “resource indicators” in OAuth 2.0.  
- **Assumptions:**  
  - The reader knows basic OAuth 2.0 (authorization server, client, resource server).  
  - They are looking for a conceptual overview, not the full RFC text.

### 2. Choose a mental model / framework  
- **OAuth 2.0 flow** → **Why multiple resource servers?** → **How to let the authorization server know which resource is targeted?**  
- Use a *“problem–solution”* lens: identify the problem (resource‑server selection), then explain how RFC 8707 supplies a solution via the `at_hash`/`resource` parameter.

### 3. Step‑by‑step reasoning toward the answer  
1. **Recap OAuth 2.0**: client → authorization server → token; token used to access resource server.  
2. **Problem in multi‑resource scenarios**: A single authorization server may issue tokens for many resources, but the token itself doesn’t say which one it’s for.  
3. **RFC 8707’s core idea**: introduce a `resource` request parameter (or header) when obtaining a token or refreshing it.  
4. **Effect**: Authorization server can tailor scopes and claims to that specific resource; tokens become *resource‑specific*.  
5. **Key details to mention**:  
   - Syntax (`resource` as a URI, optional multiple values).  
   - Interaction with scopes (e.g., `scope=read` vs. `scope=read&resource=https://api.example.com`).  
   - How resource servers validate the `audience` claim matches their identifier.

### 4. Common traps to avoid  
- **Mixing “access‑token” and “refresh‑token” flows**: emphasize that the indicator can be used in both.  
- **Over‑emphasizing security details**: keep it high‑level; dive into RFC only if asked.  
- **Assuming all servers support it**: note that implementation is optional and requires coordination.

### 5. Sanity‑check & verbalize the explanation  
- Re‑state the problem in one sentence, then the solution.  
- Use a simple example (client requests token for `https://api.example.com`) to illustrate the flow.  
- Conclude with a quick note on benefits: clearer scope mapping, reduced token misuse, and better interoperability.

Follow this scaffold whenever you need to explain a protocol extension or RFC in plain terms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
